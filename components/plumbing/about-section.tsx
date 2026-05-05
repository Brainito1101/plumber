'use client';

import { CheckCircle, Shield, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden flex items-center justify-center order-2 md:order-1">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">👨‍🔧</div>
              <p className="text-sm sm:text-base text-foreground font-semibold">12+ Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
                About Rod Riccardi
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Rod Riccardi is a licensed plumber with 12+ years of experience serving residential
                and commercial clients in Austin. Known for fast response times and quality
                workmanship, Rod has built a reputation for reliability and affordability.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Credentials & Services</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base">Licensed & Insured</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Fully licensed plumber with complete insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base">Emergency Services Available</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">24/7 emergency response for urgent plumbing issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base">Quality Guaranteed</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Every job backed by our satisfaction guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
              <Card className="bg-card p-3 sm:p-4 border-border">
                <p className="text-2xl sm:text-3xl font-bold text-primary">12+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
              </Card>
              <Card className="bg-card p-3 sm:p-4 border-border">
                <p className="text-2xl sm:text-3xl font-bold text-secondary">4.8★</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Customer Rating</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
