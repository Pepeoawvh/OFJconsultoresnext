import Image from "next/image";

export default function ProductGrid(){
  const items = [
    { title: 'SII', desc: 'Experiencia en SII',
      badge: 'Asesorías',
      theme: 'from-blue-50 via-white to-sky-50',
      ring: 'ring-blue-100/60',
      titleColor: 'text-blue-700'
    },
    { title: 'TGR', desc: 'Representación en juicios por cobro de impuestos.',
      badge: 'Cobranza',
      theme: 'from-emerald-50 via-white to-teal-50',
      ring: 'ring-emerald-100/60',
      titleColor: 'text-emerald-700'
    },
    { title: 'TTA', desc: 'Defensa en Tribunales Tributarios.',
      badge: 'Litigios',
      theme: 'from-zinc-50 via-white to-indigo-50',
      ring: 'ring-indigo-100/60',
      titleColor: 'text-indigo-700',
      image: '/assets/img/mazochico.jpg'
    }
  ]

  return (
    <div id="galeria" className="product-container mt-4 overflow-hidden ring-1 ring-zinc-200/70">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {items.map((it, idx) => (
          <div
            key={idx}
            className={`product group relative overflow-hidden bg-linear-to-br ${it.theme} text-center transition-all duration-300 hover:-translate-y-1 border-b border-zinc-200/70 sm:border-b-0 sm:border-r last:border-r-0 ${it.ring}`}
          >
            <div className="relative flex flex-col items-center justify-start px-6 py-6 text-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#ef4600] ring-1 ring-zinc-200/70">
                  {it.badge}
                  
                </span>
                <h4 className={`producttitle font-urbanist mt-4 text-4xl font-semibold ${it.titleColor}`} style={{letterSpacing: '6px'}}>
                  {it.title}
                </h4>
                <p className="productext mt-4 text-sm text-zinc-700 leading-relaxed">
                  {it.desc}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
