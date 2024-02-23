import React from "react";
import ExploreContentCarousel from "../components/ExploreContentCarousel";
import { useRouter } from "next/navigation";

const ExploreContent = ({ title, data }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/cities");
  };
  return (
    <div className="flexCol sectionSpacing gap-1">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="tertiaryText">
        These popular destinations have a lot to offer
      </p>
      <ExploreContentCarousel carouselData={data} onClick={handleClick} />
    </div>
  );
};

export default ExploreContent;
