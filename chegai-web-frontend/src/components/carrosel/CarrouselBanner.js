import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export default function CarouselBanner() {
  return (
    <Box container sx={{ bgcolor: 'black', color: 'white', px: 5, py: 8, display: 'flex', justifyContent: 'space-between' }}>
      <Stack spacing={3} maxWidth={600}>
        <Typography variant="body2">Lançamentos</Typography>
        <Typography variant="h4" fontWeight="bold">Cupom 10% na<br />primeira compra</Typography>
        <Button variant="text" sx={{ color: 'white', textTransform: 'none', fontWeight: 'bold' }} endIcon={<ArrowForward />}>
          Compre agora
        </Button>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {[0, 1, 2, 3].map(i => (
            <Box key={i} sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: i === 1 ? 'red' : 'grey.500',
            }} />
          ))}
        </Box>
      </Stack>

      <img src="/img/modelo.png" alt="modelo" style={{ height: 300 }} /> {/* troque para seu caminho */}
    </Box>
  );
};