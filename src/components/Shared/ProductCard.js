import Image from "next/image";
import React from "react";
import DroneImg from "@/assets/images/undraw_drone.png";
import air_support from "@/assets/images/air_support.png";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product?._id}`}>
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg transition hover:shadow-xl min-h-96">
        <Image
          className="object-cover object-center w-full h-56"
          src={air_support}
          alt="avatar"
        />
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 ">
            {product?.name}
          </h1>
          <p className="py-2 text-gray-700 font-semibold">
            Category: <span className="font-normal">{product?.category_name}</span>
          </p>
          <p className="py-2 text-gray-700 font-semibold">
            Status: <span className="font-normal">{product?.status}</span>
          </p>
          <p className="py-2 text-gray-700 font-semibold">
            Price: <span className="font-normal">£{product?.price}</span>
          </p>
          <p className="py-2 text-gray-700 font-semibold">
            Rating:{" "}
            <span className="font-normal">{product?.averageRating}/5</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
