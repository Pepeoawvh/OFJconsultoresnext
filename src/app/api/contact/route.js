import { Resend } from 'resend'

export const runtime = 'nodejs'

function badRequest(message) {
  return new Response(JSON.stringify({ error: message }), { status: 400 })
}

function cleanEnv(value) {
  return (value || '').trim().replace(/^["']|["']$/g, '').trim()
}

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      name,
      rut,
      email,
      telefono,
      domicilio,
      motivo,
      modalidad,
      message,
      honeypot
    } = body || {}

    if (honeypot) return badRequest('spam')
    if (!name || !email) return badRequest('missing required fields')

    const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env
    const apiKey = cleanEnv(RESEND_API_KEY)
    const to = cleanEnv(CONTACT_TO)
    const from = cleanEnv(CONTACT_FROM)

    if (!apiKey || !to || !from) {
      console.error('Missing Resend environment variables')
      return new Response(JSON.stringify({ error: 'email not configured' }), { status: 500 })
    }

    const resend = new Resend(apiKey)

    const subject = `Nuevo contacto de ${name}`
    const html = `
      <h2>Nuevo formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>RUT:</strong> ${rut || 'No informado'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono || 'No informado'}</p>
      <p><strong>Domicilio:</strong> ${domicilio || 'No informado'}</p>
      <p><strong>Motivo:</strong> ${motivo || 'No informado'}</p>
      <p><strong>Modalidad:</strong> ${modalidad || 'No informado'}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${(message || '').replace(/\n/g, '<br/>') || 'Sin mensaje'}</p>
    `

    const { error: errorAdmin } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
    })

    if (errorAdmin) {
      console.error('Resend error (admin):', errorAdmin)
      return new Response(JSON.stringify({ error: 'failed to send email' }), { status: 500 })
    }

    const subjectConfirm = 'Gracias por contactarnos - Oscar Fuentes Abogado'
    const htmlConfirm = `
      <h2>Gracias por tu consulta</h2>
      <p>Hola ${name},</p>
      <p>Hemos recibido tu mensaje correctamente. Te contactaremos a la brevedad.</p>
      <p><strong>Resumen de tu consulta:</strong></p>
      <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Teléfono:</strong> ${telefono || 'No informado'}</li>
        <li><strong>Motivo:</strong> ${motivo || 'No informado'}</li>
        <li><strong>Mensaje:</strong> ${(message || '').replace(/\n/g, '<br/>') || 'Sin mensaje'}</li>
      </ul>
      <p>Saludos cordiales,<br>Oscar Fuentes J. - Abogado</p>
    `

    const { error: errorConfirm } = await resend.emails.send({
      from,
      to: email,
      subject: subjectConfirm,
      html: htmlConfirm,
    })

    if (errorConfirm) {
      console.error('Resend error (confirmation):', errorConfirm)
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'invalid request' }), { status: 400 })
  }
}
