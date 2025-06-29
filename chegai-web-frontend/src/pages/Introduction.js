// Introduction.js
import React from 'react';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { openLogin, openRegister } from '../reducer/introductionReducer';
import Register from '../components/forms/Register';
import Login from '../components/forms/Login';
import RecoveringPassword from '../components/forms/RecoveringPassword';
import { loginComGoogle } from '../auth/loginComGoogle';

export default function Introduction() {
  const dispatch = useDispatch();

  const handleOpenLogin = () => {
    dispatch(openLogin());
  };

  const handleOpenRegister = () => {
    dispatch(openRegister());
  };

  const handleLoginGoogle = async () => {
    try {
      const { idToken, userInfo } = await loginComGoogle();

      const response = await fetch("http://localhost:5000/cadastro", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      });

      const result = await response.json();
      console.log("Cadastro/Login com Google feito:", result);

      // Exemplo: salvar no localStorage
      localStorage.setItem("usuario", JSON.stringify(result.usuario));

      // TODO: redirecionar ou fechar modal, se desejar
    } catch (error) {
      console.error("Erro ao logar com Google:", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#B74F4F",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }
      }}
    >
      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <Typography variant='h1' fontWeight='bold'>Zolei</Typography>
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
            onClick={handleLoginGoogle}
            startIcon={
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                style={{ width: 20, height: 20 }}
              />
            }
            sx={{
              bgcolor: "white",
              color: "black",
              "&:hover": { bgcolor: "#e2e2e2" },
              alignItems: 'center',
              borderRadius: '20px'
            }}
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
            sx={{
              bgcolor: "white",
              color: "black",
              "&:hover": { bgcolor: "#e2e2e2" },
              alignItems: 'center',
              borderRadius: '20px'
            }}
          >
            Cadastrar com Facebook
          </Button>

          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: 'white', color: 'black', borderRadius: '20px' }}
            onClick={handleOpenRegister}
          >
            Criar conta
          </Button>

          <Divider sx={{ color: "white" }}>OU</Divider>

          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: 'white', color: 'black', borderRadius: '20px' }}
            onClick={handleOpenLogin}
          >
            Entrar
          </Button>

          {/* Os modais devem sempre ser renderizados, pois são controlados por Redux */}
          <Register />
          <Login />
          <RecoveringPassword />
        </Stack>
      </Box>
    </Box>
  );
}
