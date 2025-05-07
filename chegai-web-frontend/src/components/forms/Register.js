import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Grid, TextField, Typography, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import { useSelector, useDispatch } from 'react-redux';
import { openLogin, openRegister } from '../../reducer/introductionReducer';

export default function Register() {
    const [birthDate, setBirthDate] = useState(null);

    const register = useSelector((state) => state.introduction.register);
    const dispatch = useDispatch()
    
    const handleOpenRegister = ()=>{
        dispatch(openRegister())
    }

    const handleOpenLogin = () => {
        dispatch(openLogin())
        dispatch(openRegister())
      }


    return (
        <Dialog
            open={register}
            fullWidth
            maxWidth="sm"
            sx={{
                '& .MuiDialog-paper': { borderRadius: '20px', padding: 2 }
            }}
            onClose={handleOpenRegister}
        >
            <DialogTitle align='center' fontSize='28px' fullWidth sx={{ color: '#6DD99C' }}>
                Crie sua nova conta
            </DialogTitle>

            <br/>

            <DialogContent>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <TextField label='Nome completo' fullWidth />
                    </Grid>
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
                            <DatePicker
                                label="Data de nascimento"
                                value={birthDate}
                                onChange={(newValue) => setBirthDate(newValue)}
                                format="dd-MM-yyyy"
                                slotProps={{ textField: { fullWidth: true } }}
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid item>
                        <TextField label="Email ou celular" fullWidth />
                    </Grid>

                    <Grid item>
                        <TextField label="Nova senha" type="password" fullWidth />
                    </Grid>

                    <Grid item>
                        <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
                            Ao clicar em Cadastre-se, você concorda com nossos <b>Termos</b>, <b>Política de Privacidade</b> e <b>Cookies</b>.
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ backgroundColor: "#6DD99C", fontSize: "14px", color: 'white', borderRadius: '20px' }}
                        >
                            Cadastre-se
                        </Button>
                    </Grid>

                    <Grid item>
                    <Button
                            fullWidth
                            variant="text"
                            sx={{ fontSize: "14px", color: '#6DD99C', borderRadius: '20px' }}
                            onClick={handleOpenLogin}
                        >
                            Já tenho uma conta
                        </Button>
                    </Grid>

                </Grid>
            </DialogContent>
        </Dialog>

    )
}
