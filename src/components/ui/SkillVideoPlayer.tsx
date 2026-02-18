"use client";

import { useEffect, useRef } from "react";

export function SkillVideoPlayer({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={`/videos/skills/${slug}-${locale}.mp4`}
      muted
      loop
      playsInline
      className="w-full block"
    />
  );
}
