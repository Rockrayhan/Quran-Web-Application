import SurahContent from '@/components/SurahContent';
import { getSurahById } from '@/lib/quran';


export default async function SurahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const surah = getSurahById(Number(id));

  if (!surah) return <div>Not found</div>;

  return <SurahContent surah={surah} />;
}