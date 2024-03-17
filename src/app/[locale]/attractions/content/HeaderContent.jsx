import React from "react";

const HeaderContent = () => {
  return (
    <div className="flexHVCenter w-full flex-col bg-[#003B95] pb-20 pt-16">
      <div className="contentWidth relative">
        {/* <div className="w-[75%]"> */}
        <h1 className="text-3xl font-semibold text-[white] transition xl:text-5xl">
          Attractions, activities and experiences
        </h1>
        <h3 className="mt-2 text-lg text-white md:text-2xl">
          Discover new attractions and experiences to match your interests and
          travel style
        </h3>

        {/* </div> */}
      </div>
    </div>
  );
};

export default HeaderContent;
