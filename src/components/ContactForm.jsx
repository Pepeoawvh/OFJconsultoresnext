"use client"
import { useState } from "react"

export default function ContactForm(){
  const [form, setForm] = useState({
    name:'',
    rut:'',
    email:'',
    telefono:'',
    motivo:'',
    modalidad:'Remoto',
    message:'',
    honeypot:''
  })
  const [status, setStatus] = useState('idle')

  function onChange(e){
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  async function handleSubmit(e){
    e.preventDefault()
    // simple honeypot check
    if (form.honeypot) return setStatus('spam')
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('ok')
        setForm({name:'', rut:'', email:'', telefono:'', motivo:'', modalidad:'Remoto', message:'', honeypot:''})
      } else {
        setStatus('error')
      }
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form id="forminicio" className="w-full max-w-md mx-auto rounded-sm bg-zinc-50 p-5 text-sm" onSubmit={handleSubmit}>
                <div className="mb-6 text-center ">
              <p className="mt-2 text-[#ef4600]">Completa el formulario y te contactaremos a la brevedad</p>
            </div>
      <div className="grid grid-cols-1 gap-3">
        <input id="nombre-contribuyente" aria-label="Nombre" name="name" placeholder="Nombre del Contribuyente" value={form.name} onChange={onChange} className="h-10 w-full rounded-sm border border-zinc-300 bg-white px-4 text-sm text-zinc-800 shadow-inner outline-none transition focus:border-zinc-400" required />
        <input aria-label="RUT" name="rut" placeholder="RUT del Contribuyente ej: 11111111-k" value={form.rut} onChange={onChange} className="h-10 w-full rounded-sm border border-zinc-300 bg-white px-4 text-sm text-zinc-800 shadow-inner outline-none transition focus:border-zinc-400" />
        <input aria-label="Correo" name="email" placeholder="Correo Electrónico" type="email" value={form.email} onChange={onChange} className="h-10 w-full rounded-sm border border-zinc-300 bg-white px-4 text-sm text-zinc-800 shadow-inner outline-none transition focus:border-zinc-400" required />
        <input aria-label="Teléfono" name="telefono" placeholder="Teléfono +56 x xxxx xxxx" value={form.telefono} onChange={onChange} className="h-10 w-full rounded-sm border border-zinc-300 bg-white px-4 text-sm text-zinc-800 shadow-inner outline-none transition focus:border-zinc-400" />

        <select aria-label="Motivo" name="motivo" value={form.motivo} onChange={onChange} className="h-10 w-full rounded-sm border border-zinc-300 bg-white px-4 text-sm text-zinc-800 shadow-inner outline-none transition focus:border-zinc-400">
          <option value="">Motivo de consulta</option>
          <option value="consulta_general">Consulta General</option>
          <option value="contingencia_sii">Contingencia SII</option>
          <option value="contingencia_tgr">Contingencia TGR</option>
          <option value="impuesto_herencias_donaciones">Impuesto Herencias y Donaciones</option>
          <option value="otros">Otros</option>
        </select>

        <select aria-label="Modalidad" name="modalidad" value={form.modalidad} onChange={onChange} className="h-10 w-full rounded-sm border border-zinc-300 bg-white px-4 text-sm text-zinc-800 shadow-inner outline-none transition focus:border-zinc-400">
          <option value="">Modalidad de atención</option>
          <option value="Remoto">Remoto</option>
          <option value="Presencial">Presencial</option>
        </select>

        <textarea aria-label="Mensaje" name="message" placeholder="Mensaje (opcional)" value={form.message} onChange={onChange} rows={3} className="w-full rounded-sm border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-800 shadow-inner outline-none transition focus:border-zinc-400"></textarea>

        <input name="honeypot" value={form.honeypot} onChange={onChange} className="hidden" />
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <button type="submit" disabled={status === 'sending'} className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-white shadow-md transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70">
          Enviar
        </button>
        <div className="text-sm">
          {status === 'sending' && <p>Enviando…</p>}
          {status === 'ok' && <p className="text-green-600">Mensaje enviado. Gracias.</p>}
          {status === 'error' && <p className="text-red-600">Ocurrió un error. Intenta más tarde.</p>}
          {status === 'spam' && <p className="text-zinc-500">Detectado como SPAM.</p>}
        </div>
      </div>
    </form>
  )
}
