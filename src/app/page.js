import Image from "next/image";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white from-white to-zinc-50">
      <main className="container mx-auto ">
        <Hero />

        <section className="">
          <div className=" bg-zinc-50 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
              <div className="self-start">
                <About />
              </div>
              <div className="flex h-full flex-col items-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="">
              <ProductGrid />
            </div>
          </div>
        </section>

        <section className="mt-4">
          <div className="mx-auto w-full max-w-7xl ">
            <div className="overflow-hidden  bg-white ring-1 ring-sky-100/70">
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                    Visión profesional
                  </p>
                  <h3 className="font-urbanist mt-3 text-xl font-semibold text-zinc-900">
                    Compromiso con el contribuyente y la claridad jurídica
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                    La asesoría se enfoca en estrategias concretas, prevención de riesgos y
                    acompañamiento cercano en cada etapa del proceso.
                  </p>
                </div>
                <div className="relative h-full min-h-[320px] sm:min-h-[360px]">
                  <Image
                    src="/assets/img/Quienessomos.jpg"
                    alt="Quiénes somos"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
