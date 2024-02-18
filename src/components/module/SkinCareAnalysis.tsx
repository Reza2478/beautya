import React from 'react'
import skincareAnalysis from "../../../public/assets/images/skincareanalysis.png"
import Image from 'next/image'

function SkinCareAnalysis() {
    return (
        <div className="bg-[#FBEFF2] space-y-3">
            <p className='text-xl font-bold text-center pt-5'>Virtual SkinCare Analysis</p>
            <Image alt="skincare Analisis" src={skincareAnalysis} />
            <p className='text-sm px-5 py-3'>
                Looking for a full skincare routine? Our NEW Virtual Skincare Analysis Tool evaluates your skin and provides the most personalized recommendations.
            </p>
            <div className='flex item-center justify-between text-[#a10550] px-5 pb-5'>
                <button>
                    answer a few questions
                </button>
                <button className='bg-[#a10550] px-5 py-2 text-white'>
                    take a selfie
                </button>
            </div>
        </div>
    )
}

export default SkinCareAnalysis