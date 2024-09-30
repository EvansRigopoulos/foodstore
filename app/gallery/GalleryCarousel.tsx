"use client";

import React, { useEffect, useState } from "react";
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
  const { language } = useLanguage();

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const title = {
    en: "Gallery",
    gr: "Εικόνες",
  };

  return (
    <div className={styles.carousel}>
      <h2>{title[language]}</h2>

      <button className={styles.prevButton} onClick={prevItem}>
        &#10094;
      </button>
      <div className={styles.imageContainer}>
        {items[currentIndex].type === "video" ? (
          <div id="fb-root">
            <script
              async
              defer
              src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
            ></script>

            <div
              className="fb-video"
              data-width="500"
              data-show-text="false"
              data-autoplay="true"
            >
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsokratis.diamantis%2Fvideos%2F4192401892710%2F%3Fidorvanity%3D229922533778127&show_text=false&width=560&t=0"
                width="1400"
                height="900"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        ) : (
          <img
            src={items[currentIndex].src}
            alt={items[currentIndex].alt}
            className={styles.media}
          />
        )}
      </div>
      <button className={styles.nextButton} onClick={nextItem}>
        &#10095;
      </button>
    </div>
  );
};

export default GalleryCarousel;
