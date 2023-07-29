import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/components/Layouts/RootLayout";
import Hero from "@/components/UI/Hero";
import Featured from "@/components/UI/Featured";
import Category from "@/components/UI/Category";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <div className="min-h-screen">
      <Hero />
      <Featured products={products} />
      <Category />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:8000/api/v1/products/random");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       products: data,
//     },
//   };
// };

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:8000/api/v1/products/random");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
