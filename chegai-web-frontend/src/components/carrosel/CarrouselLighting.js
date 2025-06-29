import React, { useState } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import CountdownTimer from '../timer/CountdownTimer';
import ProductCard from '../cards/ProductCard';

const mockProducts = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        price: 120,
        oldPrice: 160,
        discount: 40,
        image: '/console.png',
        rating: 5,
        reviews: 88,
    },
    {
        id: 2,
        name: 'AK-900 Wired Keyboard',
        price: 960,
        oldPrice: 1160,
        discount: 35,
        image: '/teclado.png',
        rating: 5,
        reviews: 75,
    },
    {
        id: 3,
        name: 'IPS LCD Gaming Monitor',
        price: 370,
        oldPrice: 400,
        discount: 30,
        image: '/monitor.png',
        rating: 5,
        reviews: 99,
    },
    {
        id: 4,
        name: 'S-Series Comfort Chair',
        price: 375,
        oldPrice: 400,
        discount: 25,
        image: '/chair.png',
        rating: 4.5,
        reviews: 99,
    },
    {
        id: 5,
        name: 'Wireless Gaming Mouse',
        price: 299,
        oldPrice: 380,
        discount: 20,
        image: '/mouse.png',
        rating: 4,
        reviews: 55,
    },
];

export default function CarrouselLighting() {
    const [index, setIndex] = useState(0);
    const visibleCount = 4;
    const maxIndex = Math.max(0, mockProducts.length - visibleCount); // 3 dias

    const handlePrev = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    return (
        <Box sx={{ px: 5, py: 6 }}>
            <Typography variant="h6" sx={{color:'#B74F4F'}} fontWeight="bold">
                Hoje
            </Typography>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={4}
                mb={3}
            >
                <Box display="flex" alignItems="center" gap={2}>
                    <Typography variant="h4" fontWeight="bold">
                        Promoções relâmpago
                    </Typography>
                    <CountdownTimer targetDate="2025-06-05T23:59:59" />
                </Box>
            </Box>


            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <IconButton onClick={handlePrev} disabled={index === 0}>
                    <ArrowBackIosNew />
                </IconButton>

                <Box sx={{ display: 'flex', gap: 2, overflow: 'hidden', width: '100%' }}>
                    {mockProducts.slice(index, index + visibleCount).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Box>

                <IconButton onClick={handleNext} disabled={index >= maxIndex}>
                    <ArrowForwardIos />
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
