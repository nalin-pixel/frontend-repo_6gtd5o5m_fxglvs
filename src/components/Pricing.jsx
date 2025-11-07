import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    period: 'user / month',
    features: [
      'WebRTC softphone',
      'Basic IVR & queues',
      'Call recording (30d)',
      'Email support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Business',
    price: '$39',
    period: 'user / month',
    features: [
      'All Starter features',
      'Multi-tenant & SSO',
      'Advanced analytics',
      'CRM integrations',
    ],
    cta: 'Choose Business',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    period: '',
    features: [
      'Dedicated region & SLA',
      'Custom routing & APIs',
      'Unlimited retention',
      '24/7 priority support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Scale up or down with plans that fit any stage.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border p-6 backdrop-blur-xl ${tier.highlighted ? 'border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-fuchsia-500/10' : 'border-white/10 bg-black/40'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">{tier.price}</div>
                  <div className="text-xs text-white/60">{tier.period}</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300"><Check size={14} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium ${tier.highlighted ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black' : 'border border-white/10 text-white/90 hover:bg-white/10'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
