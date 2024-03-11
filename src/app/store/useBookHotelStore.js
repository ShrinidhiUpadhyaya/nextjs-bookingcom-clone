import { create } from "zustand";
import { addDays } from "date-fns";

export const useBookHotelStore = create((set) => ({
  bookingDate: {
    from: new Date(),
    to: addDays(new Date(), 10),
  },
  travellersCount: {
    adults: 1,
    childrens: 0,
    rooms: 1,
  },
  updateBookingDate: (newDate) => set(() => ({ bookingDate: newDate })),
  updateTravellersCount: (newCount) =>
    set(() => ({ travellersCount: newCount })),

  userEmail: null,
  setUserEmail: (email) => set(() => ({ userEmail: email })),
}));
