import React from 'react';
import Footer from "./footer";





export default function About() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4 text-sm text-gray-600 max-w-md text-center">
        We are a retail wine and Spirits company offering a unique and personalized experience to our clients. When you shop at Promenade, expect exceptional customer service, carefully curated wine selections, home delivery, and educational content. Visit us in person or order online today!
      </p>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}