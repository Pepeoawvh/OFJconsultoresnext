"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import WhatsappButton from "./WhatsappButton";
import ContactForm from "./ContactForm";

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const pathname = usePathname()
  const isTrayectoria = pathname === "/trayectoria"

  // close menu on resize to desktop
  useEffect(()=>{
    function onResize(){ if(window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])

  return (
    <>
      <header className="relative overflow-hidden border-b border-white/40 bg-[url('/assets/img/BlueTrianglePattern.jpg')] bg-cover bg-left">
        <div className="pointer-events-none absolute inset-0 bg-white/70 backdrop-blur-md" />
        <div className="container relative mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <Image src="/assets/img/OftLogoHead.png" alt="logo" width={70} height={70} />
            <div>
              <p className="text-xs text-zinc-700">Abogado</p>
              <h1 className="text-lg font-semibold text-zinc-900">Oscar Fuentes</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-3">
            {!isTrayectoria ? (
              <>
                <Link
                  href="/trayectoria"
                  className="text-sm md:text-base font-medium text-zinc-700 hover:text-zinc-900 px-4 py-2 rounded-full bg-white/70 hover:bg-white transition-all duration-200"
                >
                  Trayectoria Profesional
                </Link>
                <Link
                  href="#forminicio"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-4 py-2 text-sm md:text-base shadow-sm hover:shadow-md hover:brightness-110 transition-all duration-200"
                >
                  Contáctanos
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className="text-sm md:text-base font-medium text-zinc-700 hover:text-zinc-900 px-4 py-2 rounded-full bg-white/70 hover:bg-white transition-all duration-200"
                >
                  Inicio
                </Link>
                <button
                  type="button"
                  onClick={() => setOpenContact(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-4 py-2 text-sm md:text-base shadow-sm hover:shadow-md hover:brightness-110 transition-all duration-200"
                >
                  Contáctanos
                </button>
              </>
            )}
          </nav>

          <div className="md:hidden">
            <button aria-label="Abrir menú" onClick={() => setOpen(!open)} className="text-md text-zinc-900">☰</button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden absolute w-full left-0 top-full bg-white/95 shadow-md z-50">
            <div className="p-4 flex flex-col gap-2">
              {!isTrayectoria ? (
                <>
                  <Link
                    href="/trayectoria"
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900"
                  >
                    Trayectoria Profesional
                  </Link>
                  <Link
                    href="#quienes"
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900"
                  >
                    Servicios
                  </Link>
                  <Link
                    href="#forminicio"
                    onClick={() => setOpen(false)}
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-4 py-2 text-sm shadow-sm"
                  >
                    Contáctanos
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900"
                  >
                    Inicio
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false)
                      setOpenContact(true)
                    }}
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-4 py-2 text-sm shadow-sm"
                  >
                    Contáctanos
                  </button>
                </>
              )}
            </div>
          </div>
        )}

      </header>

      {isTrayectoria && openContact && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div className="relative w-full max-w-lg">
            <button
              type="button"
              onClick={() => setOpenContact(false)}
              className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-white text-zinc-700 shadow-md"
              aria-label="Cerrar formulario"
            >
              ×
            </button>
            <ContactForm />
          </div>
        </div>
      )}

      {/* WhatsApp floating button */}
      <WhatsappButton />
    </>
  )
}