"use client";

import React, { useEffect } from "react";

import "../../globals.css";

import OffersContent from "./content/OffersContent";
import ExploreContent from "./content/ExploreContent";
import PropertyTypeContent from "./content/PropertyTypeContent";
import TrendingContent from "./content/TrendingContent";
import TripPlannerContent from "./content/TripPlannerContent";
import UniquePropertiesContent from "./content/UniquePropertiesContent";
import DestinationsContent from "./content/DestinationsContent";
import FooterContent from "./content/FooterContent";

import SearchContent from "./content/SearchContent";
import { useTranslation } from "@/app/i18n/client";
import { StaysTranslationContext } from "./context/TranslationProvider";
import { useGlobalSettingsStore } from "../store/useBookHotelStore";
const page = ({ params: { locale } }) => {
  const { t } = useTranslation(locale, "stays");

  const currentLocale = useGlobalSettingsStore((state) => state.currentLocale);

  const setCurrentLocale = useGlobalSettingsStore(
    (state) => state.setCurrentLocale,
  );

  useEffect(() => {
    locale && setCurrentLocale(locale);
  }, [locale]);

  return (
    <div>
      <StaysTranslationContext.Provider value={t}>
        <div className="flexHVCenter w-full bg-[#003B95] pb-20 pt-16">
          <div className="contentWidth">
            <h1 className="text-3xl font-semibold text-[white] transition xl:text-5xl">
              {t("h1")}
            </h1>
            <h3 className="mt-2 text-lg text-white md:text-2xl">{t("h3")}</h3>
          </div>
        </div>

        <SearchContent />

        <div className="flexHCenter">
          <div className="contentWidth">
            <OffersContent />
            <ExploreContent />
            <PropertyTypeContent />
            <TrendingContent />
            <TripPlannerContent />
            <UniquePropertiesContent />
            <DestinationsContent />
          </div>
        </div>
      </StaysTranslationContext.Provider>
      <FooterContent locale={locale} />
    </div>
  );
};

export default page;
