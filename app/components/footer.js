import React from 'react';
import Image from "next/image";
import logo from "../assets/logo.png"



export default function Footer() {
    return (
      <div className="text-center">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={100}
          className="mx-auto"
        />
        <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 max-w-md font-semibold">
          62-06B Woodhaven Blvd, Queens, NY 11374
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          Tel. 516 850-3857
        </p>
      </div>
      </div>
      
    );
  }