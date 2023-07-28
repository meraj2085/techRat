import Image from "next/image";
import React from "react";
import DroneImg from "@/assets/images/undraw_drone.png";

const ProductCard = () => {
  return (
    <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg transition hover:shadow-xl min-h-96">
      <Image
        className="object-cover object-center w-full h-56"
        src={DroneImg}
        alt="avatar"
      />

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 ">Title</h1>
        <p className="py-2 text-gray-700 font-semibold">
          Genre: <span className="font-normal">Genre</span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          Publication Date: <span className="font-normal">11/11/11</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
