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
    <div className="contentWidth flexCol ">
      <div className="my-8">
        <h3 className="secondaryTitle">Popular flights near you</h3>
        <p className="assistTitle">
          Find deals on domestic and international flights
        </p>
        <PopularFlightsCarousel
          carouselData={popularFlights}
          className={"mt-4"}
        />
      </div>
    </div>
  );
};
