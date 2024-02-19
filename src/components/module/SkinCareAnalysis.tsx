import React from 'react';
import skincareAnalysis from '../../../public/assets/images/skincareanalysis.png';
import Image from 'next/image';

function SkinCareAnalysis() {
  return (
    <div className="space-y-3 bg-[#FBEFF2]">
      <p className="pt-5 text-center text-xl font-bold">
        Virtual SkinCare Analysis
      </p>
      <Image alt="skincare Analisis" src={skincareAnalysis} />
      <p className="px-5 py-3 text-sm">
        Looking for a full skincare routine? Our NEW Virtual Skincare Analysis
        Tool evaluates your skin and provides the most personalized
        recommendations.
      </p>
      <div className="item-center flex justify-between px-5 pb-5 text-[#a10550]">
        <button>answer a few questions</button>
        <button className="bg-[#a10550] px-5 py-2 text-white">
          take a selfie
        </button>
      </div>
    </div>
  );
}

export default SkinCareAnalysis;
