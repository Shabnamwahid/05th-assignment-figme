import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white bg-opacity-95 hero-section">
      <div className="container max-w-[1030px] mx-auto">
        <div className="main flex h-[400px] items-center justify-between gap-8">
          <div className="text-container w-1/2 mb-0 flex flex-col gap-2 mr-8 ">
            <h1 className="text-3xl font-bold leading-[1.5] tracking-wider text-left mt-12 ">
              IMPECCABLE CRAFTSMANSHIP AND <span className="block">FINESSE</span>
            </h1>
            <p className="text-xl font-medium leading-[1.5] tracking-tighter text-left ">
              An example of intricate workmanship and detail, elegant necklaces and long and short
               chains form a part of our desirable collection.
            </p>
            <button className="bg-[#A29875] rounded-md cursor-pointer text-center w-[177px] h-[38px]
             text-lg font-medium text-white mt-4 ">
              Explore Now
            </button>
          </div>
          <div className="ml-8" >
            <div className="w-[462px] h-[350px] overflow-hidden ">
              <Image src="/image.jpg" width={250} height={250} alt="person" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
