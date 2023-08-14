
import Image from "next/image";
import logo from "../assets/logo.png"

export default function Navbar() {
    return (
      <div className="absolute top-0 left-0 p-4 z-10">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={100}
        />
      </div>
    );
  }
  
  
  
  
  
  