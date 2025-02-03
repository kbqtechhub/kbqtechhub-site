import React from 'react'

export default function BlogFilterSkeleton() {
    return (
        <div className="space-y-4">
            <div className="w-full h-10 bg-gray-200 rounded-md animate-pulse" />

            {/* Categories skeleton */}
            <div className="space-y-2">
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="flex flex-wrap gap-2">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"
                        />
                    ))}
                </div>
            </div>

            {/* Sort skeleton */}
            <div className="space-y-2">
                <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse" />
            </div>
        </div>
    )
}
