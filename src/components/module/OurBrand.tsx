import Image from 'next/image';
import React from 'react';
import ourBrandImage from '../../../public/assets/images/ourbrand.png';

function OurBrand() {
  return (
    <div className="relative flex flex-col bg-background">
      <div className="w-full bg-[#3D021E] pb-40">
        <p className="w-full text-center mt-5 text-xl font-bold text-white">
          Our Brand
        </p>
      </div>

      <div className="absolute top-16 w-full flex items-center justify-center">
        <Image alt="our brand" src={ourBrandImage} />
      </div>
      <div className="flex flex-col items-center space-y-3 pt-20 px-5">
        <p className='text-sm'>
          We believe that beauty thrives in diversity and discovery. Our purpose
          is to expand the way the world sees beauty by empowering the
          Extraordinary in each of us.
        </p>
        <button className="border-2 border-[#A10550] bg-transparent px-4 py-2 text-[#A10550]">
          Discover More
        </button>
      </div>
    </div>
  );
}

export default OurBrand;
