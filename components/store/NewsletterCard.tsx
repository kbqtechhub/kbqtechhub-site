import Image from 'next/image';
import type React from 'react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface NewsletterProps {
  newsletter: {
    title: string;
    description: string;
    image: string;
    form_placeholder: string;
    subscribe_button_text: string;
  };
}

const NewsletterCard: React.FC<NewsletterProps> = ({ newsletter }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Here you would typically send the email to your backend
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true);
    setError(null);
  };

  return (
    <div className="relative bg-gradient-to-r from-[var(--color-winny)] to-[var(--color-yelly)] rounded-xl overflow-hidden">
      {/* Semi-transparent overlay for better text contrast */}
      <div className="absolute inset-0 bg-[var(--color-pure-black)]/20 z-10"></div>

      {/* Background image if provided */}
      {newsletter.image && (
        <div className="absolute inset-0">
          <Image
            src={newsletter.image}
            alt="Newsletter background"
            fill
            className="object-cover opacity-30"
          />
        </div>
      )}

      <div className="relative z-20 px-6 py-12 md:py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-white)] mb-3">
          {newsletter.title}
        </h2>

        <p className="text-[var(--color-white)]/90 mb-8 text-lg">{newsletter.description}</p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder={newsletter.form_placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-[var(--color-white)]/90"
                required
              />
              <Button
                type="submit"
                className="bg-[var(--color-winny)] hover:bg-[var(--color-muted-wine)] text-[var(--color-white)] font-medium"
              >
                {newsletter.subscribe_button_text}
              </Button>
            </div>
            {error && <p className="mt-2 text-[var(--color-light-yelly)] text-sm">{error}</p>}
          </form>
        ) : (
          <div className="bg-[var(--color-white)]/20 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-xl font-medium text-[var(--color-white)] mb-2">
              ✅ Thank You for Subscribing!
            </div>
            <p className="text-[var(--color-white)]/90">
              You&apos;ll start receiving our tech picks, deals and reviews in your inbox soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterCard;
