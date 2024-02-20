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
  label: "nearByPlaces",
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
      label: "Lübecker Straße underground station",
      distance: "100 m",
    },
    {
      label: "Lohmühlenstraße underground station",
      distance: "550 m",
    },
    {
      label: "Lohmühlenstraße",
      distance: "650 m",
    },
    {
      label: "Landwehr",
      distance: "700 m",
    },
  ],
};

export const restaurentCafes = {
  label: "Restaurent & cafes",
  places: [
    {
      label: "Burger Lounge",
      distance: "150 m",
    },
    {
      label: "Sushi Company",
      distance: "150 m",
    },
    {
      label: "Novo2 Restaurant",
      distance: "150 m",
    },
  ],
};

export const naturalBeauty = {
  label: "Natural Beauty",
  places: [
    {
      label: "Außenalster",
      distance: "1.6 km",
    },
    {
      label: "Wandsbeker Gehölz",
      distance: "4.2 km",
    },
    {
      label: "Novo2 Restaurant",
      distance: "150 m",
    },
  ],
};

export const closestAirports = {
  label: "Closest airports",
  places: [
    {
      label: "Hamburg Airport",
      distance: "7 km",
    },
    {
      label: "Hamburg Finkenwerder Airport",
      distance: "12 km",
    },
    {
      label: "Uetersen Airfield",
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
