import React from "react";
const flightFAQ = [
  {
    id: "ff1",
    title: "How do I find the cheapest flights on Booking.com?",
    description:
      "You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors such as when you are booking and when you want to travel.",
  },

  {
    id: "ff2",
    title: "Can I book one way flight tickets on Booking.com?",
    description:
      "Yes, you can book one way, round trip and multi city flights on our site.",
  },

  {
    id: "ff3",
    title: "How far in advance can I book a flight?",
    description:
      "You can book a flight up to one year before your departure date.",
  },

  {
    id: "ff4",
    title: "Do flights get cheaper closer to departure?",
    description:
      "Generally, flight prices are more likely to increase the closer you get to your flight date.",
  },

  {
    id: "ff5",
    title: "What is a flexible ticket?",
    description:
      "A flexible ticket allows you to change your flight with the same airline company by only paying the fare and tax difference. It can only be used for one confirmed change. You are able to add the flexible ticket when booking your flight.",
  },

  {
    id: "ff6",
    title: "Does Booking.com charge credit card fees?",
    description:
      "No, we dont charge any credit card fees. You can always see exactly what you re paying for in the price breakdown when you review your booking.",
  },
];
const FAQContent = () => {
  return (
    <div className="contentWidth  my-8">
      <h3 className="secondaryTitle">Frequently asked questions</h3>
      <div className="my-4 grid grid-cols-3 gap-4">
        {flightFAQ.map((faq) => (
          <div className="rounded-md border border-[#e7e7e7] p-4">
            <p className="font-bold">{faq.title}</p>
            <p className="mt-2 text-sm">{faq.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQContent;
