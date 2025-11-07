import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0f6K4eW3WQZy3i1g/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/40 via-[#0B0F1A]/60 to-[#0B0F1A]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
        >
          The Cloud PBX for AI‑Powered, Global Teams
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-white/80"
        >
          Spin up multi‑tenant voice, WebRTC, and programmable callflows in minutes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white text-[#0B0F1A] px-6 py-3 font-medium hover:bg-white/90 transition">
            Get Started
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition">
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  );
}
