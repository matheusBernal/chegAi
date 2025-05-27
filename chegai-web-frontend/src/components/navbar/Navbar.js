import React from 'react';
import {
  AppBar, Toolbar, Typography, Box,
  InputBase, IconButton, Button
} from '@mui/material';
import { Search, FavoriteBorder, ShoppingCart, Person } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { navbar } from '../../constants/Navabar';
import { setPath } from '../../reducer/homepageReducer';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const selected = useSelector((state) => state.homepage.path);

  const handlePath = (value) => {
    dispatch(setPath(value));
    navigate(`/${value}`); // Agora está redirecionando de fato
  };



  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #ccc' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold">
            ChegAí
          </Typography>
        </Box>
        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Box sx={{
            bgcolor: '#f0f0f0', px: 1, borderRadius: 1,
            display: 'flex', alignItems: 'center', width: '250px'
          }}>
            <InputBase placeholder="Pesquisar" size='medium' />
            <Search fontSize="small" sx={{ ml: 6 }} />
          </Box>

          {/* Menu options */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navbar.map((item, index) => {
              const [label, value] = Object.entries(item)[0];
              return (
                <Button
                  key={value}
                  onClick={() => handlePath(value)}
                  sx={{
                    textTransform: 'none',
                    color: 'black',
                    borderBottom: selected === value ? '2px solid black' : 'none',
                    borderRadius: 0,
                    paddingBottom: '4px',
                  }}
                >
                  {label}
                </Button>
              );
            })}

          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <IconButton><FavoriteBorder /></IconButton>
          <IconButton><ShoppingCart /></IconButton>
          <IconButton><Person /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};



