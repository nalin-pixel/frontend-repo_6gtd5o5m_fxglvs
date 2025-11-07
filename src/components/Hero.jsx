import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 min-h-[80vh]">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/1tf5uYy1B5lRmk7m/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to ensure text contrast; doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black via-black/60 to-black" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 py-24 md:grid-cols-2">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl"
            >
              Futuristic Cloud VoIP PBX for Modern Teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-xl text-base text-white/70 md:text-lg"
            >
              Deploy a secure, scalable phone system with AI call routing, WebRTC softphone, and deep CRM integrations. Built for performance and simplicity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#pricing" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-medium text-black shadow-lg shadow-fuchsia-500/20">
                Start Free Trial
              </a>
              <a href="#features" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3 text-sm text-white/90 hover:bg-white/10">
                Explore Features
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-10 z-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
            <div className="relative z-10 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-3">
                {[
                  'AI Routing',
                  'WebRTC Softphone',
                  'SIP Trunking',
                  'Call Recording',
                  'Multi-tenant',
                  'CRM Sync',
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-white/90">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
