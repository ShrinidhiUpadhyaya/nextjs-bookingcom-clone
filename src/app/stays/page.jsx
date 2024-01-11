import React from "react";
import DCombobox from "./components/DCombobox";
import { Button } from "@/components/ui/button";
import '.././globals.css'
const page = () => {
  return (
    <div className="bg-[#003B95] py-16 pb-4 flex flex-col items-center justify-center">
      <div className="w-[60%] flex flex-col">
        <h1 className="text-5xl text-[white] font-bold my-2">Find your next accomodation</h1>
        <h3 className="text-white text-2xl my-2">Find deals on hotels, vacation rentals and more...</h3>
      </div>

      <div className="w-[60%] flex items-center relative top-12 bg-[#FFB700] p-1 rounded-md gap-1">
        <DCombobox className='flex-1 h-full'/>
        <DCombobox className='flex-1'/>
        <DCombobox className='flex-1'/>
        <Button className='py-6 px-8 text-lg flex-0'>Search</Button>
        </div>
    </div>
  );
};

export default page;
