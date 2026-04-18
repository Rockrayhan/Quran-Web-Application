'use client';

import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

export default function SurahCard({ surah }: any) {
  const { arabicSize, translationSize ,font } = useSettings();

  return (
    <Link href={`/surah/${surah.number}`}>
      <div className="p-4 border rounded-xl hover:shadow-md transition-all bg-white/70 backdrop-blur cursor-pointer">

        {/* Top row */}
        <div className="flex justify-between items-center mb-2">
          
          {/* Surah Number */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold">
            {surah.number}
          </div>

          {/* English Name */}
          <h2 className={`font-semibold ${font} text-base md:text-lg`}
          style={{ fontSize: `${translationSize}px` }}
          >
            {surah.englishName}
          </h2>
        </div>

        {/* Arabic Name */}
        <p
          className={`text-right ${font} leading-relaxed`}
          style={{ fontSize: `${arabicSize}px` }}
        >
          {surah.name}
        </p>
      </div>
    </Link>
  );
}