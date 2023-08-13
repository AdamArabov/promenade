"use client"


import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.png"

export default function Navbar () {

    return (
        <div className="w-75% ">
             <div className="flex justify-between mt-4 ">
             <div>
                    <Image 
                    src= {logo}
                    alt=''
                    width={300}
                    height={100}
                    />
                </div>
        </div>
        </div>
    )
}