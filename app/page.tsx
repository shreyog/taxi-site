"use client"
import Link from "next/link"
import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarDays } from 'lucide-react';
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import CustomButton from "@/components/custom-button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Taxi1 from "@/assets/taxi_1.jpg"
import Taxi2 from "@/assets/taxi_2.jpg"
import HeroImg from "@/assets/Hero-Goa-Express-Taxi.png"

import { tours } from "./tour";

const FormSchema = z.object({
  pickupDate: z.date({
    required_error: "Pick Up date is required.",
  }),
  pickupLocation: z.string({ required_error: "Pick Up location is required." }),
  dropOffLocation: z.string({ required_error: "Drop Off location is required." })
})

const LOCATIONS = [
  "Aquada",
  "Ashvem",
  "Assagao",
  "Candolim",
  "Goa Airport, Dabolim",
  "Anjuna",
  "Arambol",
  "Arpora",
  "Baga",
  "Calangute",
  "Goa Airport",
  "Karmali Railway Station",
  "Madgaon Railway Station",
  "Mandrem",
  "Mapusa",
  "Morjim",
  "Panjim",
  "Porvorim",
  "Sinquerim",
  "Siolim",
  "Thivim Railway Station",
  "Vagator",
  "Vasco Da Gama Railway Station",
  "Mumbai",
  "Kerim",
  "Manohar International Airport",
  "Mapusa bus stand",
  "Mopa Airport",
  "Mopa airport taxi cab service",
  "Nagoa",
  "Nerul",
  "Panjim bus stand",
  "Pernem",
  "Pernem railway station",
  "Saligao",
  "Sinquerim",
  "Vagator"
]

