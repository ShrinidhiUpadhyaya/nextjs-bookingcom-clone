"use client";

import React, { useState, useEffect } from "react";
import PopularFlightsCarousel from "../components/PopularFlightsCarousel";
import getPopularFlights from "@/lib/getPopularFlights";

export const PopularFlightsContent = () => {
  const [popularFlights, setPopularFlights] = useState([]);

  async function fetchPopularFlights() {
    const response = await getPopularFlights();
    console.log(response.data);
    setPopularFlights(response.data);
  }

  useEffect(() => {
    fetchPopularFlights();
  }, []);

  return (
    <div className="contentWidth sectionSpacing mt-10">
      <h3 className="secondaryTitle">Popular flights near you</h3>
      <p className="tertiaryText">
        Find deals on domestic and international flights
      </p>
      <PopularFlightsCarousel
        carouselData={popularFlights}
        className={"mt-2"}
      />
    </div>
  );
};
