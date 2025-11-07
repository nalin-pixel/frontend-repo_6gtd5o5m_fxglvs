import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    note: 'per tenant / month',
    features: [
      'Up to 10 users',
      '1 local number',
      'Basic IVR & voicemail',
      'Email support',
    ],
  },
  {
    name: 'Business',
    price: '$99',
    note: 'per tenant / month',
    highlight: true,
    features: [
      'Up to 100 users',
      '5 local or toll‑free numbers',
      'Queues & recordings',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    note: 'custom plan',
    features: [
      'Unlimited users',
      'Global numbers',
      'SLA + SSO/SAML',
      'Dedicated success',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, scalable pricing</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Only pay for what you use. Bring your own carrier or use ours.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border bg-white/5 backdrop-blur ${
                plan.highlight ? 'border-indigo-400/60 ring-2 ring-indigo-400/40' : 'border-white/10'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold text-lg">{plan.name}</h3>
                <span className="text-white/70 text-sm">{plan.note}</span>
              </div>
              <div className="mt-4 text-3xl font-bold text-white">{plan.price}</div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/80">
                    <Check className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${
                plan.highlight ? 'bg-white text-[#0B0F1A] hover:bg-white/90' : 'border border-white/20 text-white hover:bg-white/10'
              }`}>
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
