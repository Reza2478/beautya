import Image from 'next/image'
import React from 'react'
import gifts from '../../../public/assets/images/gifts&sets.png'
import skincare from "../../../public/assets/images/skincare.png"
import makeup from "../../../public/assets/images/makeup.png"


function ProductsCategories() {
    return (
        <div className='bg-background py-5 space-y-6'>
            <p className='text-xl font-bold text-center'>
                Products' Categories
            </p>

            <div className='flex items-center justify-around font-semibold text-center text-sm'>
                <div className='space-y-2'>
                    <Image alt='gifts & sets' src={gifts} />
                    <p>Gifts & Sets</p>
                </div>
                <div className='space-y-2'>
                    <Image alt='skincare' src={skincare} />
                    <p>Skin Care</p>
                </div>
                <div className='space-y-2'>
                    <Image alt='makeup' src={makeup}/>
                    <p>Make Up</p>
                </div>
            </div>
        </div>
    )
}

export default ProductsCategories