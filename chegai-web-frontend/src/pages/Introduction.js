import React from 'react'
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Login from '../components/forms/Login';


export default function Introduction() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#6DD99C",
                color: "white",
                display: "flex",
                flexDirection: { xs: "column", md: "row" }
            }}
        >
            <Box
                flex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant='h1' fontWeight='bold'>
                    ChegAí
                </Typography>
            </Box>
            <Box
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                px={{ xs: 4, md: 8 }}
            >
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    Encontre lojas com seu estilo e compartilhe com quem gosta
                </Typography>
                <Stack spacing={2} width="100%" maxWidth={400} mt={2}>
                    <Button
                        size='medium'
                        variant="contained"
                        fullWidth
                        startIcon={
                            <img
                              src="https://developers.google.com/identity/images/g-logo.png"
                              alt="Google"
                              style={{ width: 20, height: 20 }}
                            />
                          }
                        sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#e2e2e2" }, alignItems:'center' }}
                    >
                        Entrar com Google
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        startIcon={
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                              alt="Facebook"
                              style={{ width: 20, height: 20 }}
                            />
                        }
                        sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#e2e2e2" }, alignItems:'center' }}
                    >
                        Entrar com Facebook
                    </Button>
                    <Divider sx={{ color: "white" }}>OU</Divider>
                    <Button variant="contained" fullWidth sx={{backgroundColor:'white', color:'black'}}>
                        Criar conta
                    </Button>
                </Stack>
            </Box>
            <Login/>
        </Box>
    )
}
