import React, { useContext } from "react";
import { Button } from "../ui/button";
import DSquareButton from "../DSquareButton";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useBookHotelStore } from "@/app/[locale]/store/useBookHotelStore";
import { LoginContext } from "./context/LoginContext";

const LargeScreenContent = () => {
  const userEmail = useBookHotelStore((state) => state.userEmail);
  const { setLoginDialog, setCurrencyDialog, setLanguageDialog } =
    useContext(LoginContext);

  return (
    <div className="hidden items-center gap-2 lg:flex">
      <div className="flex gap-2">
        <DSquareButton label="EUR" onClick={() => setCurrencyDialog(true)} />
        <DSquareButton
          Icon={<Globe />}
          onClick={() => setLanguageDialog(true)}
        />
        {/* <DSquareButton Icon={<HelpCircle />} /> */}
      </div>

      {!userEmail && (
        <div className="flexVCenter gap-4 text-white ">
          {/* <Link
    href="/"
    className="rounded-md px-4 py-4 text-center hover:bg-[#1A4FA0]"
  >
    Register your accomodation
  </Link> */}

          <Button
            className={cn(
              "rounded-lg border border-white bg-transparent text-lg font-medium hover:bg-white hover:text-[#006CE4]",
              "px-4 py-2",
            )}
            onClick={() => setLoginDialog(true)}
          >
            Log In
          </Button>

          <Button
            className={cn(
              "primaryTextColor rounded-md bg-white text-lg font-medium hover:bg-secondary/90",
              "px-4 py-2",
            )}
            onClick={() => setLoginDialog(true)}
          >
            Sign In
          </Button>
        </div>
      )}
    </div>
  );
};

export default LargeScreenContent;
