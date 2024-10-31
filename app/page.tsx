import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="h-screen">    
      <Header />
      {/* Parent div container */}
      <div className="flex h-[80%]">
        {/* left side of child div container */}
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
          {/* heading og website on left */}
          <h1 className="text-[44px] font-bold">Welcome To Our Website</h1>
          <p className="text-[32px] w-[571px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
          <br />
          <button className="text-white bg-black text-[24px] font-bold px-4 w-[180px] h-[52px]">
          Contact Us
          </button>
        </div>
        {/* Right side of child div container */}
        <div className="w-1/2 flex justify-center items-center">
          <Image src="/figma_image.jpeg" alt="Figma image" width={502} height={465} />
        </div>
      </div>
    </div>
  );
};
