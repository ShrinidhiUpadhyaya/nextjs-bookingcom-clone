export const reviewsData = [
  {
    id: "review1",
    name: "Jovana",
    country: "Serbia",
    description:
      "The ventilation in the cabin was great for sleeping. Modifying brughtness of the light is also great feature. The staff was SOOOO NICE! roof terrace is great, coffee and beer also. We will come again for sure :))",
  },

  {
    id: "review2",
    name: "Andrey",
    country: "Netherlands",
    description:
      "Staff was very friendly and helpful. Facilities are very neat and new. Very down to to earth place to stay.",
  },

  {
    id: "review3",
    name: "Erwin",
    country: "Germany",
    description:
      "I like cabin style hostels! Usually they a lot more tide than regular hostels! This one was exceptionally modern and comfortable! The bathroom amenities were amazing!",
  },

  {
    id: "review4",
    name: "Chan",
    country: "Australia",
    description:
      "“We really liked the format and ease of use. Convenient that the key to the room and floor doors is on your wrist. Very many shower stalls on the -1 floor. Everything is very clean and neat.",
  },

  {
    id: "review5",
    name: "Pedro",
    country: "Germany",
    description:
      "The room is equip with bluetooth speakers, wireless and usb charging ports, and dimmable lights. I forgot my charger and was amazed to learn that they have a wireless charger. That was super convenient.",
  },
];

export const hotelFeatures = [
  {
    description: "57m2",
  },
  {
    description: "Private Kitchen",
  },
  {
    description: "Private Bathroom",
  },
  {
    description: "Flat-screen TV",
  },
  {
    description: "Coffee Machine",
  },
];

import {
  CigaretteOff,
  ParkingCircle,
  Wifi,
  Users,
  Heater,
  Trees,
  ArrowDownUp,
  Bath,
  Check,
  BedDouble,
  Flower2,
  LampFloor,
  Sofa,
} from "lucide-react";

export const hotelPopularFacilities = [
  {
    label: "Non-smoking rooms",
    icon: CigaretteOff,
  },
  {
    label: "Private parking",
    icon: ParkingCircle,
  },
  {
    label: "Free WiFi",
    icon: Wifi,
  },
  {
    label: "Family rooms",
    icon: Users,
  },
  {
    label: "Heating",
    icon: Heater,
  },
  {
    label: "Garden",
    icon: Trees,
  },
  {
    label: "Lift",
    icon: ArrowDownUp,
  },
];

export const hotelFacilities = [
  {
    label: "Bathroom",
    Icon: Bath,
    facilities: [
      {
        label: "Towels",
      },
      {
        label: "Private bathroom",
      },
      {
        label: "Toilet",
      },
      {
        label: "Free toiletries",
      },
      {
        label: "Hairdryer",
      },
      {
        label: "Shower",
      },
    ],
  },
  {
    label: "Bedroom",
    Icon: BedDouble,
    facilities: [
      {
        label: "Linen",
      },
    ],
  },
  {
    label: "Outdoor",
    Icon: Flower2,
    facilities: [
      {
        label: "Garden",
      },
    ],
  },
  {
    label: "Room Amenities",
    Icon: LampFloor,
    facilities: [
      {
        label: "Socket near the bed",
      },
    ],
  },
  {
    label: "Living Area",
    Icon: Sofa,
    facilities: [
      {
        label: "Seating area",
      },
      {
        label: "Desk",
      },
    ],
  },
];

export const nearByPlaces = {
  label: "What's nearby",
  places: [
    {
      name: "Lohmühlenpark",
      distance: "550 m",
    },
    {
      name: "Planten und Blomen Wasserspiele",
      distance: "550 m",
    },
    {
      name: "Spielplatz Uhlandstraße in Eilbek",
      distance: "650 m",
    },
    {
      name: "Grünanlage Berliner Tor",
      distance: "650 m",
    },
    {
      name: "Kuhmühlenteich",
      distance: "850 m",
    },
    {
      name: "Alsterwiese Schwanenwik",
      distance: "900 m",
    },
    {
      name: "Hartwicus Park",
      distance: "900 m",
    },
    {
      name: "Jürgen-W.-Scheutzow-Park",
      distance: "950 m",
    },
    {
      name: "Thörls Park",
      distance: "1.2 km",
    },
    {
      name: "Stoltenpark",
      distance: "1.2 km",
    },
  ],
};

