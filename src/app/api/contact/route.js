import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

function badRequest(message){
  return new Response(JSON.stringify({ error: message }), { status: 400 })
}

export async function POST(request){
  try{
    const body = await request.json()
    const {
      name,
      rut,
      email,
      telefono,
      motivo,
      modalidad,
      message,
      honeypot
    } = body || {}

    if (honeypot) return badRequest('spam')
    if (!name || !email) return badRequest('missing required fields')

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO,
      CONTACT_FROM
    } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.error('Missing SMTP environment variables')
      return new Response(JSON.stringify({ error: 'email not configured' }), { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    })

    const subject = `Nuevo contacto de ${name}`
    const html = `
      <h2>Nuevo formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>RUT:</strong> ${rut || 'No informado'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono || 'No informado'}</p>
      <p><strong>Motivo:</strong> ${motivo || 'No informado'}</p>
      <p><strong>Modalidad:</strong> ${modalidad || 'No informado'}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${(message || '').replace(/\n/g, '<br/>') || 'Sin mensaje'}</p>
    `

    await transporter.sendMail({
      from: CONTACT_FROM || `"Formulario Web" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject,
      html
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  }catch(err){
    console.error(err)
    return new Response(JSON.stringify({ error: 'invalid request' }), { status: 400 })
  }
}
