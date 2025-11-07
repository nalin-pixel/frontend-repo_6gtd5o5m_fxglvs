import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We\'ll reach out shortly.');
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Book a live demo</h2>
          <p className="mt-3 text-white/70">Tell us a bit about your team and we\'ll tailor a walkthrough.</p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Full name</label>
              <input required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Work email</label>
              <input required type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/50" placeholder="jane@company.com" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm text-white/70">Company</label>
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/50" placeholder="Company Inc." />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm text-white/70">What would you like to achieve?</label>
              <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/50" placeholder="E.g., migrate from legacy PBX, set up call center, integrate CRM..." />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-medium text-black">
              <Send size={16} /> Request demo
            </button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
