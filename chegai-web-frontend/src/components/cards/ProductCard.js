import { useState } from 'react';
import { Card, CardMedia, CardContent, Button, Typography, Box, Chip, Rating, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    // Calcula o percentual de desconto
    const discountPercentage = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    return (
        <Card
            sx={{
                width: 235,
                position: 'relative',
                boxShadow: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s',
                backgroundColor: 'transparent',
                '&:hover': {
                    boxShadow: '0px 25px 25px rgba(0, 0, 0, 0.1)'
                }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Área da imagem */}
            <Box sx={{
                position: 'relative',
                backgroundColor: '#F5F5F5',
                height: 300,
                overflow: 'hidden'
            }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={product.image}
                    alt={product.name}
                    sx={{
                        objectFit: 'contain',
                        padding: '20px',
                        boxSizing: 'border-box',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)'
                        }
                    }}
                />

                {/* Badge de desconto */}
                {product.oldPrice > product.price && (
                    <Chip
                        label={`-${discountPercentage}%`}
                        sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            backgroundColor: '#B74F4F',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                            fontSize: '0.75rem', // Fonte reduzida
                            zIndex: 2,
                            height: '24px' // Altura reduzida
                        }}
                    />
                )}

                {/* Overlay e botões no hover */}
                {isHovered && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            transition: 'opacity 0.3s',
                            zIndex: 1
                        }}
                    >
                        {/* Botão de favorito no overlay */}
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                backgroundColor: 'white',
                                '&:hover': { backgroundColor: '#f0f0f0' },
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsFavorite(!isFavorite);
                            }}
                        >
                            {isFavorite ? (
                                <FavoriteIcon sx={{ color: '#DB4444' }} />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </IconButton>
                        {/* Botões adicionais (opcional) */}
                        <Box sx={{ display: 'flex', gap: '8px', position: 'absolute', bottom: 12 }}>
                            <Button variant="text" sx={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                Add ao carrinho
                            </Button>
                            <Button variant="text" sx={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                Comparar
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>

            <CardContent sx={{ padding: '16px 0' }}>
                {/* Nome do produto */}
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: 500,
                        marginBottom: '8px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '1.1rem'
                    }}
                >
                    {product.name}
                </Typography>

                {/* Preços */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#B74F4F' }}>
                        ${product.price}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {product.oldPrice > product.price && (
                            <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'gray', mr: 1 }}>
                                ${product.oldPrice}
                            </Typography>
                        )}

                        <FavoriteIcon sx={{
                            color: isFavorite ? '#B74F4F' : '#CCCCCC',
                            fontSize: 18,
                            transition: 'color 0.3s'
                        }} />
                    </Box>
                </Box>

                {/* Avaliação */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Rating
                        name="product-rating"
                        value={product.rating}
                        readOnly
                        precision={0.5}
                        sx={{ color: '#FFAD33', fontSize: '1.2rem' }}
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                        ({product.reviews})
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;