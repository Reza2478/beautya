import Image from 'next/image';
import React from 'react';
import offerImage from '../../../public/assets/images/offer.png';

function SpecialOffers() {
  return (
    <div className="flex flex-col items-center space-y-4 bg-background py-8">
      <p className="text-center text-xl font-bold">Special Offers</p>
      <Image alt="offer" src={offerImage} className="w-full" />
      <div className="px-5">
        <p className="font-semibold">Mother's Day is coming!</p>
        <p className="text-sm">
          visit your local Beautya branches to find out more about our special
          offers in make up and skincare products.{' '}
        </p>
      </div>

      <button className="border-2 border-[#A10550] bg-transparent px-4 py-2 text-[#A10550]">
        find branches
      </button>
    </div>
  );
}

export default SpecialOffers;
