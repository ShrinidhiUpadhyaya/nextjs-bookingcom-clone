"use client";

import React, { useState, useEffect } from "react";
import PopularFlightsCarousel from "../components/PopularFlightsCarousel";
import { cn } from "@/lib/utils";
import getPopularFlights from "@/lib/getPopularFlights";

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
    <div className={cn("contentWidth sectionSpacing", className)}>
      <h3 className="secondaryTitle">Trending Cities</h3>
      <p className="tertiaryText">
        Book flights to a destination popular with travellers from Gerany{" "}
      </p>
      <PopularFlightsCarousel
        carouselData={trendingCityFlights}
        className={"mt-2"}
      />
    </div>
  );
};

export default TrendingCitiesContent;
