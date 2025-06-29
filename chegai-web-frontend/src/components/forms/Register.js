import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Grid, TextField, Typography, Button, Alert } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import { useSelector, useDispatch } from 'react-redux';
import { openLogin, openRegister } from '../../reducer/introductionReducer';

export default function Register() {
    const [birthDate, setBirthDate] = useState(null);
    const [nome, setNome] = useState('');
    const [emailOuTelefone, setEmailOuTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState(null); // nova linha

    const register = useSelector((state) => state.introduction.register);
    const dispatch = useDispatch()

    const handleOpenRegister = () => {
        dispatch(openRegister())
    }

    const handleOpenLogin = () => {
        dispatch(openLogin())
        dispatch(openRegister())
    }

    const validarEmail = (valor) => /\S+@\S+\.\S+/.test(valor);
    const validarTelefone = (valor) => /^\d{10,11}$/.test(valor.replace(/\D/g, ''));

    const handleSubmit = async () => {
        setMensagem(null);

        if (!nome || !emailOuTelefone || !senha || !birthDate) {
            setMensagem({ tipo: 'erro', texto: 'Por favor, preencha todos os campos.' });
            return;
        }

        if (senha.length < 6 || !/\d/.test(senha) || !/[a-zA-Z]/.test(senha)) {
            setMensagem({ tipo: 'erro', texto: 'A senha deve ter pelo menos 6 caracteres e conter letras e números.' });
            return;
        }

        const valorLimpo = emailOuTelefone.trim();
        const isEmail = validarEmail(valorLimpo);
        const isTelefone = validarTelefone(valorLimpo);

        if (!isEmail && !isTelefone) {
            setMensagem({ tipo: 'erro', texto: 'Digite um e-mail válido ou um telefone com DDD.' });
            return;
        }

        const data_nascimento = birthDate.toISOString().split('T')[0];

        const payload = {
            nome,
            senha,
            data_nascimento,
            ...(isEmail ? { email: valorLimpo } : { telefone: valorLimpo })
        };

        try {
            const response = await fetch('http://localhost:5000/cadastro_manual', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                setMensagem({ tipo: 'sucesso', texto: 'Cadastro realizado com sucesso!' });

                // 💾 Salva no localStorage
                localStorage.setItem("usuario", JSON.stringify(data.usuario));

                setTimeout(() => {
                    dispatch(openRegister()); // fecha o modal
                }, 1000);
            } else {
                setMensagem({ tipo: 'erro', texto: data.erro || 'Erro ao cadastrar usuário.' });
            }
        } catch (error) {
            setMensagem({ tipo: 'erro', texto: 'Erro ao conectar com o servidor.' });
            console.error(error);
        }
    };


    return (
        <Dialog
            open={register}
            fullWidth
            maxWidth="sm"
            sx={{ '& .MuiDialog-paper': { borderRadius: '20px', padding: 2 } }}
            onClose={handleOpenRegister}
        >
            <DialogTitle align='center' fontSize='28px' fullWidth sx={{ color: '#6DD99C' }}>
                Crie sua nova conta
            </DialogTitle>

            <DialogContent>
                <Grid container spacing={2} direction="column">
                    {mensagem && (
                        <Grid item>
                            <Alert severity={mensagem.tipo === 'erro' ? 'error' : 'success'}>
                                {mensagem.texto}
                            </Alert>
                        </Grid>
                    )}

                    <Grid item>
                        <TextField
                            label='Nome completo'
                            fullWidth
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
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
                        <TextField
                            label="Email ou celular"
                            fullWidth
                            value={emailOuTelefone}
                            onChange={(e) => setEmailOuTelefone(e.target.value)}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Nova senha"
                            type="password"
                            fullWidth
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
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
                            onClick={handleSubmit}
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
    );
}
