import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import StarRating from '@/components/store/StarRating';
import { Button } from '@/components/ui/button';
import storeData from '@/data/store.json';

// Define types for our items
interface LaptopReview {
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
}

interface Accessory {
  id: string;
  name: string;
  type: string;
  image: string;
  price: string;
  description: string;
  affiliate_link: string;
}

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ type: string; slug: string }>;
}) {
  const { type, slug } = await params;

  // Find the appropriate item based on type and slug
  let item: LaptopReview | Accessory | undefined;

  if (type === 'laptop') {
    item = storeData.store.reviews.find((review) => review.id === slug) as LaptopReview;
  } else if (type === 'accessory') {
    item = storeData.store.accessories.find((accessory) => accessory.id === slug) as Accessory;
  }

  // If item doesn't exist, return 404
  if (!item) {
    notFound();
  }

  // Type guards to check if the item is a laptop or accessory
  const isLaptop = (item: LaptopReview | Accessory): item is LaptopReview => {
    return 'specs' in item;
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-6">
        <Link
          href="/shop"
          className="text-[var(--color-winny)] hover:underline inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Shop
        </Link>
      </div>

      {isLaptop(item) ? (
        // Laptop review detail page
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative h-80 md:h-96 w-full mb-6 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{item.name}</h1>
              <div className="flex items-center mb-4">
                <StarRating rating={item.rating} size="lg" />
                <span className="ml-2 text-lg">{item.rating.toFixed(1)}</span>
              </div>
              <Link
                href={item.affiliate_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-[var(--color-winny)] text-[var(--color-white)] hover:bg-[var(--color-muted-wine)] mt-4">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {/* Specs section */}
            <div className="bg-[var(--color-white)]/5 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <div>
                  <span className="font-medium block text-[var(--color-graphite-gray)]">
                    Processor
                  </span>
                  <span className="text-lg">{item.specs.processor}</span>
                </div>
                <div>
                  <span className="font-medium block text-[var(--color-graphite-gray)]">RAM</span>
                  <span className="text-lg">{item.specs.ram}</span>
                </div>
                <div>
                  <span className="font-medium block text-[var(--color-graphite-gray)]">
                    Storage
                  </span>
                  <span className="text-lg">{item.specs.storage}</span>
                </div>
                <div>
                  <span className="font-medium block text-[var(--color-graphite-gray)]">
                    Graphics
                  </span>
                  <span className="text-lg">{item.specs.graphics}</span>
                </div>
                <div>
                  <span className="font-medium block text-[var(--color-graphite-gray)]">
                    Display
                  </span>
                  <span className="text-lg">{item.specs.display}</span>
                </div>
                <div>
                  <span className="font-medium block text-[var(--color-graphite-gray)]">
                    Battery
                  </span>
                  <span className="text-lg">{item.specs.battery}</span>
                </div>
              </div>
            </div>

            {/* Performance section */}
            <div className="p-1">
              <h2 className="text-xl font-bold mb-3">Performance</h2>
              <p className="text-lg text-[var(--color-graphite-gray)]">
                {item.performance_summary}
              </p>
            </div>

            {/* Display section */}
            <div className="p-1">
              <h2 className="text-xl font-bold mb-3">Display</h2>
              <p className="text-lg text-[var(--color-graphite-gray)]">{item.display_quality}</p>
            </div>

            {/* Battery section */}
            <div className="p-1">
              <h2 className="text-xl font-bold mb-3">Battery Life</h2>
              <p className="text-lg text-[var(--color-graphite-gray)]">{item.battery_life}</p>
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--color-light-yelly)]/10 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-[var(--color-yelly)] mb-3">Pros</h2>
                <ul className="list-disc list-inside space-y-2">
                  {item.pros.map((pro: string, index: number) => (
                    <li key={index} className="text-[var(--color-graphite-gray)] text-lg">
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--color-light-wine)]/10 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-[var(--color-winny)] mb-3">Cons</h2>
                <ul className="list-disc list-inside space-y-2">
                  {item.cons.map((con: string, index: number) => (
                    <li key={index} className="text-[var(--color-graphite-gray)] text-lg">
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verdict */}
            <div className="bg-[var(--color-soft-yelly)]/10 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-[var(--color-gold)] mb-3">Final Verdict</h2>
              <p className="text-lg text-[var(--color-graphite-gray)]">{item.final_verdict}</p>
            </div>
          </div>
        </div>
      ) : (
        // Accessory detail page
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative h-80 md:h-96 w-full mb-6 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{item.name}</h1>
              <div className="mb-4">
                <span className="text-2xl font-bold text-[var(--color-winny)]">
                  {(item as Accessory).price}
                </span>
                <span className="text-sm ml-2 text-[var(--color-graphite-gray)]">
                  Type: {(item as Accessory).type}
                </span>
              </div>
              <Link
                href={item.affiliate_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-[var(--color-winny)] text-[var(--color-white)] hover:bg-[var(--color-muted-wine)] mt-4">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-1">
              <h2 className="text-xl font-bold mb-3">About this item</h2>
              <p className="text-lg text-[var(--color-graphite-gray)]">
                {(item as Accessory).description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
