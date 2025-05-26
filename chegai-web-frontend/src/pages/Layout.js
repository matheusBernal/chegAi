import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import SideMenu from '../components/sidemenu/SideMenu';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <Box sx={{ flex: 1, padding: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
