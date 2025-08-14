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
    <div
      role="group"
      aria-label="Language selection"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "8px",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Greek Language Button */}
      <button
        role="button"
        aria-label={`Switch to Greek language${
          language === "gr" ? " (currently selected)" : ""
        }`}
        aria-pressed={language === "gr"}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          padding: "6px",
          borderRadius: "8px",
          backgroundColor: language === "gr" ? "#e3f2fd" : "transparent",
          transition: "all 0.3s ease",
          border:
            language === "gr" ? "2px solid #1976d2" : "2px solid transparent",
        }}
        onClick={() => changeLanguage("gr")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            changeLanguage("gr");
          }
        }}
      >
        <div
          style={{
            backgroundImage: `url(${greekFlag})`,
            backgroundSize: "cover",
            width: "32px",
            height: "22px",
            backgroundPosition: "center",
            borderRadius: "4px",
            marginBottom: "4px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        ></div>
        <span
          style={{
            fontSize: "11px",
            color: language === "gr" ? "#1976d2" : "#333",
            fontWeight: language === "gr" ? "600" : "500",
            letterSpacing: "0.5px",
          }}
        >
          ΕΛ
        </span>
      </button>

      {/* English Language Button */}
      <button
        role="button"
        aria-label={`Switch to English language${
          language === "en" ? " (currently selected)" : ""
        }`}
        aria-pressed={language === "en"}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          padding: "6px",
          borderRadius: "8px",
          backgroundColor: language === "en" ? "#e3f2fd" : "transparent",
          transition: "all 0.3s ease",
          border:
            language === "en" ? "2px solid #1976d2" : "2px solid transparent",
        }}
        onClick={() => changeLanguage("en")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            changeLanguage("en");
          }
        }}
      >
        <div
          style={{
            backgroundImage: `url(${englishFlag})`,
            backgroundSize: "cover",
            width: "32px",
            height: "22px",
            backgroundPosition: "center",
            borderRadius: "4px",
            marginBottom: "4px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        ></div>
        <span
          style={{
            fontSize: "11px",
            color: language === "en" ? "#1976d2" : "#333",
            fontWeight: language === "en" ? "600" : "500",
            letterSpacing: "0.5px",
          }}
        >
          EN
        </span>
      </button>
    </div>
  );
};

export default Translate;
