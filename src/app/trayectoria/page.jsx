import Image from "next/image";

const formacionUniversitaria = [
  "Abogado, Corte Suprema de Justicia, UDD Concepción. (enero 2012)",
  "Magíster en Derecho de la Empresa, mención Derecho Tributario, UDD Concepción. (noviembre 2013)",
  "Curso sobre Reforma Tributaria y su aplicación, USACH. (noviembre 2015)",
  "Diplomado en Tributación Nacional para profesionales del Sector Público, PUC Valparaíso. (octubre 2018)",
  "Diplomado en Tributación Avanzada, UDD Santiago. (diciembre 2022)",
];

const formacionSii = [
  "Actuaciones administrativas ante Tribunales Tributarios y Aduaneros (diciembre 2014)",
  "Nociones básicas del Derecho Penal y de los Delitos Tributarios, en el marco de la reforma tributaria (mayo 2015)",
  "Recopilación de antecedentes y análisis de casos (julio 2015)",
  "Litigación civil tributaria (septiembre 2016)",
  "Derecho Tributario, renta, IVA, y Código Tributario (agosto 2017)",
  "Litigación en procedimientos especiales (mayo 2018)",
  "Comités para la prevención del lavado de activos, financiamiento del terrorismo, y delito funcionario (octubre 2018)",
  "Sistemas de apoyo al trabajo fiscalizador (agosto 2019)",
  "Régimen parcialmente integrado Art. 14 B Ley de la Renta (agosto 2020)",
  "Fiscalización a contribuyentes de altos ingresos o patrimonios (julio 2021)",
  "Gestión por procesos (octubre 2021)",
  "Documentos Tributarios Electrónicos (mayo 2022)",
  "Sociedades de Profesionales (marzo 2023)",
];

export default function TrayectoriaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[url('/assets/img/silvertTriangleGeometricBackground.png')] bg-cover opacity-10" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                Trayectoria Profesional
              </p>
              <h1 className="font-urbanist mt-3 text-3xl sm:text-4xl font-semibold text-zinc-900">
                Oscar Fuentes Jiménez
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                Oscar es abogado de la Universidad del Desarrollo de Concepción con
                experiencia en juicios durante 12 años, 10 de los cuales han sido en
                materias exclusivamente tributarias, tanto en cobranzas realizadas por
                la Tesorería General de la República, como en juicios por determinación
                de tributos que han sido establecidos por el Servicio de Impuestos Internos.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                Ingresó a la Administración Tributaria en junio-2013, asumiendo el liderazgo
                de la Unidad Operativa de Cobro Nº 4 de la Tesorería General de la República
                de Temuco, ejecutando la cobranza judicial del Impuesto Territorial
                (contribuciones) y de los créditos públicos con naturaleza especial. Luego,
                liderando la Unidad Operativa de Cobro Nº 2 de la Tesorería General de la
                República de Puerto Montt, encabezó la cobranza de impuestos fiscales, como
                IVA y renta.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                Con la experiencia adquirida, en septiembre-2014, ingresó al Departamento
                Jurídico del Servicio de Impuestos Internos de Puerto Montt lugar donde se
                desempeñó como abogado litigante y, a contar de noviembre-2017, también como
                asesor del Departamento de Fiscalización Regional.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-full">
                <div className="absolute -inset-3 rounded-3xl bg-sky-100/60 blur-2xl" />
                <div className="relative h-full min-h-[360px]">
                  <Image
                    src="/assets/img/Trayectoriaprofesional.jpg"
                    alt="Oscar Fuentes"
                    fill
                    className="rounded-3xl object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-sky-100 bg-white/80 p-5 text-sm text-zinc-700 shadow-sm">
            <p>
              A contar de Octubre de 2023 ejerce como asesor independiente.
            </p>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-zinc-700">
            Oriundo de San Carlos de Itihue, pertenece a la tercera generación de abogados
            de su familia, la que se iniciara en la tradición de las leyes de mano de su abuelo,
            Oscar Raúl Fuentes Venegas (Universidad de Chile, 1942), carrera que fuera continuada
            por su padre, Raúl Fuentes Sepúlveda (Universidad de Concepción, 1981). Su interés
            está en los aspectos tributarios y procesales de la legislación chilena.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6">
            <div className="rounded-3xl bg-gradient-to-br from-white via-sky-50 to-white p-6 ring-1 ring-sky-100/70">
              <h2 className="font-urbanist text-xl font-semibold text-zinc-900">
                Formación Profesional
              </h2>
              <p className="mt-2 text-xs uppercase tracking-widest text-sky-600">
                Formación Universitaria
              </p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                {formacionUniversitaria.map((item, idx) => (
                  <li key={idx} className="rounded-xl bg-white/80 p-3 ring-1 ring-zinc-200/60">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-6 ring-1 ring-sky-100/70">
              <h2 className="font-urbanist text-xl font-semibold text-zinc-900">
                Experiencia como Abogado y Consultor Tributario
              </h2>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-sky-50/60 p-4 ring-1 ring-sky-100/70">
                  <p className="text-sm font-semibold text-zinc-900">Sector Privado</p>
                  <p className="mt-2 text-sm text-zinc-700">
                    Sandoval y Latsague abogados, Concepción (junio-2011 / junio 2013)
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-50/60 p-4 ring-1 ring-sky-100/70">
                  <p className="text-sm font-semibold text-zinc-900">Sector Público</p>
                  <p className="mt-2 text-sm text-zinc-700">
                    Tesorería General de la República y Servicio de Impuestos Internos
                    (junio 2013 / septiembre 2023)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-white via-sky-50 to-white p-6 ring-1 ring-sky-100/70">
            <h3 className="font-urbanist text-xl font-semibold text-zinc-900">
              Formación técnica impartida por el SII
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {formacionSii.map((item, idx) => (
                <li key={idx} className="rounded-xl bg-white/80 p-3 ring-1 ring-zinc-200/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}