import SurahContent from "@/components/SurahContent";
import { getSurahById } from "@/lib/quran";
import { notFound } from "next/navigation";

export default async function SurahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  await new Promise((res) => setTimeout(res, 200));
  const { id } = await params;

  const surah = getSurahById(Number(id));

 if (!surah) return notFound();

  return <SurahContent surah={surah} />;
}
