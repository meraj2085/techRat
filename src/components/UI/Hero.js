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
                Books that make a{" "}
                <span className="text-teal-600">difference</span>
              </h1>

              <p className="mt-3 text-gray-600 ">
                be the first to knows when our{" "}
                <span className="font-medium text-teal-600">new book</span> is
                out
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-teal-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-teal-500 focus:outline-none focus:bg-teal-500">
                  Subscribe
                </button>
              </div>
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
