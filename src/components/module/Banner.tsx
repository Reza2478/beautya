import Image from 'next/image';
import React from 'react';
import bannerMobile from '../../../public/assets/images/banner-mobile.png';

function Banner() {
  return (
    <div className="relative">
      <Image alt="banner-mobile" src={bannerMobile} />
      <div className="absolute left-0   top-0 h-full w-full bg-black opacity-40" />
      <div className="absolute bottom-8 flex w-full flex-col items-center justify-end space-y-3 opacity-100">
        <p className="text-xl font-semibold text-white">
          Unlock Your Natural Glow
        </p>
        <button className="border-2 border-white bg-transparent px-6 py-3 text-white">
          Know More
        </button>
      </div>
    </div>
  );
}

export default Banner;
