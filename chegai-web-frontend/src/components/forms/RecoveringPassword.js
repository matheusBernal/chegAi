import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, TextField, Button, Typography, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { closeRecoveringPassword } from '../../reducer/introductionReducer';

export default function RecoveringPassword() {
  const recoveringPassword = useSelector((state) => state.introduction.recoveringPassword);
  const dispatch = useDispatch();

  const handleCloseRecoveringPassword = () => {
    dispatch(closeRecoveringPassword());
  };

  return (
    <Dialog
      open={recoveringPassword}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': { borderRadius: '20px', padding: 2 }
      }}
      onClose={handleCloseRecoveringPassword}
    >
      <DialogTitle align='center' fontSize='28px' sx={{ color: '#6DD99C' }}>
        Vamos recuperar a sua conta
      </DialogTitle>

      <Divider />

      <DialogContent>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Typography variant='h6' textAlign='center'>
              Insira seu email ou número de celular para procurar sua conta
            </Typography>
          </Grid>

          <Grid item>
            <TextField label="Email ou celular" fullWidth />
          </Grid>

          <Grid item>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#6DD99C", fontSize: "14px", color: 'white', borderRadius: '20px' }}
            >
              Encontre sua conta
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
