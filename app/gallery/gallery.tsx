import React from "react";
import GalleryCarousel from "./GalleryCarousel";
import { galleryItems } from "./galleryItems";
import styles from "./GalleryCarousel.module.css";

const Gallery: React.FC = () => {
  return (
    <section className={styles.galleryContainer}>
      <div className={styles.smoke}></div>
      {galleryItems && <GalleryCarousel items={galleryItems} />}
    </section>
  );
};

export default Gallery;
