"use client"; // Ensure client-side

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import outside from "../outside.jpg";
import Image from "next/image";
import styles from "./AboutUs.module.css";

function AboutPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Us",
      text: ` THE BEST CHICKEN DELICACY YOU MUST TRY!!! GOUNARI 2 IN ELLINIKO HOME
        DELIVERY FROM 11:30 AM TO 12:00 AM`,
    },
    gr: {
      title: "Σχετικά με Εμάς",
      text: `      Η ΚΑΛΥΤΕΡΗ ΚΟΤΟΝΟΣΤΙΜΙΑ ΠΟΥ ΠΡΕΠΕΙ ΝΑ ΔΟΚΙΜΑΣΕΤΕ !!! ΓΟΥΝΑΡΗ 2 ΣΤΟ
        ΕΛΛΗΝΙΚΟ ΠΑΡΑΔΟΣΗ ΚΑΤ ΟΙΚΟΝ ΑΠΟ 11.30π.μ. ΕΩΣ 12.00μ.μ.`,
    },
  };

  return (
    <section className={styles.aboutSection} aria-labelledby="about-us-title">
      <span id="about-us-title">{content[language].title}</span>
      <span className={styles.content}>{content[language].text}</span>
      <Image
        src={outside}
        alt="A beautiful restaurant"
        className={styles.image}
      />
    </section>
  );
}

export default AboutPage;
