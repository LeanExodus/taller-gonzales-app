import { useContext, useEffect } from 'react';

import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { validations } from '../../utils';
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';

interface PassState {
    password: string;
    showPassword: boolean;
}

type FormData = {
    identifier: string,
    password: string,
};

export const SignIn = () => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const {loginUser} = useContext(AuthContext)

    const onLoginUser = async ({identifier,password}: FormData) => {
        
        const isValidLogin = await loginUser(identifier, password)
        
        if(!isValidLogin){
            toast.error('No reconocemos ese usuario / contraseña', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        return
        }

        router.replace('/administracion')
    }

    

  return (
      <Container component="main" maxWidth="xs">
          
          <ToastContainer/>

          <Box
              sx={{
                  marginTop: 25,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                  <LockOutlined />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Iniciar Sesión
              </Typography>

              <form onSubmit={handleSubmit(onLoginUser)} noValidate>
                <Box sx={{ mt: 1 }} >
                    <TextField
                        type='email'
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Correo"
                        autoFocus
                        
                          {...register('identifier', {
                            required: 'Este campo es requerido',
                            validate: validations.isEmail
                        })}
                          error={!!errors.identifier }
                          helperText={errors.identifier?.message}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Contraseña"
                        id="password"
                        type='password'

                        {...register('password',{
                            required: 'Este campo es requerido',
                            minLength: {value:6, message:'Mínimo 6 caracteres'}
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />


                    <Button
                        type='submit'
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Ingresar
                    </Button>

                </Box>
              </form>
          </Box>
      
      </Container>
  )
}
