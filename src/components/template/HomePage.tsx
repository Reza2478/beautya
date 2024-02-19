import React from 'react';
import Banner from '../module/Banner';
import ProductsCategories from '../module/ProductsCategories';
import SkinCareAnalysis from '../module/SkinCareAnalysis';
import BestSellers from '../module/BestSellers';
import NewIn from '../module/NewIn';
import SpecialOffers from '../module/SpecialOffers';
import OurBrand from '../module/OurBrand';

function HomePage() {
  return (
    <div>
      <Banner />
      <ProductsCategories />
      <SkinCareAnalysis />
      <BestSellers />
      <NewIn/>
      <SpecialOffers/>
      <OurBrand/>
    </div>
  );
}

export default HomePage;
