import Image from "next/image";
import React from "react";
import DroneImg from "@/assets/images/undraw_drone.png";

const ProductDetailsCard = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg transition hover:shadow-xl min-h-96">
      <Image
        className="object-cover object-center w-full h-56"
        src={DroneImg}
        alt="avatar"
      />

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 ">
          Product Mini Van
        </h1>
        <p className="py-2 text-gray-700 font-semibold">
          Category: <span className="font-normal">Category</span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          Status: <span className="font-normal">In Stock</span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          Price: <span className="font-normal">£2000</span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          Description:{" "}
          <span className="font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus
            fugiat incidunt soluta ea ut magni eaque quo molestiae rerum quae
            excepturi sapiente aut quibusdam architecto enim asperiores
          </span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          Individual Rating: <span className="font-normal">3/5</span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          Average Rating: <span className="font-normal">4/5</span>
        </p>
        <div className="py-2 text-gray-700 font-semibold">
          Key Features:{" "}
          <div className="font-normal ms-10">
            <p>
              Model: <span className="font-light">DJI Mavic 2 Pro</span>
            </p>
            <p>
              Brand: <span className="font-light">ICH</span>
            </p>
          </div>
        </div>
        <div className="flex justify-end py-5">
          <p class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-teal-500 rounded-xl group">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-teal-600 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-teal-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Add To Builder
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
