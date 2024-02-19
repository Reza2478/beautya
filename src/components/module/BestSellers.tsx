import Image from 'next/image';
import React from 'react';
import product1 from '../../../public/assets/images/product1.png';
import product2 from '../../../public/assets/images/product2.png';

function BestSellers() {
  return (
    <div className="space-y-4 bg-background px-5 py-3">
      <p className="text-center text-xl font-bold">Our Best Sellers</p>
      <div className="flex items-center justify-between">
        <div className="flex w-36 justify-between">
          <div className="flex flex-col space-y-3">
            <Image alt="product1" src={product1} />
            <p className="text-xs">Beautya Prestige la Mousse Micellaire</p>
            <p className="text-xs">
              Anti-Aging Face Serum, with Purifying French Water Lily
            </p>
          </div>
        </div>
        <div className="flex w-36 justify-between">
          <div className="flex flex-col space-y-3">
            <Image alt="product1" src={product2} />
            <p className="text-xs">Beautya Prestige la Mousse Micellaire</p>
            <p className="text-xs">
              Anti-Aging Face Serum, with Purifying French Water Lily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
