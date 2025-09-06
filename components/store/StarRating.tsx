import type React from 'react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  // Convert rating to number of full stars, with partial stars supported
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxStars - fullStars - partialStar;

  return (
    <p className="flex items-center">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className={`text-[var(--color-yelly)] ${sizeClasses[size]}`}>
          &#9733;
        </span>
      ))}

      {/* Half star if needed */}
      {partialStar > 0 && (
        <span className={`text-[var(--color-yelly)] ${sizeClasses[size]}`}>&#9734;</span>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className={`text-[var(--color-yelly)] ${sizeClasses[size]}`}>
          &#9734;
        </span>
      ))}

      {/* Display numeric rating */}
      <span className="ml-2 text-sm text-[var(--color-graphite-gray)]">({rating})</span>
    </p>
  );
};

export default StarRating;
