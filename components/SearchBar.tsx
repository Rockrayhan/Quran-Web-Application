'use client';

import { useState } from 'react';

import Link from 'next/link';
import { searchAyahs } from '@/lib/quran';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const results = query.length > 2 ? searchAyahs(query) : [];

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">

      {/* Input */}
      <input
        type="text"
        placeholder="Search in translation..."
        className="w-full p-2 border rounded-lg"
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Results */}
      <div className="space-y-3">
        {results.map((r, i) => (
          <Link
            key={i}
            href={`/surah/${r.surahNumber}`}
            className="block p-3 border rounded-lg hover:bg-gray-50"
          >
            <p className="text-sm text-gray-500">
              Surah {r.surahNumber} - {r.surahName}
            </p>

            <p className="text-right text-lg">{r.text}</p>
            <p className="text-gray-600 text-sm">{r.translation}</p>
          </Link>
        ))}
      </div>

      {/* No results */}
      {query.length > 2 && results.length === 0 && (
        <p className="text-center text-gray-400">No results found</p>
      )}
    </div>
  );
}