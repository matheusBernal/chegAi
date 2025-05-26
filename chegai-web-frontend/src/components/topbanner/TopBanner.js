import React from 'react';
import { Box, Typography } from '@mui/material';

export default function TopBanner () {
  return (
    <Box sx={{ bgcolor: '#8EE1A9', py: 1, px: 2, display: 'flex', justifyContent: 'center' }}>
      <Typography fontSize={14} color='white'>
        Frete grátis em compras acima de R$299,00 do mesmo lojista!
      </Typography>
    </Box>
  );
};
