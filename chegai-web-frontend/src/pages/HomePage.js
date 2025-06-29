// src/pages/HomePage.js
import React from 'react'
import CarouselBanner from '../components/carrosel/CarrouselBanner'
import CarrouselLighting from '../components/carrosel/CarrouselLighting';
import CarrouselIndicationsofMonth from '../components/carrosel/CarrouselIndicationsofMonth';
import BrandsSection from '../components/carrosel/BrandsCarousel';
import HighlightsSection from '../components/carrosel/HighlightsSection';

export default function HomePage() {
  return (
    <>
      <CarouselBanner />
      <CarrouselLighting/>
      <CarrouselIndicationsofMonth/>
      <BrandsSection/>
      <HighlightsSection/>
    </>
  );
}

