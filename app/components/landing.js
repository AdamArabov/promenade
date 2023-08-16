import React from 'react';
import Image from 'next/image';
import Social from './socialCard';
import ButtonComponent from './buttonComponent';


  export default function Landing() {     
  
    return (
      <div className="relative min-h-screen ">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556442281-77c90134c61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Your Image Alt Text"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
      </div>
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
  </h1>
  <p className="text-2xl mt-2">Stay Tuned!</p>
</div>
  
        {/* Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ButtonComponent />
        </div>
      </div>
    );
  }
