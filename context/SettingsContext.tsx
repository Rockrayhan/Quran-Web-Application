'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type SettingsType = {
  arabicSize: number;
  translationSize: number;
  font: string;
  setArabicSize: (v: number) => void;
  setTranslationSize: (v: number) => void;
  setFont: (v: string) => void;
};

const SettingsContext = createContext<SettingsType | null>(null);

export const SettingsProvider = ({ children }: any) => {
  const [arabicSize, setArabicSize] = useState(24);
  const [translationSize, setTranslationSize] = useState(16);
  const [font, setFont] = useState('font-amiri');

  // load from localStorage
  useEffect(() => {
    setArabicSize(Number(localStorage.getItem('arabicSize')) || 24);
    setTranslationSize(Number(localStorage.getItem('translationSize')) || 16);
    setFont(localStorage.getItem('font') || 'font-amiri');
  }, []);

  // persist
  useEffect(() => {
    localStorage.setItem('arabicSize', arabicSize.toString());
  }, [arabicSize]);

  useEffect(() => {
    localStorage.setItem('translationSize', translationSize.toString());
  }, [translationSize]);

  useEffect(() => {
    localStorage.setItem('font', font);
  }, [font]);

  return (
    <SettingsContext.Provider
      value={{
        arabicSize,
        translationSize,
        font,
        setArabicSize,
        setTranslationSize,
        setFont,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within provider');
  return context;
};