import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-sky-200 bg-linear-to-br from-sky-200 via-white to-sky-300/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 py-10 md:grid-cols-4 md:items-start">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/img/OftLogoHead.png"
              alt="logo"
              width={120}
              height={120}
            />
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-600">
                Abogado
              </p>
              <p className="text-base font-semibold text-zinc-900">
                Oscar Fuentes
              </p>
            </div>
          </div>

          <div className="text-sm text-zinc-700 md:justify-self-center">
            <p className="font-medium text-zinc-900">Correo</p>
            <div className="mt-3 flex items-center gap-2 text-zinc-600">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m22 8-8.8 6.2a2 2 0 0 1-2.4 0L2 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>contacto@ofuentes.cl</span>
            </div>

          </div>

          <div className="text-sm md:justify-self-center">
            <p className="font-medium text-zinc-900">Enlaces</p>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li>
                <Link href="/trayectoria" className="hover:text-zinc-900">
                  Trayectoria Profesional
                </Link>
              </li>
              <li>
                <Link href="#quienes" className="hover:text-zinc-900">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#nombre-contribuyente" className="hover:text-zinc-900">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm md:justify-self-center">
            <p className="font-medium text-zinc-900">Redes sociales</p>
            <div className="mt-3 flex items-center gap-2 text-[#d25d1a]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <Link href="https://www.instagram.com/" className="hover:text-zinc-900">
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-sky-200/70 py-4 text-xs text-zinc-600 md:flex-row">
          <span>© {new Date().getFullYear()} Oscar fuentes Abogado</span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}
