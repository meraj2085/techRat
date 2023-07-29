import React from "react";
import ProductCard from "@/components/Shared/ProductCard";
import RootLayout from "@/components/Layouts/RootLayout";

const FeaturedProduct = ({ products }) => {
  return (
    <section className="bg-white  my-10">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
            Featured <span className="text-teal-600">Products</span>
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Check & Get Your Desired Product!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3 xl:grid-cols-3">
          {/* {isLoading && [1, 2, 3, 4].map((n) => <SkeletonCard key={n} />)} */}
          {products?.data?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;

FeaturedProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:8000/api/v1/products/${params.featuredProductId}`
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
