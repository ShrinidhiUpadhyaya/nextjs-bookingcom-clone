import React from "react";
import { Separator } from "@/components/ui/separator";
import SearchContent from "./content/SearchContent";
import HotelsList from "./content/HotelsList";

const page = () => {
  return (
    <div className="flexCol items-center justify-center gap-8">
      <SearchContent />
      <Separator className="mt-8" />
      <HotelsList />
    </div>
  );
};

export default page;
