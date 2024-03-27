import React from "react";
import SearchContent from "./content/SearchContent";
import HotelsList from "./content/HotelsList";

const page = () => {
  return (
    <div className="flexCol items-center justify-center gap-8">
      <SearchContent />
      <HotelsList />
    </div>
  );
};

export default page;
