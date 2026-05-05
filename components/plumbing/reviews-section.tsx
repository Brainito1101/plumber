'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Rod fixed my leaking sink within an hour. Super professional and affordable. Highly recommended!',
    service: 'Leak Repair'
  },
  {
    id: 2,
    name: 'James K.',
    rating: 5,
    text: 'Called for an emergency at 11 PM and Rod was there within 30 minutes. Saved us from major water damage!',
    service: 'Emergency Service'
  },
  {
    id: 3,
    name: 'Maria L.',
    rating: 5,
    text: 'Rod replaced our water heater with minimal disruption. Great communication and fair pricing.',
    service: 'Water Heater Installation'
  },
  {
    id: 4,
    name: 'David P.',
    rating: 4,
    text: 'Excellent work on our drain cleaning. Very thorough and explained everything clearly.',
    service: 'Drain Cleaning'
  },
  {
    id: 5,
    name: 'Jennifer T.',
    rating: 5,
    text: 'Best plumber in Austin. Rod is reliable, honest, and does quality work. Worth every penny!',
    service: 'Pipe Repair'
  },
  {
    id: 6,
    name: 'Robert H.',
    rating: 5,
    text: 'I recommend Rod to all my friends and family. Professional, fast, and affordable. A+',
    service: 'General Repair'
  }
];

export function ReviewsSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">Customer Reviews</h2>
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 flex-wrap">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-base sm:text-lg font-bold text-foreground">4.8 out of 5</span>
            <span className="text-xs sm:text-sm text-muted-foreground">(134 reviews)</span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Austin
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-card p-4 sm:p-5 md:p-6 border-border flex flex-col"
            >
              <div className="flex items-center gap-1 mb-2 sm:mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex-grow leading-relaxed">&quot;{review.text}&quot;</p>
              <div className="pt-3 sm:pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-xs sm:text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.service}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm sm:text-base">
            Leave a Review
          </Button>
        </div>
      </div>
    </section>
  );
}
