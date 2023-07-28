import React from "react";

const CategoryCard = ({ card }) => {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
      <div className="flex gap-4 align-middle">
        <span className="inline-block rounded bg-teal-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-cpu"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path>
            <path d="M9 9h6v6h-6z"></path>
            <path d="M3 10h2"></path>
            <path d="M3 14h2"></path>
            <path d="M10 3v2"></path>
            <path d="M14 3v2"></path>
            <path d="M21 10h-2"></path>
            <path d="M21 14h-2"></path>
            <path d="M14 21v-2"></path>
            <path d="M10 21v-2"></path>
          </svg>
        </span>
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          {card?.name}
        </h3>
      </div>
    </article>
  );
};

export default CategoryCard;
