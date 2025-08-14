"use client";
import React from "react";
import styles from "./FooterWithMap.module.css"; // Import the CSS module
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLanguage } from "../../app/context/LanguageContext";

const FooterWithMap: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h2>
            {language === "en" ? "Contact Us" : "Επικοινωνήστε μαζί μας"}{" "}
          </h2>
          <p>
            {language === "en"
              ? "Address: Gounari 2, Elliniko"
              : "Διεύθυνση: Γούναρη 2, Ελληνικό"}
          </p>
          <p>
            {language === "en"
              ? "Phone: +30 210 9635560"
              : "Τηλέφωνο: +30 210 9635560"}
          </p>
          <p>
            {language === "en"
              ? "Email: kotopoulatodiamanti@gmail.com"
              : "Email: kotopoulatodiamanti@gmail.com"}
          </p>
        </div>

        <div className={styles.mapContainer}>
          <h2>{language === "en" ? "Find Us Here" : "Βρείτε μας εδώ"}</h2>
          <iframe
            title={
              language === "en"
                ? "Restaurant Location"
                : "Τοποθεσία Εστιατορίου"
            }
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25187.694305719553!2d23.761110136590585!3d37.896267608125164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1be1d174de9d1%3A0xe141d0a0b5b7f7da!2zzqTOvyDOlM65zrHOvM6szr3PhM65!5e0!3m2!1sen!2sgr!4v1727723291993!5m2!1sen!2sgr"
            width="100%"
            height="300"
            className={styles.iframe}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        <div className={styles.socialMedia}>
          <h2>{language === "en" ? "Follow Us" : "Ακολουθήστε μας"}</h2>
          <div className={styles.iconContainer}>
            <a
              href="https://www.facebook.com/KotopoulaToDiamanti/?locale=el_GR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/kotopoulatodiamanti/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithMap;
