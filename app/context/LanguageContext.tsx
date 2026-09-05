"use client"; // Ensure this is client-side

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
export type Language = "en" | "gr";
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("gr"); // Default language

  // Keep the document language in sync with the toggle for a11y + SEO.
  // "gr" is the app's internal code; the correct BCP 47 language tag is "el".
  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "el";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
