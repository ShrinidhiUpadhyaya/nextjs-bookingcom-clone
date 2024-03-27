import React from "react";
import { useRouter } from "next/navigation";
import ExploreContentCarousel from "../components/ExploreContentCarousel";
import { exploreData } from "@/app/stays/constants/staysConstants";

const ExploreContent = () => {
  const router = useRouter();

  const handleClick = (index) => {
    router.push(`/properties/${exploreData.data[index].title}`);
  };

  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">{exploreData.title}</h2>
      <p className="tertiaryText">
        These popular destinations have a lot to offer
      </p>
      <ExploreContentCarousel
        className="mt-2"
        carouselData={exploreData.data}
        onClick={(index) => handleClick(index)}
      />
    </div>
  );
};

export default ExploreContent;
