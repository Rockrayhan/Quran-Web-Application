export interface Ayah {
  number: number;
  text: string;
  translation: string;
}

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  ayahs: Ayah[];
}