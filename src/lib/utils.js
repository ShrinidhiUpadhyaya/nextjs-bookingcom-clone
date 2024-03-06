import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getCurrentPath(value) {
  let currentPathIndex = 0;
  switch (value) {
    case "/stays":
      break;
    case "/flights":
      currentPathIndex = 1;
      break;
    case "/rentalCar":
      currentPathIndex = 2;
      break;
    case "/attractions":
      currentPathIndex = 3;
      break;
    case "/airportTaxi":
      currentPathIndex = 4;
      break;
  }

  return currentPathIndex;
}
