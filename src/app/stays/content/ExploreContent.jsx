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
    <div className="sectionSpacing">
      <h2 className="primaryTitle">{title}</h2>
      <p className="tertiaryText">
        These popular destinations have a lot to offer
      </p>
      <ExploreContentCarousel
        className="mt-2"
        carouselData={data}
        onClick={handleClick}
      />
    </div>
  );
};

export default ExploreContent;
