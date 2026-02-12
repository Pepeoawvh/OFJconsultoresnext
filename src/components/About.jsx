export default function About() {
  return (
    <section id="quienes" className="self-start">
      <div className="mx-auto max-w-6xl px-4 sm:px-4 lg:px-4">
        <div className="rounded-3xl bg-linear-to-br from-white via-sky-50 to-white p-2 sm:p-4 ring-1 ring-sky-100/70">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                Especialidad
              </p>
              <h3 className="font-urbanist mt-3 text-2xl sm:text-3xl font-semibold text-zinc-900">
                Asesoría tributaria con enfoque estratégico y humano
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                Nuestro trabajo combina experiencia en la Administración Tributaria y
                defensa privada para entregar soluciones claras y efectivas.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-zinc-200/60">
                <p className="text-sm font-semibold text-[#ef4600]">
                  Impugnaciones y litigios
                </p>
                <p className="mt-2 text-sm text-zinc-700">
                  Encontrarás conocimiento específico para impugnar resoluciones,
                  liquidaciones y giros de impuestos.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-zinc-200/60">
                <p className="text-sm font-semibold text-[#ef4600]">
                  Defensa en delitos tributarios
                </p>
                <p className="mt-2 text-sm text-zinc-700">
                  Podrás acceder a defensa privada en casos por delito tributario.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-zinc-200/60">
                <p className="text-sm font-semibold text-[#ef4600]">
                  Prescripción y cobros
                </p>
                <p className="mt-2 text-sm text-zinc-700">
                  Revisamos procesos de cobro injustamente prolongados y buscamos
                  la prescripción de deudas perseguidas fuera de plazo legal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
