"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
  disabled?: boolean;
  size?: number;
}

export function StarRating({
  value,
  onChange,
  disabled = false,
  size = 24,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const displayRating = hoverRating || value;

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !disabled && onChange(star)}
          onMouseEnter={() => !disabled && setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className={`transition-transform ${disabled ? "cursor-default" : "hover:scale-110"}`}
          aria-label={`${star} star`}
          disabled={disabled}
        >
          <Star
            size={size}
            className={
              star <= displayRating
                ? "fill-accent text-accent"
                : "text-border"
            }
          />
        </button>
      ))}
    </div>
  );
}
