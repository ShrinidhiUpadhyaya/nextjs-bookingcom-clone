import React from "react";
import { cn } from "@/lib/utils";
import { popularCarHireBrands } from "../constants";

const PopularBrandsContent = () => {
  return (
    <div className="contentWidth sectionSpacing">
      <h3 className="secondaryTitle">Popular car hire brands</h3>
      <div className="mt-4 flex justify-between gap-2">
        {popularCarHireBrands.map((brand) => (
          <div className={cn("rounded-md p-4", `${brand.color}`)}>
            <p className="text-white">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrandsContent;
