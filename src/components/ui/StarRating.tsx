"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  slug: string;
  source: "free" | "purchase";
  onRatingSubmitted?: (rating: number) => void;
  label?: string;
  thanksMessage?: string;
}

export function StarRating({
  slug,
  source,
  onRatingSubmitted,
  label,
  thanksMessage,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = async (rating: number) => {
    if (submitted || selectedRating > 0) return;
    setSelectedRating(rating);
    try {
      await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, rating, source }),
      });
    } catch {
      // non-blocking
    } finally {
      setSubmitted(true);
      onRatingSubmitted?.(rating);
    }
  };

  const displayRating = hoverRating || selectedRating;

  if (submitted) {
    return (
      <p className="text-xs text-text-secondary">
        {thanksMessage ?? "Thanks for your feedback!"}
      </p>
    );
  }

  return (
    <div>
      {label && (
        <p className="mb-2 text-xs text-text-secondary">{label}</p>
      )}
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="transition-transform hover:scale-110"
            aria-label={`${star} star`}
          >
            <Star
              size={20}
              className={
                star <= displayRating
                  ? "fill-accent text-accent"
                  : "text-border"
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}
