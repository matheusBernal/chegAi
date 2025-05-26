import React from 'react'
import Navbar from '../components/navbar/Navbar'
import TopBanner from '../components/topbanner/TopBanner'
import SideMenu from '../components/sidemenu/SideMenu'
import CarouselBanner from '../components/carrosel/CarrouselBanner'
import { Box } from '@mui/material';


export default function HomePage() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <CarouselBanner />
      </Box>
    </>
  )
}
