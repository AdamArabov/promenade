import Image from "next/image";
import logo from "../assets/logo.png"

export async function getStaticProps() {
  // Fetch data here
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
} 

export default function Footer() {
    return (
      <div className="text-center">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={100}
        />
      </div>
    );
  }