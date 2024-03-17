import React, { useContext } from "react";
import DSquareButton from "../DSquareButton";
import { Menu, UserCircle } from "lucide-react";
import { useBookHotelStore } from "@/app/[locale]/store/useBookHotelStore";
import { LoginContext } from "./context/LoginContext";

const SmallScreenContent = () => {
  const userEmail = useBookHotelStore((state) => state.userEmail);
  const { setLoginDialog } = useContext(LoginContext);

  return (
    <div className="lg:hidden">
      {!userEmail && (
        <DSquareButton
          Icon={<UserCircle />}
          onClick={() => setLoginDialog(true)}
        />
      )}

      <DSquareButton Icon={<Menu />} />
    </div>
  );
};

export default SmallScreenContent;
