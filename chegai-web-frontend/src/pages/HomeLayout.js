// src/layouts/HomeLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import TopBanner from '../components/topbanner/TopBanner';
import SideMenu from '../components/sidemenu/SideMenu';
import { Box } from '@mui/material';

export default function HomeLayout() {
  const location = useLocation();

  // Mostrar o TopBanner apenas nas rotas /home e /products
  const showTopBanner = ['/home', '/products'].includes(location.pathname);

  return (
    <>
      {showTopBanner && <TopBanner />}
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <Box sx={{ flex: 1, p: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
