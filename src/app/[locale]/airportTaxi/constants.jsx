import {
  Plane,
  Check,
  CreditCard,
  CarTaxiFront,
  UserRound,
  Building,
} from "lucide-react";

export const taxiSearchFilter = [
  {
    label: "One-way",
  },
  {
    label: "Return",
  },
];

export const taxiBenefits = [
  {
    title: "Flight tracking",
    description:
      "Your driver tracks your flight and waits for you if its delayed",
    icon: <Plane />,
  },
  {
    title: "One clear price",
    description:
      "Your price is confirmed upfront – no extra costs, no cash required",
    icon: <CreditCard />,
  },
  {
    title: "Tried and trusted",
    description: "Tried and trusted",
    icon: <Check />,
  },
];

export const howDoesItWork = [
  {
    title: "Booking your airport taxi",
    description:
      "Confirmation is immediate. If your plans change, you can cancel for free up to 24 hours before your scheduled pick-up time",
    icon: <CarTaxiFront />,
  },
  {
    title: "Meeting your driver",
    description:
      "You'll be met on arrival and taken to your vehicle. Your driver will track your flight, so they'll wait for you even if it's delayed",
    icon: <UserRound />,
  },

  {
    title: "Arriving at your destination",
    description:
      "Get to your destination quickly and safely – no waiting in line for a taxi, no figuring out public transport",
    icon: <Building />,
  },
];

export const taxiType = [
  {
    label: "1 - 3 passengers",
    data: [
      {
        type: "Standard",
        car: "Skoda Octavia or similar",
        passengers: 3,
        bags: 2,
      },
      {
        type: "Executive",
        car: "Mercedes-Benz E-Class or similar",
        passengers: 3,
        bags: 2,
      },
    ],
  },
  {
    label: "4 - 7 passengers",
    data: [
      {
        type: "People carrier",
        car: "Peugeot 5008 or similar",
        passengers: 5,
        bags: 5,
      },
      {
        type: "Executive people carrier",
        car: "Mercedes-Benz V-Class or similar",
        passengers: 6,
        bags: 6,
      },
      {
        type: "Large people carrier",
        car: "Ford Tourneo or similar",
        passengers: 7,
        bags: 7,
      },
    ],
  },
];

export const faqList = [
  {
    id: "faq1",
    title: "What happens if my flight is early or delayed?",
    description:
      "Our Meet & Greet service means that if you provide your flight number when you're booking your airport taxi, we'll be able to track your flight and adjust your pick-up time automatically according to your actual arrival time. Once your flight has landed, your driver will wait for 45 minutes. This should give you plenty of time to pass through security, claim your baggage and head through to arrivals to meet your driver.",
  },
  {
    id: "faq2",
    title: "What's included in the price?",
    description:
      "Our prices include all taxes, fees, gratuity and toll road charges. If you book an airport pick-up, prices also include Meet & Greet as standard, which means we'll track your flight and wait for 45 minutes from the time your flight arrives. If you book a return taxi to the airport – or any other non-airport pick-up – your driver will wait for 15 minutes after the scheduled pick-up time. Please note that you may have to pay an additional cost for certain special requests or any amendments you want to make to your journey.",
  },
  {
    id: "faq3",
    title: "How do i pay?",
    description:
      "All of our private transport services are pre-paid, which means you pay online at the time of booking. Payment is secure, and we accept most major credit cards, debit cards, PayPal, and eligible rewards in your Booking.com Wallet.",
  },
  {
    id: "faq4",
    title: "Can i cancel my booking?",
    description:
      "Yes. You can always cancel your booking for free up to 24 hours prior to your scheduled pick-up time. Some of our partners allow a shorter window for free cancellation. Check your booking confirmation for more information.",
  },
];
