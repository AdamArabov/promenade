"use client"

import Link from "next/link";
import Card from "./card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.png"

export default function Navbar () {
    const router = useRouter();
    const {pathname} = router;
    const activeElement = "flex-1 bg-red-800  rounded-md text-white "
    const nonActiveElement = "flex-1 hover:bg-black hover:text-white rounded-md"
    return (
        <div className="w-75% ">
             <div className="flex justify-between mt-4 ">
             <div>
                    <Image 
                    src= {logo}
                    alt=''
                    width={125}
                    height={100}
                    />
                </div>
            <div className="mt-5 font-semibold">
            <p> 62-06B Woodhaven Blvd, Queens, NY 11374</p>
            <p>Tel. (718) 898-3215</p>
            <p> promenadewine@gmail.com</p>
            </div>
            </div>
        <Card>
            <div className="flex justify-between text-center">
                <Link href={"/"} className={pathname === '/' ? activeElement: nonActiveElement}>Home</Link>
                <Link href={"/about"} className= {pathname === '/about' ? activeElement:nonActiveElement}>About Us</Link>
                < Link href={"/contact" }className= {pathname === '/contact' ? activeElement:nonActiveElement}>Contact Us</Link>
            </div>
        </Card>
        </div>
    )
}