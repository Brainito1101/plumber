'use client';

import Image from 'next/image';
import { Star, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 text-balance">
                Rod Riccardi Plumbing
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary font-semibold mb-2">
                Reliable & Affordable Plumbing Services in Austin
              </p>
            </div>

            {/* Rating and Location */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-foreground text-sm sm:text-base">4.8</span>
                <span className="text-muted-foreground text-xs sm:text-sm">(134 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                <span>Austin, Texas, USA</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a href="tel:(512)555-0147" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base"
                >
                  <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Call Now
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                Book Service
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-semibold text-foreground">134+ Jobs Completed</p>
                <p className="text-xs text-muted-foreground">Trusted by locals</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-semibold text-foreground">Same-Day Service</p>
                <p className="text-xs text-muted-foreground">Available now</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/plumber-hero.jpg"
              alt="Professional plumber working on residential plumbing repair in Austin, Texas"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
