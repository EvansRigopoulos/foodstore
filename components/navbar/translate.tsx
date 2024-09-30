"use client";

import { Language, useLanguage } from "@/app/context/LanguageContext";
import React from "react";

const Translate: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const greekFlag =
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg";
  const englishFlag =
    "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";

  // Function to handle language change
  const changeLanguage = (lang: Language) => {
    setLanguage(lang); // Set the new language
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Display the current language */}
      <h2>
        {language === "en"
          ? "Selected Language: English"
          : "Επιλεγμένη Γλώσσα: Ελληνικά"}
      </h2>

      {/* Buttons for changing the language */}
      <div>
        <button
          onClick={() => changeLanguage("gr")}
          aria-label="Switch to Greek"
          style={{
            margin: "10px",
            padding: "10px",
            backgroundImage: `url(${greekFlag})`,
            backgroundSize: "cover",
            width: "50px", // Adjust width for visibility
            height: "30px", // Adjust height for visibility
            backgroundPosition: "center",
            border: "none",
            cursor: "pointer",
          }}
        ></button>
        <button
          onClick={() => changeLanguage("en")}
          aria-label="Switch to English"
          style={{
            margin: "10px",
            padding: "10px",
            backgroundImage: `url(${englishFlag})`,
            backgroundSize: "cover",
            width: "50px", // Adjust width for visibility
            height: "30px", // Adjust height for visibility
            backgroundPosition: "center",
            border: "none",
            cursor: "pointer",
          }}
        ></button>
      </div>
    </div>
  );
};

export default Translate;
