import React from 'react';
import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {home} from '../../constants/Home';
import { useSelector } from 'react-redux';
import { community } from '../../constants/Community';
import {blog} from '../../constants/Blog';
import { products } from '../../constants/Products';


export default function SideMenu () {
  const currentPath = useSelector((state) => state.homelayout.path);
  const isHome = currentPath === 'home';
  const isProducts = currentPath === 'products';
  const isCommunity = currentPath === 'community';
  const isBlog = currentPath === 'blog';
  const menuItems = isHome ? home : isProducts ? products : isCommunity ? community : isBlog ? blog : [];

  return (
    <Box position='static' sx={{ width: 200, borderRight: '1px solid #ccc', pt: 2 }}>
      <List>
        {menuItems.map((item) => (
          item === "Woman’s Fashion" || item === "Men’s Fashion"|| item === "Filtro" ? (
            <ListItemButton key={item}>
              <ListItemText primary={item} />
              <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
            </ListItemButton>
          ) : (
            <ListItemButton key={item}>
              <ListItemText primary={item} />
            </ListItemButton>
          )
        ))}
      </List>
    </Box>
  );
};