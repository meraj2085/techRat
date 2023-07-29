/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import ProductDetailsCard from "@/components/Shared/ProductDetailsCard";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  // const router = useRouter();
  // const productId = router.query.productId;
  return (
    <div className="min-h-screen">
      <div className="flex justify-center pt-5 mx-3 md:mx-0">
        <ProductDetailsCard product={product?.data} />
      </div>
      <div className="mx-3 md:mx-20 mt-16">
        <hr />
        {product?.data?.comments?.map((comment, index) => (
          <article
            key={index}
            className="rounded-xl w-full md:max-w-md mt-10 shadow-sm border border-gray-200 p-4"
          >
            <div className="flex items-center gap-4">
              <img
                alt="Developer"
                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-md font-medium text-gray-800">
                  Claire Mac
                </h3>
                <div className="flow-root">
                  <p className="py-2 leading-none text-md font-medium text-gray-400">
                    {comment}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:8000/api/v1/products/single/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
