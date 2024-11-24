"use client";
import Image from "next/image";
import { useState } from "react";
import * as React from "react";
//import { Moon, Sun } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import Header from "@/components/header";
//import { Button } from "@/components/ui/button";
/*import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";*/

type PricingData = {
  views: string;
  price: number;
};

{
  /*export function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="flex-row justify-end items-end p-4 bg-bluebg dark:bg-gray-900">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}*/
}

export default function Home() {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const pricingData: PricingData[] = [
    { views: "10K", price: 8 },
    { views: "50K", price: 12 },
    { views: "100K", price: 16 },
    { views: "500K", price: 24 },
    { views: "1M", price: 36 },
  ];

  const getPriceAndViews = (value: number): PricingData => {
    if (value <= 20) return pricingData[0];
    if (value <= 40) return pricingData[1];
    if (value <= 60) return pricingData[2];
    if (value <= 80) return pricingData[3];
    return pricingData[4];
  };

  const { views, price } = getPriceAndViews(sliderValue);
  const finalPrice = isYearly ? (price * 0.75).toFixed(2) : price.toFixed(2);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
        {/* Global Header */}

        {/* Main Content */}
        <div className=" bg-bluebg h-screen">
          <div className="flex relative">
            <Image src="bg-pattern.svg" height={800} width={1450} alt="bg" />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="font-font1 text-greyd font-extrabold text-2xl">
                Simple, traffic-based pricing
              </div>

              <div className="p-2 text-grey font-font1 text-sm font-semibold">
                Sign-up for our 30-day trial. No credit card required.
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <Image
                    src="pattern-circles.svg"
                    height={100}
                    width={122}
                    alt="circles"
                  />
                </div>
              </div>
            </div>
            <div>
              <Header />
            </div>

            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-[350px] md:w-[500px]">
                <div className="flex justify-between items-center mb-8">
                  <p className="uppercase text-sm font-semibold font-font1 text-grey tracking-wide">
                    {views} pageviews
                  </p>
                  <p className="text-4xl font-extrabold font-font1 text-gray-800 dark:text-gray-100">
                    ${finalPrice}{" "}
                    <span className="font-font1 font-semibold text-sm text-grey dark:text-gray-300">
                      / {isYearly ? "year" : "month"}
                    </span>
                  </p>
                </div>
                <div className="relative mb-8">
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="range range-accent w-full h-2 shadow-xl shadow-cyand bg-grey rounded-lg p-2 appearance-none cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold font-font1 text-grey dark:text-gray-300">
                      Monthly Billing
                    </span>
                    <div
                      onClick={() => setIsYearly(!isYearly)}
                      className={`relative w-12 h-6 cursor-pointer ${
                        isYearly ? "bg-cyand" : "bg-grey"
                      } rounded-full`}
                    >
                      <div
                        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                          isYearly ? "translate-x-6" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm font-font1 text-grey dark:text-gray-300 font-semibold">
                    Yearly billing
                  </p>
                  <p className="pl-2 pr-2 text-xs font-font1 font-semibold bg-redbg rounded-md text-orange-500">
                    25% discount
                  </p>
                </div>

                <div className="flex">
                  <div className="flex-row">
                    <ul className="space-y-2 mb-8 text-sm font-font1 font-semibold text-grey dark:text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-cyand">✔</span>
                        <span>Unlimited websites</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-cyand">✔</span>
                        <span>100% data ownership</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-cyand">✔</span>
                        <span>Email reports</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-row text-center justify-end items-end ml-24 mt-4">
                    <button
                      type="button"
                      className="text-gray-300 bg-greyd hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-cyand font-font1 font-semibold rounded-full text-sm px-10 py-2.5 text-center me-2 mb-2 dark:bg-grey dark:hover:bg-gray-900 dark:focus:ring-cyan"
                    >
                      Start my trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
