import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '../ui/card';

interface AccessoryProps {
  accessory: {
    id: string;
    name: string;
    type: string;
    image: string;
    price: string;
    description: string;
    affiliate_link: string;
  };
}

const AccessoryCard: React.FC<AccessoryProps> = ({ accessory }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full border border-[var(--color-graphite-gray)] rounded-lg shadow-md flex flex-col">
        <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
          <Image
            src={accessory.image}
            alt={accessory.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="flex-grow p-4">
          <div className="inline-block bg-[var(--color-light-yelly)]/20 text-[var(--color-gold)] text-xs font-medium px-2 py-1 rounded mb-2">
            {accessory.type}
          </div>
          <h3 className="font-bold text-lg mb-1">{accessory.name}</h3>
          <p className="text-lg font-bold text-[var(--color-yelly)] mb-2">{accessory.price}</p>
          <p className="text-sm text-[var(--color-graphite-gray)] line-clamp-2 mb-3">{accessory.description}</p>
          
          {/* Link to detail page instead of Sheet */}
          <Link href={`/shop/accessory/${accessory.id}`} passHref>
            <Button 
              variant="outline" 
              size="sm"
              className="w-full mb-2 border-[var(--color-yelly)] text-[var(--color-yelly)] hover:bg-[var(--color-light-yelly)]/10 hover:text-[var(--color-yelly)]"
            >
              View Details
            </Button>
          </Link>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full bg-[var(--color-winny)] text-[var(--color-white)] hover:bg-[var(--color-muted-wine)]"
            onClick={() => window.open(accessory.affiliate_link, '_blank')}
          >
            Shop Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AccessoryCard;