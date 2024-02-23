import React, { useState, useEffect } from "react";
import PopularFlightsCarousel from "../components/PopularFlightsCarousel";
import getPopularFlights from "@/lib/getPopularFlights";
import { cn } from "@/lib/utils";

const TrendingCitiesContent = ({ className }) => {
  const [trendingCityFlights, setTrendingCityFlights] = useState([]);

  async function fetchPopularFlights() {
    const response = await getPopularFlights();
    let reversedArr = response.data;
    reversedArr = [...reversedArr].reverse();
    setTrendingCityFlights(reversedArr);
  }

  useEffect(() => {
    fetchPopularFlights();
  }, []);

  return (
    <div className={cn("contentWidth flexCol sectionSpacing", className)}>
      <h3 className="secondaryTitle">Trending Cities</h3>
      <p className="tertiaryText">
        Book flights to a destination popular with travellers from Gerany{" "}
      </p>
      <PopularFlightsCarousel
        carouselData={trendingCityFlights}
        className={"mt-4"}
      />
    </div>
  );
};

export default TrendingCitiesContent;
