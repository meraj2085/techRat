import React from "react";
import ProductCard from "../Shared/ProductCard";

const Featured = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mx-24">
      {[1, 2, 3, 4, 5, 6].map((product) => (
        <ProductCard key={product} />
      ))}
    </div>
  );
};

export default Featured;
