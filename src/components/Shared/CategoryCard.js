import Image from "next/image";
import React from "react";

const CategoryCard = ({ card }) => {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
      <div className="flex gap-4 align-middle">
        <span className="inline-block rounded bg-blue-100 p-2 text-white">
          <Image src={card?.image_url} width={25} height={25} alt="Img" />
        </span>
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          {card?.name}
        </h3>
      </div>
    </article>
  );
};

export default CategoryCard;