export default function IndexPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })


  return (
    <>
      <section className="bg-[#F5EBD3]">
        {/* <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>  */}
        <div className="container flex flex-col sm:flex-row items-center gap-16 pb-6 pt-6 ">
          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">Just Click, Pick, and Go: Local Rides Made Easy
            </h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(() => { })} >

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="pickupLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Pickup Location</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Pickup Location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {LOCATIONS.map((loc) => <SelectItem value={loc}>{loc}</SelectItem>)}

                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dropOffLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Drop-Off Location</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Drop-Off Location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {LOCATIONS.map((loc) => <SelectItem value={loc}>{loc}</SelectItem>)}

                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pickupDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="font-bold">Pickup Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl className="w-full">
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full h-12 pl-3 text-left font-normal",
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span className="">Pick a date</span>
                                )}
                                <CalendarDays className="ml-auto h-12 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <CustomButton className="mt-6">Book Now</CustomButton>
                {/* <Button type="submit" className="mt-6 bg-[#FFC700] border-0 rounded-sm cursor-pointer font-sans text-lg font-semibold leading-8 px-5 py-6 align-middle text-center select-none  text-black hover:bg-[#FFD233]">Book Now</Button> */}
                {/* <button className="button-59 inline-flex items-center justify-center border-2 border-black bg-white text-black font-sans text-sm font-semibold h-12 px-4 align-middle leading-6 min-w-[140px] transition duration-300 ease-in-out cursor-pointer hover:border-blue-500 hover:text-blue-500 focus:text-gray-900 active:border-blue-500 active:text-blue-500" role="button">
  Button 59
</button>
<button className="button-76 bg-[#cf245f] bg-gradient-to-br from-yellow-400 via-red-500 to-pink-600 border-0 rounded-sm text-white cursor-pointer font-sans text-lg font-semibold leading-8 px-5 py-4 align-middle text-center select-none" role="button">
  Button 76
</button> */}
              </form>
            </Form>
          </div>
          <div className="w-full sm:w-1/2">
            <Image
              src={HeroImg} // The path to your image
              alt="Hero Image" // A short description of the image for accessibility purposes
              width={5000} // Desired width of the image in pixels
              height={5000} // Desired height of the image in pixels
              layout="responsive" // This makes the image scale nicely to the parent element's width
              style={{ borderRadius: "0.25rem" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-black w-full">
        <div className="container flex flex-col items-center gap-16 pb-8 pt-6 md:py-44">
          <div className=" flex justify-center w-full">
            <h1 className="text-3xl font-bold text-center text-white">
              <span className="underlined underline-mask uppercase text-5xl">Special Offers</span><br /><br />
              Day Tour Taxi Bookings in Goa
            </h1>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-x-12 gap-y-12">
            {tours.map((tour) => <div className=" rounded-md relative border-4 border-white">
              <div className="overflow-hidden">
                <Image
                  src={tour?.mediaUrl || Taxi2} // The path to your image
                  alt="Description of the image" // A short description of the image for accessibility purposes
                  width={500} // Desired width of the image in pixels
                  height={300} // Desired height of the image in pixels
                  className={cn(
                    "h-auto w-auto object-cover transition-all hover:scale-105",
                    "aspect-square"
                  )}
                />
              </div>
              <div className="bg-white bottom-0 left-0 w-full p-4"
              // style={{ boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px" }}
              >
                <h5 className="font-extrabold  text-2xl text-black">{tour.title}</h5>
                <h5 className="font-extrabold  text-2xl text-black">from ₹{tour.price}* </h5>
                <CustomButton className="mt-2">Book Now</CustomButton>
                {/* <Button type="submit" className="mt-1 button-76 bg-[#cf245f] bg-gradient-to-br from-yellow-400 via-red-500 to-pink-600 border-0 rounded-sm text-white cursor-pointer font-sans text-lg font-semibold leading-8 px-5 py-6 align-middle text-center select-none">Book Now</Button> */}
              </div>
            </div>)}

          </div>
        </div>
      </section>

      <section className="container  flex flex-col sm:flex-row items-center gap-16 pb-8 pt-6 md:py-44 min-h-[75%] max-h-[75%]">

        <div className="w-full sm:w-1/2">
          {/* <Image
            src={Taxi2} // The path to your image
            alt="Description of the image" // A short description of the image for accessibility purposes
            width={500} // Desired width of the image in pixels
            height={300} // Desired height of the image in pixels
            layout="responsive" // This makes the image scale nicely to the parent element's width
            style={{ borderRadius: "0.25rem" }}
          /> */}
          <div className="overflow-hidden rounded-md">
            <Image
              src={Taxi2} // The path to your image
              alt="Description of the image" // A short description of the image for accessibility purposes
              width={500} // Desired width of the image in pixels
              height={300} // Desired height of the image in pixels
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                "aspect-square"
              )}
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col space-y-8">
          <div>
            <h5 className="font-medium">Pick-Up & Drop</h5>
            <p>
              Enjoy smooth pick-ups and stress-free drop-offs across Goa, from Mopa/ Dabolim Airport to hidden gems Travel with ease, experience Goa fully..</p>
          </div>
          <div>
            <h5 className="font-medium">Full-day taxi rental</h5>
            <p>
              For personalized travel freedom, opt for our day-long taxi hire, allowing you to explore at your pace and comfort.
            </p>
          </div>
          <div>
            <h5 className="font-medium">Touring attractions</h5>
            <p>
              Experience Goa's unforgettable sights and attractions with our expert drivers guiding you every step of the way.
            </p>
          </div>
          {/* <h1 className="text-3xl sm:text-5xl font-bold mb-6">Why choose us?
          </h1> */}
          {/* <a className="group relative flex shrink-0 flex-col items-start justify-end rounded border bg-cover p-3 text-primary bg-secondary border-none aspect-[1/1] sm:aspect-[1/0.92] w-[310px] sm:w-[342px] !space-y-1 !pl-4 !pr-[29px] !py-[27px] shadow-xl shadow-black/20"
            href="/docs/concepts/security">
            <div className="pointer-events-none absolute inset-0 z-1">

            </div>
            <h3 className="relative z-1 font-medium !leading-tight sm:text-xl">
              <span className="text-base font-semibold"></span>
            </h3>
            <p className="relative z-1 text-sm sm:text-base">
              <span className="block pb-2 text-sm text-secondary">

              </span>
            </p>
          </a> */}
        </div>
      </section>

      {/* <section className="container flex flex-col items-center gap-16 pb-8 pt-6 md:py-44 min-h-[75%] max-h-[75%]">
        <h1 className="text-4xl font-extrabold">Call Now for Booking</h1>
        <Button type="submit" className="mt-1 button-76 bg-[#cf245f] bg-gradient-to-br from-yellow-400 via-red-500 to-pink-600 border-0 rounded-sm text-white cursor-pointer font-sans text-lg font-semibold leading-8 px-5 py-6 align-middle text-center select-none">Book Now</Button>
      </section> */}
    </>
  )
}
