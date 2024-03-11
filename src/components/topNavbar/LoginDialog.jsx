import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

import DDialog from "../DDialog";
import DOutlineButton from "../DOutlineButton";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/utils/firebase-config";
import { BadgeCheck, Eye, EyeOff } from "lucide-react";

import { LoginContext } from "./context/LoginContext";
import { useBookHotelStore } from "@/app/store/useBookHotelStore";
import { registerOptions } from "@/app/stays/constants/constants";

const LoginDialog = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [incorrectUsername, setIncorrectUsername] = useState(false);

  const setUserEmail = useBookHotelStore((state) => state.setUserEmail);

  const { loginDialog, setLoginDialog } = useContext(LoginContext);

  const {
    register: loginUserForm,
    handleSubmit: loginUserSubmit,
    formState: { errors: loginUserErrors },
    reset,
  } = useForm();

  const loginSubmit = (data) => {
    checkUserExists(data.email, data.password);
  };

  const checkUserExists = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        setIsNewUser(true);
        reset();
      }
    } catch (error) {
      setIsNewUser(false);
      userSignIn(email, password);
    }
  };

  const userSignIn = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        setLoginDialog(false);
        reset();
      }
    } catch (error) {
      setIncorrectUsername(true);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserEmail(currentUser);
    });
  }, []);

  return (
    <DDialog
      open={loginDialog}
      title="Log in or sign up"
      onOpenChange={(open) => {
        if (!open) {
          setLoginDialog(false);
          setIsNewUser(false);
        }
      }}
    >
      <div className="flex justify-center">
        {isNewUser ? (
          <div className="flexCol items-center">
            <BadgeCheck className="h-16 w-16 text-green-500" />
            <p className="mt-4 text-xl font-semibold">Congratulations</p>
            <p>Your account has been successfully created</p>
          </div>
        ) : (
          <div className="w-96">
            <h3 className="w-full text-xl font-bold">
              Sign in or create an account
            </h3>
            <div className="text-md mt-8 w-full">
              <form onSubmit={loginUserSubmit(loginSubmit)}>
                <p>Email address</p>
                <Input
                  className={cn(
                    "mt-2 h-11 font-medium",
                    loginUserErrors.email && "focus:outline-red-500",
                  )}
                  placeholder="Enter your email address"
                  {...loginUserForm("email", {
                    required: "Enter your email address",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered a valid email",
                    },
                  })}
                />
                <p className="tertiaryText !text-red-500">
                  {loginUserErrors.email?.message}
                </p>

                <p className="mt-4">Password</p>
                <div
                  className={cn(
                    "mt-2 flex items-center gap-2 rounded-md border pr-4",
                    loginUserErrors.password && "border-2 border-red-500",
                  )}
                >
                  <Input
                    className="border-none font-medium"
                    placeholder="Enter your password"
                    {...loginUserForm("password", {
                      required: "Enter your password",
                    })}
                    type={showPassword ? "text" : "password"}
                  />
                  {showPassword ? (
                    <EyeOff onClick={() => setShowPassword(false)} />
                  ) : (
                    <Eye onClick={() => setShowPassword(true)} />
                  )}
                </div>

                <p className="tertiaryText !text-red-500">
                  {loginUserErrors.password?.message}
                </p>

                {incorrectUsername && (
                  <p className="mt-4 !text-red-500">
                    Incorrect username or password please try again
                  </p>
                )}

                <Button className="mt-4 w-full">Login</Button>
              </form>
            </div>

            <div className="relative mt-4 w-full">
              <Separator
                orientation="vertical"
                className="mt-4 h-[1px] w-full bg-black/20"
              />
              <span className="z:2 absolute left-1/2 top-1/2 -translate-x-1/2 transform border-0 bg-white px-2 text-center text-sm">
                or use one of the options
              </span>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              {registerOptions.map((option) => (
                <DOutlineButton
                  key={option.tooltip}
                  className="rounded-md border border-[#e7e7e7] px-8 py-10 hover:border hover:border-[#006CE4] hover:bg-transparent"
                >
                  <Link href="/api/auth/signin">
                    <div className="relative h-6 w-6">
                      <Image
                        fill={true}
                        src={option.imgSource}
                        alt={option.tooltip}
                      />
                    </div>
                  </Link>
                </DOutlineButton>
              ))}
            </div>

            <Separator
              orientation="vertical"
              className="mx-0 my-4 h-[1px] w-full bg-black/20"
            />

            <p className="text-center text-xs">
              By signing in or creating an account, you agree with our{" "}
              <span>Terms & conditions and Privacy Statements</span>
            </p>

            <Separator
              orientation="vertical"
              className="mx-0 my-4 h-[1px] w-full bg-black/20"
            />
          </div>
        )}
      </div>
    </DDialog>
  );
};

export default LoginDialog;
