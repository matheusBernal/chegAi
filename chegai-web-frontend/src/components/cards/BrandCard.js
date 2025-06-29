import React from 'react';
import { Box, Typography} from '@mui/material';

export default function BrandCard({ brand }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        height: '120px',
        minWidth: '115px',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid #DB4444'
        }
      }}
    >
      {brand.logo ? (
        <Box
          component="img"
          src={brand.logo}
          alt={brand.name}
          sx={{ height: 40, width: 'auto', mb: 1 }}
        />
      ) : (
        <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', mb: 1 }}>
          {brand.name.substring(0, 1)}
        </Box>
      )}
      
      <Typography variant="body1" sx={{ fontWeight: 300, color: '#333' }}>
        {brand.name}
      </Typography>
    </Box>
  );
};

