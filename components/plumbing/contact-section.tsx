'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">Get in Touch</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to solve your plumbing issues? Contact us today for a free quote.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-3">
          {/* Contact Info Cards */}
          <Card className="bg-card p-4 sm:p-5 md:p-6 border-border text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 rounded-lg bg-primary/10">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Call Now</h3>
            <a href="tel:(512)555-0147" className="text-primary hover:underline font-semibold mb-2 block text-sm sm:text-base">
              (512) 555-0147
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground">Available 24/7</p>
          </Card>

          <Card className="bg-card p-4 sm:p-5 md:p-6 border-border text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 rounded-lg bg-secondary/10">
                <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Service Hours</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-1">Open 24/7</p>
            <p className="text-xs text-muted-foreground">Emergency services available anytime</p>
          </Card>

          <Card className="bg-card p-4 sm:p-5 md:p-6 border-border text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 rounded-lg bg-primary/10">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Location</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-1">Austin, Texas</p>
            <p className="text-xs text-muted-foreground">Get Directions</p>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="mt-8 sm:mt-10 md:mt-12 max-w-2xl mx-auto">
          <Card className="bg-card border-border p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-input border-border text-foreground text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(512) 555-0000"
                    className="bg-input border-border text-foreground text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-input px-3 py-2 text-foreground text-sm"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="leak-repair">Leak Repair</option>
                  <option value="drain-cleaning">Drain Cleaning</option>
                  <option value="water-heater">Water Heater Installation</option>
                  <option value="pipe-repair">Pipe Repair & Replacement</option>
                  <option value="emergency">Emergency Plumbing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">
                  Message (Optional)
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your plumbing issue..."
                  className="bg-input border-border text-foreground min-h-[100px] sm:min-h-[120px] text-sm"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base" size="lg">
                <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Request Quote
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
