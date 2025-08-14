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

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  const title = {
    en: "Gallery",
    gr: "Εικόνες",
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{title[language]}</h2>

      <button className={styles.prevButton} onClick={prevItem}>
        &#10094;
      </button>
      <div className={styles.imageContainer}>
        <Image
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          width={1900}
          height={800}
          className={styles.media}
          onError={(e) => {
            console.error(`Failed to load image: ${items[currentIndex].src}`);
          }}
        />
        {/* Auto-scroll indicator */}
        <div
          className={styles.autoScrollIndicator}
          onClick={() => setIsAutoScrolling(!isAutoScrolling)}
          title={
            isAutoScrolling
              ? "Click to pause auto-scroll"
              : "Click to resume auto-scroll"
          }
        >
          {isAutoScrolling ? "⏸️" : "▶️"}
        </div>
      </div>
      <button className={styles.nextButton} onClick={nextItem}>
        &#10095;
      </button>
    </div>
  );
};

export default GalleryCarousel;
