"use client";

import { useState } from "react";
import Link from "next/link";
import { searchAyahs } from "@/lib/quran";


export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results = query.length > 2 ? searchAyahs(query) : [];

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      {/* Input */}
      <input
        type="text"
        placeholder="Search ayahs (translation)..."
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/70 backdrop-blur"
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Results dropdown */}
      {query.length > 2 && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border rounded-xl shadow-lg max-h-100 overflow-y-auto z-50">
          {results.length > 0 ? (
            results.map((r, i) => (
              <Link
                key={i}
                href={`/surah/${r.surahNumber}`}
                className="block p-3 hover:bg-gray-50 border-b last:border-none"
              >
                <p className="text-xs text-gray-500">
                  Surah {r.surahNumber} • {r.surahName}
                </p>

                <p className="text-right text-lg leading-relaxed">{r.text}</p>

                <p className="text-sm text-gray-600">{r.translation}</p>
              </Link>
            ))
          ) : (
            <p className="p-4 text-center text-gray-400">No results found</p>
          )}
        </div>
      )}
    </div>
  );
}
