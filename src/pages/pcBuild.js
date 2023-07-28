import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import React from "react";

const PcBuild = () => {
  const Categories = [
    {
      id: 1,
      name: "CPU / Processor",
      value: "CPU / Processor",
      image_url: "/images/cpu.png",
    },
    {
      id: 2,
      name: "Motherboard",
      value: "Motherboard",
      image_url: "/images/motherboard.png",
    },
    { id: 3, name: "RAM", value: "RAM", image_url: "/images/ram.png" },
    {
      id: 4,
      name: "Power Supply Unit",
      value: "Power Supply Unit",
      image_url: "/images/power.png",
    },
    {
      id: 5,
      name: "Storage Device",
      value: "Storage Device",
      image_url: "/images/storage.png",
    },
    {
      id: 6,
      name: "Monitor",
      value: "Monitor",
      image_url: "/images/monitor.png",
    },
  ];
  return (
    <div className="min-h-screen">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mt-8">
              <ul className="space-y-4">
                {Categories.map((item) => (
                  <li key={item?.id} className="flex items-center gap-4">
                    <div>
                      <Image
                        src={item?.image_url}
                        width={60}
                        height={60}
                        alt="Img"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm text-gray-900">{item?.name}</h3>

                      <div className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <p className="inline">Required</p>
                      </div>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <button className="h-8 w-20 rounded border-gray-200 bg-blue-50 p-0 text-center text-xs text-gray-600 focus:outline-none">
                        Select
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>£250</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>£200</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>

                      <p className="whitespace-nowrap text-xs">
                        2 Discounts Applied
                      </p>
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PcBuild;

PcBuild.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
