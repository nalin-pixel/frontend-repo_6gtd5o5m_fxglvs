import { Shield, Cpu, Cloud, Headphones, Workflow, Settings, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'End-to-end encryption, SRTP/TLS, fraud detection, and granular role-based access.',
  },
  {
    icon: Cpu,
    title: 'AI Call Intelligence',
    desc: 'Smart IVR, sentiment tagging, and automated summaries using on-device + cloud AI.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    desc: 'Autoscale microservices, zero-downtime upgrades, and instant global edge media relays.',
  },
  {
    icon: Headphones,
    title: 'Omnichannel',
    desc: 'Voice, SMS, WhatsApp, and webchat unified in one agent console with live presence.',
  },
  {
    icon: Workflow,
    title: 'Visual Flow Builder',
    desc: 'Drag-and-drop callflows, time conditions, queues, and triggers that integrate anywhere.',
  },
  {
    icon: Settings,
    title: 'SIP & WebRTC',
    desc: 'First-class support for popular SIP phones and a zero-install WebRTC softphone.',
  },
  {
    icon: Zap,
    title: 'Low Latency',
    desc: 'Optimized media paths and jitter buffers deliver crystal clear audio worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Numbers',
    desc: 'Provision DIDs in 80+ countries with instant activation and compliance tooling.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Why NovaPBX</h2>
          <p className="mt-3 text-white/70">A modern PBX engineered for reliability, security, and effortless scale.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition hover:border-white/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 text-cyan-300">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
