import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/components/Layouts/RootLayout";
import Hero from "@/components/UI/Hero";
import Featured from "@/components/UI/Featured";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Featured />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
