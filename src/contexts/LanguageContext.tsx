import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language, translations } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['it'];
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Extract language from pathname
const getLanguageFromPath = (pathname: string): Language => {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/ru')) return 'ru';
  return 'it'; // Default to Italian
};

// Remove language prefix from path
const getPathWithoutLanguage = (pathname: string): string => {
  if (pathname.startsWith('/en')) return pathname.slice(3) || '/';
  if (pathname.startsWith('/ru')) return pathname.slice(3) || '/';
  return pathname;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [language, setLanguageState] = useState<Language>(() => 
    getLanguageFromPath(location.pathname)
  );

  // Sync language with URL on location change
  useEffect(() => {
    const langFromPath = getLanguageFromPath(location.pathname);
    if (langFromPath !== language) {
      setLanguageState(langFromPath);
    }
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    const currentPath = getPathWithoutLanguage(location.pathname);
    const newPath = lang === 'it' ? currentPath : `/${lang}${currentPath === '/' ? '' : currentPath}`;
    navigate(newPath);
    setLanguageState(lang);
  };

  const getLocalizedPath = (path: string): string => {
    if (language === 'it') return path;
    return `/${language}${path === '/' ? '' : path}`;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
