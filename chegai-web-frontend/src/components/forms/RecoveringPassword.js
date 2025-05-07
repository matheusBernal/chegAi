import { Dialog, DialogTitle, DialogContent, Grid, TextField, Button, Typography, Divider } from '@mui/material';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {openRecoveringPassword} from '../../reducer/introductionReducer'

export default function RecoveringPassword() {
  const recoveringPassword = useSelector((state)=>state.introduction.recoveringPassword)
  const dispatch = useDispatch()

  const handleOpenRegistercovering = ()=>{
          dispatch(openRecoveringPassword())
  }

  return (
    <Dialog
            open={recoveringPassword}
            maxWidth="xl"
            sx={{
                '& .MuiDialog-paper': { borderRadius: '20px', padding: 2 }
            }}
            onClose={handleOpenRegistercovering}
        >
            <DialogTitle align='center' fontSize='28px' fullWidth sx={{ color: '#6DD99C' }}>
                Vamos recuperar a sua conta
            </DialogTitle>
            <Divider/>
            <DialogContent>
                    <Grid item>
                      <Typography variant='h6' textAlign='center'>
                       Insira seu email ou número de celular para procurar sua conta 
                      </Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Email ou celular" fullWidth />
                    </Grid>
                    <br/>
                    <Grid item>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ backgroundColor: "#6DD99C", fontSize: "14px", color: 'white', borderRadius: '20px' }}
                        >
                            Encontre sua conta
                        </Button>
                    </Grid>
            </DialogContent>
    </Dialog>
);
}
