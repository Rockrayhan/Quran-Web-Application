'use client';

import { useSettings } from '@/hooks/useSettings';

export default function SurahContent({ surah }: any) {
  const { arabicSize, translationSize, font } = useSettings();

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">{surah.englishName}</h1>

      {surah.ayahs.map((ayah: any) => (
        <div key={ayah.number} className="border-b pb-4 space-y-2">
          <p
            className={`text-right ${font} leading-loose`}
            style={{ fontSize: `${arabicSize}px` }}
          >
            {ayah.text}
          </p>

          <p
            className="text-gray-600"
            style={{ fontSize: `${translationSize}px` }}
          >
            {ayah.translation}
          </p>
        </div>
      ))}
    </div>
  );
}