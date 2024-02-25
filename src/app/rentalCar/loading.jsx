import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="contentWidth space-y-20 pt-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-[75%] rounded-xl bg-[#003B95]/15" />
          <Skeleton className="h-8 w-[75%] rounded-xl bg-[#003B95]/15" />
          <Skeleton className="h-14 w-[75%] rounded-xl bg-[#003B95]/15" />
        </div>

        <div className="space-y-4">
          <Skeleton className="block h-8 w-[75%] rounded-xl bg-[#003B95]/15" />
          <Skeleton className="block h-[125px] w-[75%] rounded-xl bg-[#003B95]/15" />
          <Skeleton className="block h-8 w-[75%] rounded-xl bg-[#003B95]/15" />
        </div>

        <div className="space-y-4">
          <Skeleton className="block h-8 w-[75%] rounded-xl bg-[#003B95]/15" />
          <Skeleton className="block h-[125px] w-[75%] rounded-xl bg-[#003B95]/15" />
        </div>
      </div>
    </div>
  );
};

export default loading;