export const topAttractions = {
  label: "Top attractions",
  places: [
    {
      name: "Hamburger Kunsthalle",
      distance: "1.7 km",
    },
    {
      name: "Deichtorhallen",
      distance: "1.9 km",
    },
  ],
};

export const publicTransport = {
  label: "Public Transport",
  places: [
    {
      name: "Lübecker Straße underground station",
      distance: "100 m",
    },
    {
      name: "Lohmühlenstraße underground station",
      distance: "550 m",
    },
    {
      name: "Lohmühlenstraße",
      distance: "650 m",
    },
    {
      name: "Landwehr",
      distance: "700 m",
    },
  ],
};

export const restaurentCafes = {
  label: "Restaurent & cafes",
  places: [
    {
      name: "Burger Lounge",
      distance: "150 m",
    },
    {
      name: "Sushi Company",
      distance: "150 m",
    },
    {
      name: "Novo2 Restaurant",
      distance: "150 m",
    },
  ],
};

export const naturalBeauty = {
  label: "Natural Beauty",
  places: [
    {
      name: "Außenalster",
      distance: "1.6 km",
    },
    {
      name: "Wandsbeker Gehölz",
      distance: "4.2 km",
    },
    {
      name: "Novo2 Restaurant",
      distance: "150 m",
    },
  ],
};

export const closestAirports = {
  label: "Closest airports",
  places: [
    {
      name: "Hamburg Airport",
      distance: "7 km",
    },
    {
      name: "Hamburg Finkenwerder Airport",
      distance: "12 km",
    },
    {
      name: "Uetersen Airfield",
      distance: "23 km",
    },
  ],
};

export const reviewCategories = [
  {
    label: "Staff",
    value: "7.1",
  },
  {
    label: "Facilities",
    value: "7.8",
  },
  {
    label: "Cleanliness",
    value: "8.3",
  },
  {
    label: "Comfort",
    value: "8.2",
  },
  {
    label: "Value for money",
    value: "8.1",
  },
  {
    label: "Location",
    value: "8.1",
  },
  {
    label: "Free WiFi",
    value: "7.9",
  },
];

export const faq = [
  {
    id: "faq1",
    title: "Does CAB have a restaurent on site?",
    description: "CAB20 has 1 restaurant:",
  },
  {
    id: "faq2",
    title: "What type of can i book at CAB20?",
    description: "Room options at CAB20 include: Single and Double",
  },
  {
    id: "faq3",
    title: "What is there to do at CAB20?",
    description:
      "CAB20 offers the following activities/services (charges may apply): Happy hour",
  },
  {
    id: "faq4",
    title: "What are the check-in and check-out times at CAB20?",
    description:
      "Check-in at CAB20 is from 3:00 PM, and check-out is until 11:00 AM.",
  },
  {
    id: "faq5",
    title: "How much does it cost to stay at CAB20?",
    description:
      "The prices at CAB20 may vary depending on your stay (e.g. dates, hotel's policy etc.). To see prices, enter your dates.",
  },
  {
    id: "faq6",
    title: "How far is CAB20 from the center of Hamburg?",
    description:
      "CAB20 is 1.1 km from the center of Hamburg. All distances are measured in straight lines. Actual travel distances may vary.",
  },
];

export const houseRules = [
  {
    title: "Check-in",
    description: "From 3:00 PM to 12:00 AM",
  },
  {
    title: "Check-out",
    description: "From 12:00 AM to 11:00 AM",
  },
  {
    title: "Cancellation/prepayment",
    description:
      "Cancellation and prepayment policies vary according to accommodations type. Check what conditions might apply to each option when making your selection.",
  },
  {
    title: "Age restriction",
    description: "The minimum age for check-in is 18",
  },
  {
    title: "Pets",
    description: "Pets are not allowed.",
  },
];
