// src/layouts/HomeLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import TopBanner from '../components/topbanner/TopBanner';
import SideMenu from '../components/sidemenu/SideMenu';
import { Box } from '@mui/material';

export default function HomeLayout() {


  return (
    <>
      <TopBanner />
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
