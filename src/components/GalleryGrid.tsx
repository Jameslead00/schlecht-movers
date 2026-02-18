"use client";

import { motion } from "framer-motion";

interface GalleryItem {
  id: string;
  caption: string;
  imagePlaceholder: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.04,
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card aspect-[4/3] cursor-pointer"
        >
          {/* Sophisticated placeholder with abstract shapes */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-subtle via-bg-alt to-brand/5">
            {/* Abstract decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-brand/10 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-brand/8 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-brand/20" />
            <div className="absolute bottom-16 left-8 w-3 h-3 rounded-full bg-brand/15" />
            {/* Camera icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-10 transition-opacity duration-300">
              <svg
                className="w-10 h-10 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21z"
                />
              </svg>
            </div>
          </div>

          {/* Caption overlay - slides up on hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent/80 via-accent/40 to-transparent p-5 pt-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-sm font-medium text-white leading-snug">
              {item.caption}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
