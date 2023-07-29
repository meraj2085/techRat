import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../../redux/features/user/userSlice";

const Header = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // dispatch(setUser("example@example.com"));

  // console.log(user, "testingbro");

  const Categories = [
    {
      id: 1,
      name: "CPU / Processor",
      value: "CPU_Processor",
    },
    {
      id: 2,
      name: "Motherboard",
      value: "Motherboard",
    },
    { id: 3, name: "RAM", value: "RAM" },
    {
      id: 4,
      name: "Power Supply Unit",
      value: "Power_Supply_Unit",
    },
    {
      id: 5,
      name: "Storage Device",
      value: "Storage_Device",
    },
    {
      id: 6,
      name: "Monitor",
      value: "Monitor",
    },
  ];
  return (
    <header className="bg-white mb-6">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/">
              <p className="text-teal-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-sentry"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 18a1.93 1.93 0 0 0 .306 1.076a2 2 0 0 0 1.584 .924c.646 .033 -.537 0 .11 0h3a4.992 4.992 0 0 0 -3.66 -4.81c.558 -.973 1.24 -2.149 2.04 -3.531a9 9 0 0 1 5.62 8.341h4c.663 0 2.337 0 3 0a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-1.84 3.176c4.482 2.05 7.6 6.571 7.6 11.824"></path>
                </svg>
              </p>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12 cursor-pointer">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="dropdown dropdown-hover dropdown-end">
                    <label
                      tabIndex={0}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      Categories
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {Categories.map((category) => (
                        <Link
                          key={category?.id}
                          href={`/featured/${category.value}`}
                        >
                          <li>
                            <p>{category.name}</p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>
                {session?.user?.email && (
                  <li onClick={() => signOut()}>
                    <p className="text-gray-500 transition hover:text-gray-500/75">
                      Sign Out
                    </p>
                  </li>
                )}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {!session?.user?.email && (
                  <button
                    onClick={() => signIn("github")}
                    className="rounded-md inline-flex gap-2 bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-github"
                        width="20"
                        height="20"
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
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </span>
                    Login
                  </button>
                )}
                {session?.user?.email && (
                  <Link href="/pcBuild">
                    <button className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                      PC Build
                    </button>
                  </Link>
                )}
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
