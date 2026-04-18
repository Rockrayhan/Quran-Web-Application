'use client';

import { useSettings } from '@/context/SettingsContext';

export default function SurahContent({ surah }: any) {
  const { arabicSize, translationSize, font } = useSettings();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">

      {/* 🔥 Surah Header */}
      <div className="text-center space-y-2 border-b pb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          {surah.englishName}
        </h1>

        <p
          className={`text-2xl ${font}`}
          style={{ fontSize: `${arabicSize + 4}px` }}
        >
          {surah.name}
        </p>

        <p className="text-sm text-gray-500">
          Total Ayahs: {surah.ayahs.length}
        </p>
      </div>

      {/* 📖 Ayahs */}
      <div className="space-y-6">
        {surah.ayahs.map((ayah: any) => (
          <div
            key={ayah.number}
            className="p-4 rounded-xl border bg-white/70 backdrop-blur space-y-3 shadow-sm hover:shadow-md transition-all duration-200"
          >

            {/* Ayah number */}
            <div className="flex justify-end">
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                {ayah.number}
              </span>
            </div>

            {/* Arabic */}
            <p
              className={`text-right leading-loose ${font}`}
              style={{ fontSize: `${arabicSize}px` }}
            >
              {ayah.text}
            </p>

            {/* Translation */}
            <p
              className="text-gray-700 leading-relaxed"
              style={{ fontSize: `${translationSize}px` }}
            >
              {ayah.translation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}