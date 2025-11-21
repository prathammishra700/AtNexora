import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Deluxe',
      price: '$1,000',
      desc: 'Perfect for solo creators starting out.',
      features: ['AI Caption Generator', '5 Video Scripts/mo', 'Basic Analytics', 'Community Support'],
      gradient: 'from-blue-400 to-blue-600',
      highlight: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      desc: 'For growing brands needing automation.',
      features: ['Unlimited AI Generations', 'Project Management', 'Advanced Trend Insights', 'Priority Support', 'Custom Brand Voice'],
      gradient: 'from-purple-400 to-purple-600',
      highlight: false
    },
    {
      name: 'Elite',
      price: '$10,000',
      desc: 'Full-scale agency solution.',
      features: ['API Access', 'White-label Reports', 'Dedicated Success Manager', 'Custom Model Fine-tuning', 'Multi-User Access'],
      gradient: 'from-fuchsia-500 to-purple-600',
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Pricing per <span className="text-gradient">tier</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-3xl border transition-transform duration-300 hover:-translate-y-2 ${
                tier.highlight 
                  ? 'bg-gradient-to-b from-purple-900/40 to-black border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.15)] scale-105 z-10' 
                  : 'glass-card border-white/10'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm min-h-[40px]">{tier.desc}</p>
                </div>
                {/* Abstract icon shape */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tier.gradient} opacity-80 blur-sm`}></div>
              </div>

              <ul className="space-y-4 mb-12">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-8 flex items-center justify-between">
                <span className="text-2xl font-bold">{tier.price}</span>
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;