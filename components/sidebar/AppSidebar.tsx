'use client';

import Link from 'next/link';
import { getAllSurahs } from '@/lib/quran';
import SettingsPanel from './SettingsPanel';
import SearchBar from '../SearchBar';

export default function AppSidebar() {
  const surahs = getAllSurahs();

  return (
    <aside className="hidden md:flex w-64 h-screen border-r p-4 flex-col gap-4 overflow-y-auto">
      
      <Link href="/">
        <h1 className="text-xl font-bold">Quran</h1>
      </Link>

      <SettingsPanel />


       <SearchBar />

 

      <hr />

      <div className="flex flex-col gap-2">
        {surahs.map((s) => (
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