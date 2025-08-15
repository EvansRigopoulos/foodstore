"use client";

import React, { useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";

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
      <h3 id="menu-title" className={styles.menuSectionTitle}>
        {menuSections[language][currentPage].title}
      </h3>
      <div className={`${styles.page} ${turning ? styles.turning : ""}`}>
        {menuSections[language][currentPage].items.map((item, index) => (
          <div key={index} className={styles.menuCard}>
            <div className={styles.menuItemHeader}>
              <h4 className={styles.menuItemName}>{item.name}</h4>
              <span className={styles.menuItemPrice}>{item.price}</span>
            </div>
            <p className={styles.menuItemDescription}>{item.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.turnPageButton} onClick={handlePageTurn}>
          <FaArrowRight size={12} />
          {language === "en" ? "Turn Page" : "Επόμενη Σελίδα"}
        </button>
        <a
          href="https://drive.google.com/uc?export=download&id=10HSQoOibMLDMnZQ_mx6AjIQTwE9UXRT9"
          download="Diamanti-Restaurant-Menu.pdf"
          className={styles.downloadButton}
        >
          <FaDownload size={12} />
          {language === "en" ? "Download Menu" : "Κατεβάστε το Μενού"}
        </a>
      </div>
    </section>
  );
};

export default MenuSection;
