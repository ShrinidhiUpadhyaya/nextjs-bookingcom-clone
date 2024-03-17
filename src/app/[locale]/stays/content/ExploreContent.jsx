import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import ExploreContentCarousel from "../components/ExploreContentCarousel";
import { exploreData } from "@/app/[locale]/stays/constants/staysConstants";
import { StaysTranslationContext } from "../context/TranslationProvider";

const ExploreContent = () => {
  const router = useRouter();
  const t = useContext(StaysTranslationContext);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/cities");
  };
  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">{t("ExploreH2")}</h2>
      <p className="tertiaryText">{t("ExploreSubText")}</p>
      <ExploreContentCarousel
        className="mt-2"
        carouselData={exploreData.data}
        onClick={handleClick}
      />
    </div>
  );
};

export default ExploreContent;
