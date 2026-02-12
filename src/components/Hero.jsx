import Image from "next/image";

export default function Hero() {
  return (
    <section className="jumbotron relative overflow-hidden py-12 md:py-12 min-h-105 md:min-h-105">
      {/* Imagen absoluta a la derecha */}
      <div className="absolute inset-y-0 right-0 w-[60%] md:w-[55%] lg:w-[50%] hidden md:block ">
        <div className="relative h-full ">
          <Image
            src="/assets/img/bannerjumbo.jpg"
            alt="Banner"
            fill
            className="object-cover object-right"
            style={{ objectPosition: "right center" }}
          />
          {/* Degradado blanco sutil en borde izquierdo */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
        {/* Texto en primer plano */}
        <div className="text-center md:text-left  py-4 md:py-0 text-zinc-900">
          <h2 className="titlejumbotext font-urbanist text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
            <p>La llave de la tranquilidad,</p> <p>es tener las cosas claras</p>
          </h2>
          <p className="jumbosubtext mt-6 max-w-xl leading-relaxed text-xl text-zinc-700">
            10 años de experiencia en la Administración Tributaria, primero como
            abogado de la Tesorería General de la República y luego como asesor
            del Servicio de Impuestos Internos
          </p>
          <div className="mt-8">
            <a
              href="#forminicio"
              className="inline-block rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 shadow-md"
            >
              Pide tu cita
            </a>
          </div>
        </div>

        {/* columna vacía para mantener la separación */}
        <div className="hidden md:block" aria-hidden="true"></div>
      </div>
    </section>
  );
}
