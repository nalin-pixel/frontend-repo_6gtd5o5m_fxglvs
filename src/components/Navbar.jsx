import { useState } from 'react';
import { Menu, X, Phone, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-black">
                <Rocket size={20} />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">NovaPBX</span>
            </a>

            <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a className="hover:text-white" href="#features">Features</a>
              <a className="hover:text-white" href="#pricing">Pricing</a>
              <a className="hover:text-white" href="#contact">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
                <Phone size={16} />
                Book a demo
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-fuchsia-500/20">
                Get Started
              </a>
            </div>

            <button className="md:hidden rounded-lg p-2 text-white" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-3 text-white/90">
                <a onClick={() => setOpen(false)} href="#features">Features</a>
                <a onClick={() => setOpen(false)} href="#pricing">Pricing</a>
                <a onClick={() => setOpen(false)} href="#contact">Contact</a>
                <a onClick={() => setOpen(false)} href="#contact" className="mt-2 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm">
                  <Phone size={16} /> Book a demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
