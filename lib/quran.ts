import quran from '@/data/quran.json';
import { Surah } from '@/types/quran';

export const getAllSurahs = (): Surah[] => quran.surahs;

export const getSurahById = (id: number): Surah | undefined =>
  quran.surahs.find((s) => s.number === id);

export const searchAyahs = (query: string) => {
  if (!query.trim()) return [];

  const q = query.toLowerCase();

  return quran.surahs.flatMap((surah: any) =>
    surah.ayahs
      .filter((ayah: any) =>
        ayah.translation.toLowerCase().includes(q)
      )
      .map((ayah: any) => ({
        ...ayah,
        surahNumber: surah.number,
        surahName: surah.englishName,
      }))
  );
};