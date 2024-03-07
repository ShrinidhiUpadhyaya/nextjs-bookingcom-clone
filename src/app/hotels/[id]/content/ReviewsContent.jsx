import React, { forwardRef } from "react";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import DProgressBar from "@/components/DProgressBar";
import ReviewsCarousel from "../components/ReviewsCarousel";

import { reviewCategories } from "../constants";

const ReviewsContent = forwardRef((props, ref) => {
  return (
    <div className="sectionSpacing" ref={ref}>
      <h2 className="mb-2 text-2xl font-semibold">Guest reviews</h2>
      <p className="mb-8 flex gap-2 text-sm">
        <span>Good </span>
        <span>1,356 reviews</span>
      </p>
      <div className="grid grid-cols-3 gap-4">
        {reviewCategories.map((category) => (
          <DProgressBar label={category.label} value={category.value} />
        ))}
      </div>
      <div className="mt-8">
        <p className="font-semibold">See what guests loved the most</p>
        <ReviewsCarousel className="mb-8" />
        <Button className={buttonVariants({ variant: "outline" })}>
          Read all reviews
        </Button>
      </div>
    </div>
  );
});

export default ReviewsContent;
