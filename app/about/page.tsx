"use client"; // Ensure client-side

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import SmokeAnimation from "../components/SmokeAnimation";

function AboutPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Us",
      text: ` THE BEST CHICKEN DELICACY YOU MUST TRY!!! GOUNARI 2 IN ELLINIKO HOME
        DELIVERY FROM 12:00 AM TO 11:00 PM`,
    },
    gr: {
      title: "Σχετικά με Εμάς",
      text: `      Η ΚΑΛΥΤΕΡΗ ΚΟΤΟΝΟΣΤΙΜΙΑ ΠΟΥ ΠΡΕΠΕΙ ΝΑ ΔΟΚΙΜΑΣΕΤΕ !!! ΓΟΥΝΑΡΗ 2 ΣΤΟ
        ΕΛΛΗΝΙΚΟ ΠΑΡΑΔΟΣΗ ΚΑΤ ΟΙΚΟΝ ΑΠΟ 12.00π.μ. ΕΩΣ 11.00μ.μ.`,
    },
  };

  return (
    <>
      <SmokeAnimation />
      <section className={styles.aboutSection} aria-labelledby="about-us-title">
        <h1 id="about-us-title">{content[language].title}</h1>
        <span className={styles.content}>{content[language].text}</span>
        <Image
          src={"https://i.postimg.cc/44bRwS9G/new-front.jpg"}
          alt="A beautiful restaurant"
          width={2400}
          height={1600}
          className={styles.image}
          priority
        />
      </section>
    </>
  );
}

export default AboutPage;
