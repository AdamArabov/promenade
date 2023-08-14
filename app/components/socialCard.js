import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome styles

export default function Social() {
  return (
    <div className="flex flex-col items-end justify-center h-screen relative">
      <div className="z-10 absolute bottom-0 right-4 mb-8 md:mb-0 md:relative md:bottom-auto md:right-auto md:flex md:flex-col">
        <a href="https://www.instagram.com/promenadewines/?hl=en" target="_blank" rel="noopener noreferrer" className="mb-2 md:mb-1 flex">
          <i className="fab fa-instagram w-10 h-10 text-gray-200"></i>
        </a>
        <a href="https://www.linkedin.com/company/promenade-wine-spirits/" target="_blank" rel="noopener noreferrer" className="mb-2 md:mb-1 flex">
          <i className="fab fa-linkedin w-10 h-10 text-gray-200"></i>
        </a>
        <a href="https://www.tiktok.com/@promenadewine?lang=en" target="_blank" rel="noopener noreferrer" className="flex">
          <i className="fab fa-tiktok w-10 h-10 text-gray-200"></i>
        </a>
      </div>
    </div>
  );
}

