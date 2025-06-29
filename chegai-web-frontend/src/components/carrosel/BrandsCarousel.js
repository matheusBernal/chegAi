import React, { useState } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BrandCard from '../cards/BrandCard';

export default function BrandsCarousel() {
  const brands = [
    { id: 1, name: 'Mizuno', logo: '/Mizuno.jpeg' },
    { id: 2, name: 'OLYMPIKUS', logo: '/Olimpykus.png' },
    { id: 3, name: 'ASICS', logo: '/Asics.jpeg' },
    { id: 4, name: 'NIKE', logo: '/Nike.jpeg' },
    { id: 5, name: 'ADIDAS', logo: '/Addidas.jpeg' },
    { id: 6, name: 'PUMA', logo: '/Puma.jpeg' },
    { id: 7, name: 'ADIDAS', logo: '/Addidas.jpeg' },
    { id: 8, name: 'PUMA', logo: '/Puma.jpeg' },
  ];

  const [index, setIndex] = useState(0);
  const visibleCount = 4;
  const maxIndex = brands.length - visibleCount;

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <Box sx={{ px: 5, py: 6 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={5}
        mb={4}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="h4" fontWeight="bold">
            Navegue por marcas
          </Typography>
        </Box>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        justifyContent: 'center' // Centralizar os cards
      }}>
        <IconButton 
          onClick={handlePrev} 
          disabled={index === 0}
          sx={{ 
            position: 'absolute', 
            left: 0,
            zIndex: 1,
            backgroundColor: 'white',
            boxShadow: 3,
            '&:hover': { backgroundColor: '#f5f5f5' }
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          width: '100%',
          maxWidth: '90%', // Deixar espaço para os botões
          overflow: 'hidden',
        }}>
          {brands
            .slice(index, index + visibleCount)
            .map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
        </Box>

        <IconButton 
          onClick={handleNext} 
          disabled={index >= maxIndex}
          sx={{ 
            position: 'absolute', 
            right: 0,
            zIndex: 1,
            backgroundColor: 'white',
            boxShadow: 3,
            '&:hover': { backgroundColor: '#f5f5f5' }
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" color="error">
          Ver mais
        </Button>
      </Box>
    </Box>
  );
}