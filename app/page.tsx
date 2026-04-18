import Link from 'next/link';
import { getAllSurahs } from '@/lib/quran';


export default function Home() {
  const surahs = getAllSurahs();

  return (
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
  );
}