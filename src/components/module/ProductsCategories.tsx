import Image from 'next/image';
import React from 'react';
import gifts from '../../../public/assets/images/gifts&sets.png';
import skincare from '../../../public/assets/images/skincare.png';
import makeup from '../../../public/assets/images/makeup.png';

function ProductsCategories() {
  return (
    <div className="space-y-6 bg-background py-5">
      <p className="text-center text-xl font-bold">Products' Categories</p>

      <div className="flex items-center justify-around text-center text-sm  font-semibold ">
        <div className="space-y-2">
          <Image alt="gifts & sets" src={gifts} />
          <p>Gifts & Sets</p>
        </div>
        <div className="space-y-2">
          <Image alt="skincare" src={skincare} />
          <p>Skin Care</p>
        </div>
        <div className="space-y-2">
          <Image alt="makeup" src={makeup} />
          <p>Make Up</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsCategories;
