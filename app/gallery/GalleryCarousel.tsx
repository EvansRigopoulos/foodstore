"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./GalleryCarousel.module.css";
import { useLanguage } from "../context/LanguageContext";

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  type: "image" | "video";
};

const GalleryCarousel: React.FC<{ items: GalleryItem[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { language } = useLanguage();

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      nextItem();
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, items.length]);

  // Respect the visitor's reduced-motion preference: don't auto-advance
  // for users who have asked their device to reduce motion.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReducedMotion(mq.matches);
      if (mq.matches) setIsAutoScrolling(false);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => {
    if (!reducedMotion) setIsAutoScrolling(true);
  };

  const title = {
    en: "Gallery",
    gr: "Εικόνες",
  };

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label={`${title[language]} gallery`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 id="gallery-title">{title[language]}</h2>

      <div className={styles.mediaRow}>
        <button
          className={styles.prevButton}
          onClick={prevItem}
          aria-label="Previous image"
          aria-controls="gallery-image"
        >
          &#10094;
        </button>
        <div className={styles.imageContainer}>
          {items[currentIndex].type === "video" ? (
          <video
            id="gallery-image"
            key={items[currentIndex].src}
            src={items[currentIndex].src}
            width={1900}
            height={800}
            className={styles.media}
            autoPlay
            loop
            muted
            playsInline
            aria-label={items[currentIndex].alt}
            aria-describedby="image-counter"
            onError={() => {
              console.error(`Failed to load video: ${items[currentIndex].src}`);
            }}
          />
        ) : (
          <Image
            id="gallery-image"
            src={items[currentIndex].src}
            alt={items[currentIndex].alt}
            width={1900}
            height={800}
            unoptimized={items[currentIndex].src.toLowerCase().endsWith(".gif")}
            className={styles.media}
            onError={(e) => {
              console.error(`Failed to load image: ${items[currentIndex].src}`);
            }}
            role="img"
            aria-describedby="image-counter"
          />
        )}
        {/* Image counter for screen readers */}
        <div id="image-counter" className="sr-only">
          Image {currentIndex + 1} of {items.length}
        </div>
        {/* Auto-scroll indicator */}
        <button
          className={styles.autoScrollIndicator}
          onClick={() => setIsAutoScrolling(!isAutoScrolling)}
          aria-label={
            isAutoScrolling ? "Pause auto-scroll" : "Resume auto-scroll"
          }
          title={
            isAutoScrolling
              ? "Click to pause auto-scroll"
              : "Click to resume auto-scroll"
          }
        >
          {isAutoScrolling ? "⏸️" : "▶️"}
        </button>
        </div>
        <button
          className={styles.nextButton}
          onClick={nextItem}
          aria-label="Next image"
          aria-controls="gallery-image"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default GalleryCarousel;
