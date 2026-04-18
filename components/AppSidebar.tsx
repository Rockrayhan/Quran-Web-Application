'use client';

import Link from 'next/link';
import { getAllSurahs } from '@/lib/quran';
import SettingsPanel from './SettingsPanel';

export default function AppSidebar() {
  const surahs = getAllSurahs();

  return (
    <aside className="w-64 h-screen border-r p-4 flex flex-col gap-4 overflow-y-auto">
      
      {/* Title */}
      <Link href="/">  <h1 className="text-xl font-bold">Quran</h1> </Link>
      

      {/* Settings */}
      <SettingsPanel />

      {/* Divider */}
      <hr />

      {/* Surah List */}
      <div className="flex flex-col gap-2">
        {surahs.slice(0, 20).map((s) => ( // limit for UI (optional)
          <Link
            key={s.number}
            href={`/surah/${s.number}`}
            className="text-sm hover:bg-gray-100 p-2 rounded"
          >
            {s.number}. {s.englishName}
          </Link>
        ))}
      </div>
    </aside>
  );
}