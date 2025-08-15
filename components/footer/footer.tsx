"use client";
import React, { useState } from "react";
import styles from "./FooterWithMap.module.css"; // Import the CSS module
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdPayment, MdEuroSymbol } from "react-icons/md";
import { useLanguage } from "../../app/context/LanguageContext";

const FooterWithMap: React.FC = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer className={styles.footer}>
      {/* Mobile Menu Items - Always Expanded */}
      <div className={`${styles.mobileMenu} ${styles.open}`}>
        <div className={styles.menuSections}>
          {/* Contact Section */}
          <div className={styles.menuSection}>
            <button
              className={styles.sectionButton}
              onClick={() => toggleSection("contact")}
              aria-expanded={activeSection === "contact"}
            >
              {language === "en" ? "Contact Us" : "Επικοινωνήστε μαζί μας"}
              <span className={styles.arrow}>
                {activeSection === "contact" ? "−" : "+"}
              </span>
            </button>
            <div
              className={`${styles.sectionContent} ${
                activeSection === "contact" ? styles.active : ""
              }`}
            >
              <p>
                {language === "en"
                  ? "Address: Dim. Gounari 2, Elliniko"
                  : "Διεύθυνση: Δημητρίου Γούναρη 2, Ελληνικό"}
              </p>
              <h4>{language === "en" ? "Phones:" : "Τηλέφωνα:"}</h4>
              <p>+30 210 9635560</p>
              <p>+30 210 9635561</p>
              <p>+30 698 2314186</p>
              <p>Email: kotopoulatodiamanti@gmail.com</p>
            </div>
          </div>

          {/* Map Section */}
          <div className={styles.menuSection}>
            <button
              className={styles.sectionButton}
              onClick={() => toggleSection("map")}
              aria-expanded={activeSection === "map"}
            >
              {language === "en" ? "Find Us Here" : "Βρείτε μας εδώ"}
              <span className={styles.arrow}>
                {activeSection === "map" ? "−" : "+"}
              </span>
            </button>
            <div
              className={`${styles.sectionContent} ${
                activeSection === "map" ? styles.active : ""
              }`}
            >
              <iframe
                title={
                  language === "en"
                    ? "Restaurant Location"
                    : "Τοποθεσία Εστιατορίου"
                }
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25187.694305719553!2d23.761110136590585!3d37.896267608125164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1be1d174de9d1%3A0xe141d0a0b5b7f7da!2zzqTOvyDOlM65zrHOvM6szr3PhM65!5e0!3m2!1sen!2sgr!4v1727723291993!5m2!1sen!2sgr"
                width="100%"
                height="200"
                className={styles.iframe}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Social Media Section */}
          <div className={styles.menuSection}>
            <button
              className={styles.sectionButton}
              onClick={() => toggleSection("social")}
              aria-expanded={activeSection === "social"}
            >
              {language === "en" ? "Follow Us" : "Ακολουθήστε μας"}
              <span className={styles.arrow}>
                {activeSection === "social" ? "−" : "+"}
              </span>
            </button>
            <div
              className={`${styles.sectionContent} ${
                activeSection === "social" ? styles.active : ""
              }`}
            >
              <div className={styles.iconContainer}>
                <a
                  href="https://www.facebook.com/KotopoulaToDiamanti/?locale=el_GR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.icon}
                  aria-label={
                    language === "en"
                      ? "Visit our Facebook page (opens in new tab)"
                      : "Επισκεφτείτε τη σελίδα μας στο Facebook (ανοίγει σε νέα καρτέλα)"
                  }
                >
                  <FaFacebook size={30} aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/kotopoulatodiamanti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.icon}
                  aria-label={
                    language === "en"
                      ? "Visit our Instagram page (opens in new tab)"
                      : "Επισκεφτείτε τη σελίδα μας στο Instagram (ανοίγει σε νέα καρτέλα)"
                  }
                >
                  <FaInstagram size={30} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className={styles.menuSection}>
            <button
              className={styles.sectionButton}
              onClick={() => toggleSection("hours")}
              aria-expanded={activeSection === "hours"}
            >
              {language === "en" ? "Opening Hours" : "Ωράριο Λειτουργίας"}
              <span className={styles.arrow}>
                {activeSection === "hours" ? "−" : "+"}
              </span>
            </button>
            <div
              className={`${styles.sectionContent} ${
                activeSection === "hours" ? styles.active : ""
              }`}
            >
              <div className={styles.hoursContainer}>
                {language === "en" ? (
                  <>
                    <p>
                      <span className={styles.day}>MONDAY</span>
                      <span className={styles.hours}>CLOSED</span>
                    </p>
                    <p>
                      <span className={styles.day}>TUESDAY</span>
                      <span className={styles.hours}>12:00 - 22:30</span>
                    </p>
                    <p>
                      <span className={styles.day}>WEDNESDAY</span>
                      <span className={styles.hours}>12:00 - 22:30</span>
                    </p>
                    <p>
                      <span className={styles.day}>THURSDAY</span>
                      <span className={styles.hours}>12:00 - 22:30</span>
                    </p>
                    <p>
                      <span className={styles.day}>FRIDAY</span>
                      <span className={styles.hours}>12:00 - 22:30</span>
                    </p>
                    <p>
                      <span className={styles.day}>SATURDAY</span>
                      <span className={styles.hours}>12:00 - 22:30</span>
                    </p>
                    <p>
                      <span className={styles.day}>SUNDAY</span>
                      <span className={styles.hours}>12:00 - 17:00</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <span className={styles.day}>ΔΕΥΤΕΡΑ</span>
                      <span className={styles.hours}>ΚΛΕΙΣΤΑ</span>
                    </p>
                    <p>
                      <span className={styles.day}>ΤΡΙΤΗ</span>
                      <span className={styles.hours}>12:00 - 23:00</span>
                    </p>
                    <p>
                      <span className={styles.day}>ΤΕΤΑΡΤΗ</span>
                      <span className={styles.hours}>12:00 - 23:00</span>
                    </p>
                    <p>
                      <span className={styles.day}>ΠΕΜΠΤΗ</span>
                      <span className={styles.hours}>12:00 - 23:00</span>
                    </p>
                    <p>
                      <span className={styles.day}>ΠΑΡΑΣΚΕΥΗ</span>
                      <span className={styles.hours}>12:00 - 23:00</span>
                    </p>
                    <p>
                      <span className={styles.day}>ΣΑΒΒΑΤΟ</span>
                      <span className={styles.hours}>12:00 - 23:00</span>
                    </p>
                    <p>
                      <span className={styles.day}>ΚΥΡΙΑΚΗ</span>
                      <span className={styles.hours}>12:00 - 17:00</span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className={styles.menuSection}>
            <button
              className={styles.sectionButton}
              onClick={() => toggleSection("payment")}
              aria-expanded={activeSection === "payment"}
            >
              {language === "en" ? "Payment Methods" : "Μέθοδοι Πληρωμής"}
              <span className={styles.arrow}>
                {activeSection === "payment" ? "−" : "+"}
              </span>
            </button>
            <div
              className={`${styles.sectionContent} ${
                activeSection === "payment" ? styles.active : ""
              }`}
            >
              <div className={styles.paymentContainer}>
                <div className={styles.paymentMethod}>
                  <MdEuroSymbol size={28} className={styles.paymentIcon} />
                  <span>{language === "en" ? "Cash" : "Μετρητά"}</span>
                </div>
                <div className={styles.paymentMethod}>
                  <MdPayment size={24} className={styles.paymentIcon} />
                  <span>{language === "en" ? "Card" : "Κάρτα"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className={styles.container}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h3>
            {language === "en" ? "Contact Us" : "Επικοινωνήστε μαζί μας"}{" "}
          </h3>
          <p>
            {language === "en"
              ? "Address: Dim. Gounari 2, Elliniko"
              : "Διεύθυνση: Δημητρίου Γούναρη 2, Ελληνικό"}
          </p>
          <h4>{language === "en" ? "Phones:" : "Τηλέφωνα:"}</h4>
          <p>+30 210 9635560</p>
          <p>+30 210 9635561</p>
          <p>+30 698 2314186</p>
          <p>
            {language === "en"
              ? "Email: kotopoulatodiamanti@gmail.com"
              : "Email: kotopoulatodiamanti@gmail.com"}
          </p>
        </div>

        <div className={styles.mapContainer}>
          <h3>{language === "en" ? "Find Us Here" : "Βρείτε μας εδώ"}</h3>
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
          <h3>{language === "en" ? "Follow Us" : "Ακολουθήστε μας"}</h3>
          <div className={styles.iconContainer}>
            <a
              href="https://www.facebook.com/KotopoulaToDiamanti/?locale=el_GR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
              aria-label={
                language === "en"
                  ? "Visit our Facebook page (opens in new tab)"
                  : "Επισκεφτείτε τη σελίδα μας στο Facebook (ανοίγει σε νέα καρτέλα)"
              }
            >
              <FaFacebook size={30} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/kotopoulatodiamanti/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
              aria-label={
                language === "en"
                  ? "Visit our Instagram page (opens in new tab)"
                  : "Επισκεφτείτε τη σελίδα μας στο Instagram (ανοίγει σε νέα καρτέλα)"
              }
            >
              <FaInstagram size={30} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.openingHours}>
          <h3>{language === "en" ? "Opening Hours" : "Ωράριο Λειτουργίας"}</h3>
          <div className={styles.hoursContainer}>
            {language === "en" ? (
              <>
                <p>
                  <span className={styles.day}>MONDAY</span>
                  <span className={styles.hours}>CLOSED</span>
                </p>
                <p>
                  <span className={styles.day}>TUESDAY</span>
                  <span className={styles.hours}>12:00 - 22:30</span>
                </p>
                <p>
                  <span className={styles.day}>WEDNESDAY</span>
                  <span className={styles.hours}>12:00 - 22:30</span>
                </p>
                <p>
                  <span className={styles.day}>THURSDAY</span>
                  <span className={styles.hours}>12:00 - 22:30</span>
                </p>
                <p>
                  <span className={styles.day}>FRIDAY</span>
                  <span className={styles.hours}>12:00 - 22:30</span>
                </p>
                <p>
                  <span className={styles.day}>SATURDAY</span>
                  <span className={styles.hours}>12:00 - 22:30</span>
                </p>
                <p>
                  <span className={styles.day}>SUNDAY</span>
                  <span className={styles.hours}>12:00 - 17:00</span>
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className={styles.day}>ΔΕΥΤΕΡΑ</span>
                  <span className={styles.hours}>ΚΛΕΙΣΤΑ</span>
                </p>
                <p>
                  <span className={styles.day}>ΤΡΙΤΗ</span>
                  <span className={styles.hours}>12:00 - 23:00</span>
                </p>
                <p>
                  <span className={styles.day}>ΤΕΤΑΡΤΗ</span>
                  <span className={styles.hours}>12:00 - 23:00</span>
                </p>
                <p>
                  <span className={styles.day}>ΠΕΜΠΤΗ</span>
                  <span className={styles.hours}>12:00 - 23:00</span>
                </p>
                <p>
                  <span className={styles.day}>ΠΑΡΑΣΚΕΥΗ</span>
                  <span className={styles.hours}>12:00 - 23:00</span>
                </p>
                <p>
                  <span className={styles.day}>ΣΑΒΒΑΤΟ</span>
                  <span className={styles.hours}>12:00 - 23:00</span>
                </p>
                <p>
                  <span className={styles.day}>ΚΥΡΙΑΚΗ</span>
                  <span className={styles.hours}>12:00 - 17:00</span>
                </p>
              </>
            )}
          </div>
        </div>

        <div className={styles.paymentMethods}>
          <h3>{language === "en" ? "Payment Methods" : "Μέθοδοι Πληρωμής"}</h3>
          <div className={styles.paymentContainer}>
            <div className={styles.paymentMethod}>
              <MdEuroSymbol size={28} className={styles.paymentIcon} />
              <span>{language === "en" ? "Cash" : "Μετρητά"}</span>
            </div>
            <div className={styles.paymentMethod}>
              <MdPayment size={24} className={styles.paymentIcon} />
              <span>{language === "en" ? "Card" : "Κάρτα"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>
          © {new Date().getFullYear()}{" "}
          {language === "en"
            ? "To Diamanti Restaurant"
            : "Εστιατόριο Το Διαμάντι"}
        </p>
      </div>
    </footer>
  );
};

export default FooterWithMap;
