"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Grip, Heart, Share2, MapPin, Utensils, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { hotelOverviewOptions } from "@/lib/hotelFiltersConstants";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "@/components/ui/use-toast";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .max(3),
});

function onSubmit(data) {
  console.log("OnSubmit function called", data);
}



export default function page() {
  const formRef = useRef();

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function handleButtonClick() {
    console.log('Handlebutton click')
    form.handleSubmit(onSubmit)();
  }


  return (
    <div className="flex justify-center">
      <div className="2xl:w-[55%] xl:w-[75%] lg:w-[90%] w-[95%] flex flex-col gap-2">
        <div className="flex gap-4">
          <div className="min-w-[25%] flex items-center justify-center bg-[#EBF3FF] text-[#0071c2]">
            We Match Price
          </div>
          <div className="flex relative w-full">
            {hotelOverviewOptions.map((option) => (
              <div className="p-4 hover:text-[#006CE4] hover:bg-accent cursor-pointer">
                {option.label}
              </div>
            ))}

            <Separator className="absolute w-full bottom-0" />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-semibold">CAB</p>
            <p className="flex">
              <MapPin className="text-[#006CE4]" />
              Location
            </p>
          </div>
          <div className="text-[#006CE4] flex gap-6 items-center">
            <Heart />
            <Share2 />
            <Button>Reserve</Button>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 max-w-[50%] relative">
            <Image
              src="/hotels/hotel1.png"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 relative  h-full flex-1">
            <div className=" relative h-60 w-full">
              <Image
                src="/hotels/hotel2.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className=" relative h-60 w-full">
              <Image
                src="/hotels/hotel3.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="relative h-60 w-full">
              <Image
                src="/hotels/hotel4.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="relative h-60 w-full">
              <Image
                src="/hotels/hotel5.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="flex gap-2 absolute right-6 bottom-6 bg-white p-2 rounded-lg text-sm items-center font-medium">
              <Grip />
              Show all photos
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-8">
          <div className="text-sm leading-8 font-light">
            <p>
              You're eligible for a Genius discount at Sonnenhotel Weingut
              Römmert! To save at this property, all you have to do is sign in.
              Situated in Volkach, 30 km from Wuerzburg Central Station,
              Sonnenhotel Weingut Römmert features accommodation with a fitness
              centre, free private parking, a terrace and a restaurant.
              Featuring a bar, the 4-star hotel has air-conditioned rooms with
              free WiFi, each with a private bathroom. The hotel has an indoor
              pool, sauna and room service. At the hotel, every room is equipped
              with a wardrobe. Rooms include a desk and a flat-screen TV, and
              some units at Sonnenhotel Weingut Römmert have a balcony. At the
              accommodation the rooms are fitted with bed linen and towels.
              Guests at Sonnenhotel Weingut Römmert will be able to enjoy
              activities in and around Volkach, like cycling. Congress Centre
              Wuerzburg is 30 km from the hotel, while Würzburg Cathedral is 30
              km from the property. The nearest airport is Nuremberg Airport, 82
              km from Sonnenhotel Weingut Römmert.
            </p>
          </div>

          <div className="bg-[#EBF3FF] p-4 flex flex-col gap-2 min-w-[30%]">
            <p className="font-semibold">Property highlights</p>
            <p className="text-sm font-semibold mt-2">
              Perfect for a 10-night stay
            </p>
            <p className="text-sm font-light">
              Top Location: Highly rated by recent guests (8.5)
            </p>
            <p className="text-sm font-semibold mt-2">Rooms with:</p>
            <p className="text-sm font-light">Quiet street view</p>
            <p className="text-sm font-light">
              Free private parking available at the hotel
            </p>
            <Button className="mt-8">Reserve</Button>
          </div>
        </div>

        <Separator />

        <div>
          <p>All available rooms</p>

          <div className="flex gap-4">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#EBF3FF] font-bold">
                  <TableHead>Type</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Your choices</TableHead>
                  <TableHead className="text-right">Select room</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="text-xs">
                      <p className="text-lg font-semibold my-2 mb-4">
                        Apartment
                      </p>
                      <p className="flex gap-1 items-center">
                        <Check size={14} />
                        57m2
                      </p>

                      <p className="flex gap-1 items-center">
                        <Check size={14} />
                        Private Kitchen
                      </p>

                      <p className="flex gap-1 items-center">
                        <Check size={14} />
                        Private Bathroom
                      </p>

                      <p className="flex gap-1 items-center">
                        <Check size={14} />
                        Flat-screen TV
                      </p>

                      <p className="flex gap-1 items-center">
                        <Check size={14} />
                        Coffee Machine
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    <p className="text-lg">$ 2,198</p>
                    <p className="text-xs font-light">
                      Includes taxes and charges
                    </p>
                  </TableCell>
                  <TableCell className="text-[#008234]">
                    <p className="flex gap-2">
                      <Utensils />
                      Breakfast included
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <Check />
                      Free cancellation before 8 Februrary 2024
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <Check />
                      No prepayment needed - pay at the property
                    </p>
                  </TableCell>
                  <TableCell className="text-right">
                    <Form {...form} >
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                      >
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="0" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0">0</SelectItem>
                                  <SelectItem value="1">1</SelectItem>
                                  <SelectItem value="2">2</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Button className="mt-[5%]" type="submit" onClick={handleButtonClick}>
              Reserve
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
