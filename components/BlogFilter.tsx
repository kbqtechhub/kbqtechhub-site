'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getUniqueCategories } from '@/data';

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  All: 'Browse all our technical articles and tutorials',
  Computing: 'Explore computing concepts and technologies',
  'AI & Healthcare': 'Discover the intersection of AI and healthcare innovations',
  Cybersecurity: 'Learn about security practices and protecting digital assets',
  Networking: 'Understanding network technologies and infrastructure',
  Blockchain: 'Explore blockchain technology and its applications',
};

export default function BlogFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeCategory = searchParams.get('category') || 'All';
  const categories = getUniqueCategories();

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full mb-8 md:mb-12 space-y-3">
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center sm:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-300 text-xs md:text-sm font-medium
                            ${
                              activeCategory === category
                                ? 'bg-winny text-white shadow-lg shadow-winny/50 transform scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-102'
                            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="text-center sm:text-left text-sm text-gray-600 mt-2">
        {CATEGORY_DESCRIPTIONS[activeCategory as keyof typeof CATEGORY_DESCRIPTIONS]}
      </p>
    </div>
  );
}
