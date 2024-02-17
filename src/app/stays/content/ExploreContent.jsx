import React from "react";
import ExploreContentCarousel from "../components/ExploreContentCarousel";
import { useRouter } from "next/navigation";

const ExploreContent = ({title, data}) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/cities');
  } 
  return (
    <div className="flexCol gap-1">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-base">These popular destinations have a lot to offer</p>
      <ExploreContentCarousel carouselData={data} onClick={handleClick}/>
    </div>
  );
};

export default ExploreContent;
