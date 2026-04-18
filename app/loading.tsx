import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="py-8 space-y-8 px-4">

      {/* Header */}
      <div className="text-center space-y-2">
        <Skeleton className="h-8 w-40 mx-auto" />
        <Skeleton className="h-4 w-60 mx-auto" />
      </div>

      {/* Search */}
      <Skeleton className="h-12 w-full max-w-2xl mx-auto rounded-xl" />

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-xl space-y-3">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}