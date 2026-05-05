'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    id: 1,
    name: 'Basic Visit',
    price: '$75',
    description: 'Professional diagnosis and assessment',
    features: [
      'Thorough inspection',
      'Professional diagnosis',
      'Cost estimate provided',
      'Same-day scheduling'
    ],
    cta: 'Schedule Visit'
  },
  {
    id: 2,
    name: 'Standard Repair',
    price: '$120',
    description: 'Most common residential repairs',
    features: [
      'Service visit included',
      'Parts and labor',
      'Professional installation',
      '30-day workmanship guarantee'
    ],
    cta: 'Get Quote',
    highlighted: true
  },
  {
    id: 3,
    name: 'Emergency Visit',
    price: '$150',
    description: 'After-hours emergency response',
    features: [
      'Priority 24/7 response',
      'Immediate assessment',
      'Emergency repair service',
      'Same-night service available'
    ],
    cta: 'Call Emergency'
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">Transparent Pricing</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. All prices quoted upfront. Custom quotes available for larger projects.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative p-4 sm:p-5 md:p-6 border-border transition-all ${
                tier.highlighted
                  ? 'md:scale-105 shadow-lg border-primary/50 bg-primary/5'
                  : 'bg-card'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4 sm:mb-6 pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{tier.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{tier.description}</p>
                <p className="text-3xl sm:text-4xl font-bold text-primary">{tier.price}</p>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full text-sm sm:text-base"
                variant={tier.highlighted ? 'default' : 'outline'}
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Button size="lg" variant="outline" className="bg-card border-primary/30 text-sm sm:text-base">
            Request a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
