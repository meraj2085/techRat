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
        <h1 className="text-xl font-semibold text-gray-800 ">Product Mini Van</h1>
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
      </div>
    </div>
  );
};

export default ProductDetailsCard;
