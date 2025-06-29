import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIosNew } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export default function CarouselBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const images = useSelector((state) => state.homepage.catalogo_carrosel);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, [images.length, nextSlide]);

  return (
    <Box
      ref={carouselRef}
      sx={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        bgcolor: 'black',
      }}
    >
      {images.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: `${(index - currentIndex) * 100}%`,
            width: '100%',
            height: '100%',
            transition: 'left 0.6s ease',
          }}
        >
          <Box
            onClick={() => console.log('Oi')}
            sx={{
              width: '100%',
              height: '100%',
              cursor: 'pointer',
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={`Banner ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      ))}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 2,
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
        }}
      >
        <ArrowBackIosNew />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 2,
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Indicadores */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? '#B74F4F' : 'white',
              objectFit: 'cover',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
