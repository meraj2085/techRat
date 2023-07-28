/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import ProductDetailsCard from "@/components/Shared/ProductDetailsCard";
import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div className="min-h-screen">
      <div className="flex justify-center pt-5">
        <ProductDetailsCard />
      </div>
      <div className="mx-20 mt-16">
        <hr />
        <div className="my-10 flex justify-between">
          <div className="mt-3">
            <article className="rounded-xl shadow-sm border border-gray-200 p-4 my-3 min-w-[500px]">
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
                      Hi i am comment
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <form>
            <label className="block mb-2 text-lg font-medium text-gray-900 ">
              Your Comment
            </label>
            <textarea
              id="message"
              name="message"
              className="block p-2.5 w-[400px] h-[150px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600"
              placeholder="Write your thoughts here..."
            ></textarea>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="group relative inline-block text-sm font-medium text-teal-600 focus:outline-none active:text-teal-600"
              >
                <span className="absolute inset-0 border border-current rounded-md"></span>
                <span className="block border border-current bg-white px-12 py-3 rounded-md transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
