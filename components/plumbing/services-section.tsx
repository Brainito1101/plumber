'use client';

import { Droplets, AlertCircle, Thermometer, Wrench, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    id: 1,
    name: 'Leak Repair',
    description: 'Fast diagnosis and repair of water leaks in pipes, fixtures, and connections',
    price: '$75',
    icon: Droplets,
    color: 'text-blue-500'
  },
  {
    id: 2,
    name: 'Drain Cleaning',
    description: 'Professional drain cleaning using modern equipment and techniques',
    price: '$99',
    icon: AlertCircle,
    color: 'text-emerald-500'
  },
  {
    id: 3,
    name: 'Water Heater Installation',
    description: 'Expert installation and replacement of tankless and traditional water heaters',
    price: '$450',
    icon: Thermometer,
    color: 'text-orange-500'
  },
  {
    id: 4,
    name: 'Pipe Repair & Replacement',
    description: 'Complete pipe repair and replacement for residential and commercial properties',
    price: '$120',
    icon: Wrench,
    color: 'text-slate-500'
  },
  {
    id: 5,
    name: 'Emergency Plumbing',
    description: '24/7 emergency response for urgent plumbing issues and pipe bursts',
    price: '$150+',
    icon: Clock,
    color: 'text-red-500'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">Our Services</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive plumbing services for residential and commercial properties in Austin
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="bg-card p-4 sm:p-5 md:p-6 border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0 ${service.color}`}>
                    <IconComponent className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">{service.name}</h3>
                    <p className="text-xl sm:text-2xl font-bold text-primary mt-1">Starting at {service.price}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
