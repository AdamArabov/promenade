"use client"
import { useState } from 'react';
import Image from 'next/image';
import Social from './socialCard';


export const config = { amp: 'hybrid' };


export default function Landing() {
    const [isTextAreaVisible, setTextAreaVisible] = useState(false);

    const handleButtonClick = () => {
      setTextAreaVisible(true);
    };
  
    return (
        <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1556442281-77c90134c61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Your Image Alt Text"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Social Icons */}
      <div className="absolute top-4 right-4">
        <Social />
      </div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-helvetica-neue">
        <h1 className="text-2xl">
          Our New Site Is
          <span className="block text-6xl font-extrabold leading-tight">COMING SOON</span>
          <p className="text-2xl mt-2">Stay Tuned</p>
        </h1>
        {!isTextAreaVisible && (
          <button
            className="mt-4 text-white border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out px-4 py-2 rounded"
            onClick={handleButtonClick}
          >
            Show More
          </button>
        )}
        {isTextAreaVisible && (
          <div className="mt-4">
            <textarea className="w-full h-32 px-4 py-2 border border-gray-300"></textarea>
          </div>
        )}
      </div>
    </div>
      );
}