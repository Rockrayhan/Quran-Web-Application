import { getAllSurahs } from "@/lib/quran";
import SearchBar from "@/components/SearchBar";
import SurahCard from "@/components/SurahCard";

export default function Home() {
  const surahs = getAllSurahs();

  return (
    <div className="py-8 space-y-8">

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">
          Al-Quran
        </h1>
        <p className="text-gray-500 text-sm">
          Read, search and explore the Quran
        </p>
      </div>

      {/* Search */}
      <div className="px-4">
        <SearchBar />
      </div>

      {/* Surah Grid */}
      <div className="px-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {surahs.map((s) => (
          <SurahCard key={s.number} surah={s} />
        ))}
      </div>

    </div>
  );
}