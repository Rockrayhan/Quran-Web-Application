'use client';

import Link from 'next/link';
import { getAllSurahs } from '@/lib/quran';
import SettingsPanel from './SettingsPanel';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import SearchBar from '../SearchBar';

export default function MobileSidebar() {
  const surahs = getAllSurahs();

  return (
    <Sheet>
      {/* Trigger (hamburger button) */}
      <SheetTrigger asChild>
        <Button variant="default" className="md:hidden">
          <Menu size={18} />
        </Button>
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent side="left" className="w-52! md:w-80! p-4 flex flex-col gap-4">
        <SheetTitle className="text-lg font-bold">
          Quran Menu
        </SheetTitle>

        {/* Settings */}
        <SettingsPanel />

           <SearchBar />

        <hr />

        {/* Surah list */}
        <div className="flex flex-col gap-2 overflow-y-auto">
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
      </SheetContent>
    </Sheet>
  );
}