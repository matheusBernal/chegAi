import React from 'react';
import { Box, Grid, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const HighlightsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const highlights = [
    {
      title: "Roupas",
      description: "Melhores marcas autorais",
      buttonText: "Comprar agora",
      color: "#00C853"
    },
    {
      title: "Women's Collections",
      description: "Coleções femininas em destaque que lhe darão outra vibe.",
      buttonText: "Comprar agora",
      color: "#DB4444"
    },
    {
      title: "Acessórios",
      description: "Realce seu estilo",
      buttonText: "Comprar agora",
      color: "#2962FF"
    },
    {
      title: "Perfume",
      description: "Diversas fragrâncias",
      buttonText: "Comprar agora",
      color: "#FFAB00"
    }
  ];

  // Componente estilizado para cada card
  const HighlightCard = styled(Box)(({ theme, color }) => ({
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    height: '100%',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${color} 100%)`,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
    }
  }));

  return (
    <Container sx={{ py: 8 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 'bold', 
          textAlign: 'center', 
          mb: 6,
          color: '#333'
        }}
      >
        Confira nossos destaques
      </Typography>
      
      <Grid container spacing={3}>
        {/* Cards maiores - lado esquerdo */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3} sx={{ height: '100%' }}>
            <Grid item xs={12}>
              <HighlightCard color="#DB4444">
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 700, 
                    color: 'white', 
                    mb: 1,
                    fontSize: isMobile ? '1.5rem' : '1.8rem'
                  }}
                >
                  {highlights[1].title}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: 'white', 
                    mb: 3,
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  {highlights[1].description}
                </Typography>
                <Button 
                  variant="contained" 
                  sx={{ 
                    alignSelf: 'flex-start', 
                    backgroundColor: 'white',
                    color: '#DB4444',
                    fontWeight: 600,
                    '&:hover': { 
                      backgroundColor: '#f0f0f0',
                      color: '#C23333' 
                    }
                  }}
                >
                  {highlights[1].buttonText}
                </Button>
              </HighlightCard>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <HighlightCard color="#00C853">
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    color: 'white', 
                    mb: 1,
                    fontSize: isMobile ? '1.1rem' : '1.3rem'
                  }}
                >
                  {highlights[0].title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white', 
                    mb: 2,
                    fontSize: isMobile ? '0.8rem' : '0.9rem'
                  }}
                >
                  {highlights[0].description}
                </Typography>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ 
                    alignSelf: 'flex-start', 
                    backgroundColor: 'white',
                    color: '#00C853',
                    fontWeight: 600,
                    '&:hover': { 
                      backgroundColor: '#f0f0f0',
                      color: '#00B84A' 
                    }
                  }}
                >
                  {highlights[0].buttonText}
                </Button>
              </HighlightCard>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <HighlightCard color="#2962FF">
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    color: 'white', 
                    mb: 1,
                    fontSize: isMobile ? '1.1rem' : '1.3rem'
                  }}
                >
                  {highlights[2].title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white', 
                    mb: 2,
                    fontSize: isMobile ? '0.8rem' : '0.9rem'
                  }}
                >
                  {highlights[2].description}
                </Typography>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ 
                    alignSelf: 'flex-start', 
                    backgroundColor: 'white',
                    color: '#2962FF',
                    fontWeight: 600,
                    '&:hover': { 
                      backgroundColor: '#f0f0f0',
                      color: '#2556E5' 
                    }
                  }}
                >
                  {highlights[2].buttonText}
                </Button>
              </HighlightCard>
            </Grid>
          </Grid>
        </Grid>
        
        {/* Card grande - lado direito */}
        <Grid item xs={12} md={4}>
          <HighlightCard color="#FFAB00" sx={{ height: '100%' }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                color: 'white', 
                mb: 1,
                fontSize: isMobile ? '1.5rem' : '1.8rem'
              }}
            >
              {highlights[3].title}
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'white', 
                mb: 3,
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}
            >
              {highlights[3].description}
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                alignSelf: 'flex-start', 
                backgroundColor: 'white',
                color: '#FFAB00',
                fontWeight: 600,
                '&:hover': { 
                  backgroundColor: '#f0f0f0',
                  color: '#E69A00' 
                }
              }}
            >
              {highlights[3].buttonText}
            </Button>
          </HighlightCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HighlightsSection;