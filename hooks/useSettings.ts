'use client';

import { useEffect, useState } from 'react';

export const useSettings = () => {
  const [arabicSize, setArabicSize] = useState(24);
  const [translationSize, setTranslationSize] = useState(16);
  const [font, setFont] = useState('font-amiri');

  // load from localStorage
  useEffect(() => {
    const a = localStorage.getItem('arabicSize');
    const t = localStorage.getItem('translationSize');
    const f = localStorage.getItem('font');

    if (a) setArabicSize(Number(a));
    if (t) setTranslationSize(Number(t));
    if (f) setFont(f);
  }, []);

  // update helpers
  const updateArabic = (v: number) => {
    setArabicSize(v);
    localStorage.setItem('arabicSize', v.toString());
  };

  const updateTranslation = (v: number) => {
    setTranslationSize(v);
    localStorage.setItem('translationSize', v.toString());
  };

  const updateFont = (v: string) => {
    setFont(v);
    localStorage.setItem('font', v);
  };

  return {
    arabicSize,
    translationSize,
    font,
    updateArabic,
    updateTranslation,
    updateFont,
  };
};