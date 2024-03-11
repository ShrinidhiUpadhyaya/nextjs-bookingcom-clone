import React from "react";
import { Separator } from "../ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase-config";
import { UserCircle } from "lucide-react";
import { useBookHotelStore } from "@/app/store/useBookHotelStore";

const LoggedInContent = () => {
  const userEmail = useBookHotelStore((state) => state.userEmail);

  const accountSettingsOptions = [
    {
      label: "Profile",
    },
    {
      label: "Settings",
    },
  ];

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {userEmail && (
        <div className="flex items-center gap-2">
          <p className="flex items-center text-white">{userEmail.email}</p>

          <Popover>
            <PopoverTrigger>
              <div className="rounded-md p-2 hover:bg-[#1A4FA0]">
                <UserCircle className="text-white" />
              </div>
            </PopoverTrigger>
            <PopoverContent align="end" className="p-0">
              <div>
                <div className="space-y-1">
                  {accountSettingsOptions.map((option) => (
                    <p
                      key={option.label}
                      className="applyHover rounded-md p-2 pl-4"
                    >
                      {option.label}
                    </p>
                  ))}
                </div>
                <Separator className="mt-4" />
                <p
                  className="applyHover mt-4 cursor-pointer rounded-md p-2 pl-4"
                  onClick={logout}
                >
                  Log out
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default LoggedInContent;
