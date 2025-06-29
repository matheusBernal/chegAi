import React, { useState } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import ProductCard from '../cards/ProductCard';

const mockProducts = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        price: 120,
        oldPrice: 0,
        discount: 0,
        image: '/console.png',
        rating: 5,
        reviews: 88,
    },
    {
        id: 2,
        name: 'AK-900 Wired Keyboard',
        price: 960,
        oldPrice: 0,
        discount: 0,
        image: '/teclado.png',
        rating: 5,
        reviews: 75,
    },
    {
        id: 3,
        name: 'IPS LCD Gaming Monitor',
        price: 370,
        oldPrice: 0,
        discount: 0,
        image: '/monitor.png',
        rating: 5,
        reviews: 99,
    },
    {
        id: 4,
        name: 'S-Series Comfort Chair',
        price: 375,
        oldPrice: 0,
        discount: 0,
        image: '/chair.png',
        rating: 4.5,
        reviews: 99,
    },
    {
        id: 5,
        name: 'Wireless Gaming Mouse',
        price: 299,
        oldPrice: 0,
        discount: 0,
        image: '/mouse.png',
        rating: 4,
        reviews: 55,
    },
];

export default function CarrouselIndicationsofMonth() {
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
            <Typography variant="h6" color="error" fontWeight="bold">
                Indicação do mês
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
                        Produtos mais vendidos
                    </Typography>
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
