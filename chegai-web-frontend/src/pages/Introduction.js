import React from 'react'
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Register from '../components/forms/Register';
import Login from '../components/forms/Login';
import { useDispatch, useSelector } from "react-redux";
import { openLogin,openRegister } from '../reducer/introductionReducer';
import RecoveringPassword from '../components/forms/RecoveringPassword';


export default function Introduction() {
    const dispatch = useDispatch()
    const register = useSelector((state) => state.introduction.register);
    
    const handleOpenLogin = ()=>{
        dispatch(openLogin())
    }

    const handleOpenRegister = ()=>{
        console.log(register)
        dispatch(openRegister())
    }


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
                        variant="outlined"
                        fullWidth
                        startIcon={
                            <img
                                src="https://developers.google.com/identity/images/g-logo.png"
                                alt="Google"
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#e2e2e2" }, alignItems: 'center', borderRadius:'20px' }}
                    >
                        Cadastrar com Google
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
                        sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#e2e2e2" }, alignItems: 'center', borderRadius:'20px' }}
                    >
                        Cadastrar com Facebook
                    </Button>
                    <Button variant="contained" fullWidth sx={{ backgroundColor: 'white', color: 'black', borderRadius:'20px' }} onClick={handleOpenRegister}>
                        Criar conta
                    </Button>
                    <Register/>
                    <Divider sx={{ color: "white" }}>OU</Divider>
                    <Button variant="contained" fullWidth sx={{ backgroundColor: 'white', color: 'black', borderRadius:'20px' }} onClick={handleOpenLogin}>
                        Entrar
                    </Button>
                    <Login/>
                    <RecoveringPassword/>
                </Stack>
            </Box>
        </Box>
    )
}
