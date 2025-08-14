"use client";

import React, { useState } from "react";

import styles from "./MenuSection.module.css"; // Import your CSS module
import { useLanguage } from "../context/LanguageContext";
import { Products } from "./Products";

const MenuSection: React.FC = () => {
  const { language } = useLanguage();
  const menuSections = Products;
  const title = {
    en: "Menu",
    gr: "Μενού",
  };
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState(false);

  const handlePageTurn = () => {
    if (turning) return;
    setTurning(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % menuSections[language].length);
      setTurning(false);
    }, 600); // Duration of the page-turn animation
  };
  return (
    <section className={styles.menuSection} aria-labelledby="menu-title">
      <h2>{title[language]}</h2>
      <h2 id="menu-title" className={styles.menuSectionTitle}>
        {menuSections[language][currentPage].title}
      </h2>
      <div className={`${styles.page} ${turning ? styles.turning : ""}`}>
        {menuSections[language][currentPage].items.map((item, index) => (
          <div key={index} className={styles.menuCard}>
            <div className={styles.menuItemHeader}>
              <h3 className={styles.menuItemName}>{item.name}</h3>
              <span className={styles.menuItemPrice}>{item.price}</span>
            </div>
            <p className={styles.menuItemDescription}>{item.description}</p>
          </div>
        ))}
      </div>
      <button className={styles.turnPageButton} onClick={handlePageTurn}>
        {language === "en" ? "Turn Page" : "Επόμενη Σελίδα"}
      </button>
    </section>
  );
};

export default MenuSection;
