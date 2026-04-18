import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSurah() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">

      {/* Header */}
      <div className="text-center space-y-3">
        <Skeleton className="h-8 w-40 mx-auto" />
        <Skeleton className="h-6 w-32 mx-auto" />
        <Skeleton className="h-4 w-24 mx-auto" />
      </div>

      {/* Ayahs */}
      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-xl space-y-3">
            <Skeleton className="h-4 w-10 ml-auto" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}