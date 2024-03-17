import React, { useContext } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import DCalendarPopover from "@/components/DCalendarPopover";
import LocationPopover from "@/components/LocationPopover";
import PersonCountPopover from "@/components/PersonCountPopover";
import { StaysTranslationContext } from "../context/TranslationProvider";

const SearchContent = () => {
  const t = useContext(StaysTranslationContext);
  return (
    <div className="flexCol -mt-8 mb-10 items-center justify-center">
      <div className="contentWidth items-center gap-1 space-y-1 rounded-md bg-[#FFB700] p-1 md:flex md:h-14 md:space-y-0">
        <LocationPopover label={t("PlacesSearchPlaceholder")} />
        <DCalendarPopover />
        <PersonCountPopover />
        <Button className="w-full py-6 text-lg md:w-20 md:text-sm lg:w-24 lg:text-lg">
          {t("SearchButtonText")}
        </Button>
      </div>
      <div className="contentWidth mt-4 flex gap-2">
        <Checkbox className="h-5 w-5" />
        <Label className="tertiaryText">{t("FlightsCheckBox")}</Label>
      </div>
    </div>
  );
};

export default SearchContent;
