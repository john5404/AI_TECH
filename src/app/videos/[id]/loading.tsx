import { Skeleton } from "@/components/ui/skeleton";

export default function VideoLoading() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-4 px-4 py-8 sm:px-6">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-10 w-3/4" />
      <Skeleton className="aspect-video w-full" />
      <Skeleton className="h-16 w-full" />
    </main>
  );
}
