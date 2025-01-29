"use client"

import React from "react"
import Image from "next/image"
import Header from "@/components/Header"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Main content */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-8 md:py-0">
        {/* Left side content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6 mb-8 md:mb-0">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-center md:text-left">
            Welcome To Our Website
          </h1>
          <p className="text-lg md:text-xl lg:text-[32px] max-w-[571px] text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard
          </p>
          <button className="text-white bg-black text-lg md:text-xl lg:text-[24px] px-4 py-2 w-full md:w-[180px] h-[52px]">
            Contact Us
          </button>
        </div>
        {/* Right side image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/figma_image.jpeg"
            alt="Figma image"
            width={502}
            height={465}
            className="w-full max-w-[502px] h-auto"
          />
        </div>
      </div>
    </div>
  )
}

