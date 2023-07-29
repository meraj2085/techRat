import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import air_support from "@/assets/images/air_support.png";

const PcBuild = () => {
  const Categories = [
    {
      id: 1,
      name: "CPU / Processor",
      value: "CPU_Processor",
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
      value: "Power_Supply_Unit",
      image_url: "/images/power.png",
    },
    {
      id: 5,
      name: "Storage Device",
      value: "Storage_Device",
      image_url: "/images/storage.png",
    },
    {
      id: 6,
      name: "Monitor",
      value: "Monitor",
      image_url: "/images/monitor.png",
    },
  ];
  const reduxState = useSelector((state) => state.user);
  const handleBuildComplete = () => {
    if (reduxState?.products?.length === 6) {
      toast.success("Build Completed");
      return;
    } else {
      toast.error("Please select all components");
    }
  };
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
                      <Link href={`featured/${item?.value}`}>
                        <button className="h-8 w-20 rounded border-gray-200 bg-blue-50 p-0 text-center text-xs text-gray-600 focus:outline-none">
                          Select
                        </button>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <div className="space-y-0.5 text-sm text-gray-700 flex flex-col gap-2">
                    {reduxState.products.map((item) => (
                      <div
                        key={item?._id}
                        className="flex items-center gap-4 justify-between border rounded-md px-4 py-2"
                      >
                        <div>
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-affiliate-filled"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path
                              d="M18.5 3a2.5 2.5 0 1 1 -.912 4.828l-4.556 4.555a5.475 5.475 0 0 1 .936 3.714l2.624 .787a2.5 2.5 0 1 1 -.575 1.916l-2.623 -.788a5.5 5.5 0 0 1 -10.39 -2.29l-.004 -.222l.004 -.221a5.5 5.5 0 0 1 2.984 -4.673l-.788 -2.624a2.498 2.498 0 0 1 -2.194 -2.304l-.006 -.178l.005 -.164a2.5 2.5 0 1 1 4.111 2.071l.787 2.625a5.475 5.475 0 0 1 3.714 .936l4.555 -4.556a2.487 2.487 0 0 1 -.167 -.748l-.005 -.164l.005 -.164a2.5 2.5 0 0 1 2.495 -2.336z"
                              strokeWidth="0"
                              fill="currentColor"
                            ></path>
                          </svg> */}
                          <Image
                            className="object-cover object-center"
                            src={air_support}
                            width={80}
                            height={80}
                            alt="avatar"
                          />
                        </div>
                        <div className="text-end">
                          <p className=" text-gray-900 text-lg">{item?.name}</p>
                          <p>Price: £{item?.price}</p>
                          <p>Category: {item?.category_name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={handleBuildComplete}
                      disabled={reduxState?.products?.length !== 6}
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Complete Build
                    </button>
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
