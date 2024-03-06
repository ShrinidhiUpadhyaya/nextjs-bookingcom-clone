import React from "react";
import { Textarea } from "@/components/ui/textarea";

const SpecialRequests = () => {
  return (
    <div className="sectionSpacing space-y-4 rounded-md border p-4">
      <h3 className="text-xl font-semibold">Special requests</h3>
      <p>
        Special requests can't be guaranteed, but the property will do its best
        to meet your needs. You can always make a special request after your
        booking is complete.
      </p>

      <div className="space-y-2">
        <p className="font-semibold">
          Please write your requests in English or German. (optional)
        </p>
        <Textarea placeholder="Type your message here." />
      </div>
    </div>
  );
};

export default SpecialRequests;
