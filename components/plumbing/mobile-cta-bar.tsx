'use client';

import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground border-t border-border/50 p-2 sm:p-3 md:hidden z-40 shadow-lg safe-area-inset-bottom">
      <div className="flex gap-2">
        <a href="tel:(512)555-0147" className="flex-1">
          <Button
            size="sm"
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs sm:text-sm"
          >
            <Phone className="h-3 sm:h-4 w-3 sm:w-4 mr-1" />
            Call
          </Button>
        </a>
        <Button
          size="sm"
          variant="secondary"
          className="flex-1 text-xs sm:text-sm"
        >
          <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-1" />
          Book
        </Button>
      </div>
    </div>
  );
}
