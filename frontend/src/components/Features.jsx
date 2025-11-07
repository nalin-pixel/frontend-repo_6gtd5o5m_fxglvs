import { Shield, Globe, PhoneCall, Boxes } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Multi‑Tenant Ready',
    desc: 'Isolate customers, users, numbers, and policies on secure partitions.',
  },
  {
    icon: PhoneCall,
    title: 'SIP & WebRTC',
    desc: 'Register softphones and browsers with secure TURN/ICE for global reach.',
  },
  {
    icon: Boxes,
    title: 'Visual Callflows',
    desc: 'Drag‑and‑drop builder for IVR, queues, recording, and AI routing.',
  },
  {
    icon: Shield,
    title: 'Enterprise‑Grade',
    desc: 'RBAC, audit logs, encryption at rest, and rate limiting baked in.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Build on a rock‑solid core</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Everything you need to deploy and scale a modern cloud PBX from day one.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="size-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center mb-4">
                <Icon className="size-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-white/70 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
