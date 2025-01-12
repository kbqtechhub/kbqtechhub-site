"use client";

import React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const IMPORTANT_CATEGORIES = ['All', 'Web Development', 'Mobile Development', 'Cloud Computing', 'DevOps'];

export default function BlogFilter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeCategory = searchParams.get('category') || 'All';
    const categories = IMPORTANT_CATEGORIES;

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
        <div className="w-full mb-12 space-y-3">
            <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium
                            ${activeCategory === category
                                ? 'bg-winny text-white shadow-lg shadow-winny/50 transform scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-102'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
