import Link from "next/link";
import { getAllSurahs } from "@/lib/quran";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  const surahs = getAllSurahs();

  return (
    <div className="py-8">

    <div className="text-center">
      <h1 className="text-2xl md:text-4xl mb-4"> Al-Quran App </h1>
    </div>

      <div className="px-5 flex gap-0">
        <SearchBar />
      </div>

      <div className="p-4 grid gap-4 md:grid-cols-2">
        {surahs.map((s) => (
          <Link key={s.number} href={`/surah/${s.number}`}>
            <div className="p-4 border rounded-xl hover:shadow-md transition">
              <h2 className="font-semibold">{s.englishName}</h2>
              <p className="text-xl text-right">{s.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
