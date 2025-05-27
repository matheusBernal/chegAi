import { Dialog, DialogTitle, DialogContent, Grid, TextField, Button, Divider } from '@mui/material';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { openLogin,openRegister, openRecoveringPassword } from '../../reducer/introductionReducer';
import { useNavigate  } from 'react-router-dom';


export default function Login() {
  
  const login = useSelector((state) => state.introduction.login);
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleOpenLogin = ()=>{
    dispatch(openLogin())
  }

  const handleOpenRegister = () => {
    dispatch(openLogin())
    dispatch(openRegister())
  }

  const handleOpenRegistercovering = ()=>{
    dispatch(openRecoveringPassword())
    dispatch(openLogin())
  }

  return (
    <Dialog
      open={login}
      fullWidth
      keepMounted
      maxWidth="sm"
      sx={{
        '& .MuiDialog-paper': { borderRadius: '20px', padding: 2 }
      }}
      onClose={handleOpenLogin}
    >
      <DialogTitle align='center' fontSize='28px' fullWidth sx={{ color: '#6DD99C' }}>
        Seja Bem-Vindo! Entra e ChegAí
      </DialogTitle>

      <br />

      <DialogContent>
        <Grid container spacing={2} direction="column">
          <Grid item>
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
              sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#e2e2e2" }, alignItems: 'center', borderRadius: '20px' }}
            >
              Entrar com Google
            </Button>
          </Grid>

          <Grid item>
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
              sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#e2e2e2" }, alignItems: 'center', borderRadius: '20px' }}
            >
              Entrar com Facebook
            </Button>
          </Grid>

          <Grid item>
            <Divider orientation='horizontal'>OU</Divider>
          </Grid>

          <Grid item>
            <TextField label="Email ou celular" fullWidth />
          </Grid>

          <Grid item>
            <TextField label="Senha" type="password" fullWidth />
          </Grid>

          <Grid item>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#6DD99C", fontSize: "14px", color: 'white', borderRadius: '20px' }}
              onClick={()=>navigate('/home')}
            >
              Avançar
            </Button>
          </Grid>

          <Grid item>
            <Button
              fullWidth
              variant="text"
              sx={{ fontSize: "14px", color: '#6DD99C', borderRadius: '20px' }}
              onClick={handleOpenRegistercovering}
            >
              Esqueceu sua senha?
            </Button>
          </Grid>

          <Grid item>
              <Button
              fullWidth
              variant="text"
              sx={{fontSize: "13px",color: '#6DD99C', borderRadius: '20px' }}
              onClick={handleOpenRegister}
            >
              Inscrever-se
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
