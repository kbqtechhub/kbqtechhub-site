import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import Link from 'next/link';
import StarRating from './StarRating';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

interface LaptopReviewProps {
  review: {
    id: string;
    name: string;
    image: string;
    specs: {
      processor: string;
      ram: string;
      storage: string;
      graphics: string;
      display: string;
      battery: string;
    };
    rating: number;
    performance_summary: string;
    battery_life: string;
    display_quality: string;
    pros: string[];
    cons: string[];
    final_verdict: string;
    affiliate_link: string;
  };
}

const LaptopCard: React.FC<LaptopReviewProps> = ({ review }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border border-[var(--color-graphite-gray)] rounded-lg shadow-lg flex flex-col">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={review.image}
              alt={review.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-5">
          <h3 className="text-xl font-bold mb-2">{review.name}</h3>
          
          <div className="mb-3">
            <StarRating rating={review.rating} />
          </div>
          
          {/* Basic specs visible by default */}
          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
            <div>
              <span className="font-medium">Processor:</span> {review.specs.processor}
            </div>
            <div>
              <span className="font-medium">RAM:</span> {review.specs.ram}
            </div>
            <div>
              <span className="font-medium">Storage:</span> {review.specs.storage}
            </div>
            <div>
              <span className="font-medium">Graphics:</span> {review.specs.graphics}
            </div>
          </div>
          
          {/* Link to the detail page */}
          <Link href={`/shop/laptop/${review.id}`} passHref>
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-3 w-full border-color-yelly text-color-yelly hover:bg--color-light-yelly/10 hover:text-color-yelly"
            >
              View Full Details
            </Button>
          </Link>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <Button 
            className="w-full bg-[var(--color-winny)] text-[var(--color-white)] hover:bg-[var(--color-muted-wine)]"
            onClick={() => window.open(review.affiliate_link, '_blank')}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LaptopCard;