/* eslint-disable react/no-unescaped-entities */
import React from "react";
import DroneImg from "@/assets/images/undraw_drone.png";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="bg-white min-h-[90vh]">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800  lg:text-5xl lg:font-bold">
                Bangladesh's most reliable shop for{" "}
                <span className="text-teal-600">electronics</span>
              </h1>

              <p className="mt-3 text-gray-600 ">
                Leading Computer, Laptop & Gaming PC Retail & Online Shop in{" "}
                <span className="font-medium text-teal-600">Bangladesh</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              src={DroneImg}
              //   width={700}
              className="w-full h-full max-w-md"
              alt="Drone Image"
              style={{ display: "flex", margin: "50px auto" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
