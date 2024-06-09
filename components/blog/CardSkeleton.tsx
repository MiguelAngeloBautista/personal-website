import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 lg:gap-5">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg text-ellipsis text-pretty 
          md:min-w-[360px] md:max-w-[360px] min-w-[80%] max-w-[80%] md:min-h-[450px] md:max-h-[450px] min-h-[400px]"
        >
          <Skeleton className="object-cover w-full h-44" />
          <div className="p-6 space-y-2 relative">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
