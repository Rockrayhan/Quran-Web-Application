import quran from '@/data/quran.json';
import { Surah } from '@/types/quran';

export const getAllSurahs = (): Surah[] => quran.surahs;

export const getSurahById = (id: number): Surah | undefined =>
  quran.surahs.find((s) => s.number === id);

export const searchAyahs = (query: string) => {
  return quran.surahs.flatMap((surah: Surah) =>
    surah.ayahs
      .filter((ayah) =>
        ayah.translation.toLowerCase().includes(query.toLowerCase())
      )
      .map((ayah) => ({
        ...ayah,
        surahNumber: surah.number,
        surahName: surah.englishName,
      }))
  );
};