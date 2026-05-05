'use client';

import { CheckCircle, Award, Zap, Users } from 'lucide-react';

const trustItems = [
  {
    icon: Award,
    text: 'Verified by Peoples Info'
  },
  {
    icon: Users,
    text: '134+ Jobs Completed'
  },
  {
    icon: Zap,
    text: 'Same-Day Service Available'
  },
  {
    icon: CheckCircle,
    text: 'Licensed & Insured'
  }
];

export function TrustSection() {
  return (
    <section className="bg-primary/5 border-y border-border py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <IconComponent className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-semibold text-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
