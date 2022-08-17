import { useContext } from 'react';
import { useRouter } from 'next/router';

import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validations } from '../../utils';
import { AuthContext } from '../../context/auth';
import useRedirect from '../hooks/usuario/useRedirect';
import useRedirectAuthenticated from '../hooks/usuario/useRedirectAuthenticated';


type FormData = {
    username:string,
    email: string,
    password: string,
};


export const Register = () => {
    useRedirect()
    useRedirectAuthenticated()

    const router = useRouter()
    const {registerUser} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();


    const onRegisterUser = async ({ username,email, password }: FormData) => {


        const {hasError,message} = await registerUser(username,email,password)

        
        if (hasError) {
            toast.error('El correo ya existe', {
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
       
       
        router.replace('/administracion/usuarios')
    }

  return (
      <Container component="main" maxWidth="xs">

          <ToastContainer />

          <Box
              sx={{
                  marginTop: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                  <HowToRegRoundedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Registrar
              </Typography>

              <form onSubmit={handleSubmit(onRegisterUser)} noValidate>
                  <Box sx={{ mt: 1 }} >
                      <TextField
                          type='text'
                          margin="normal"
                          fullWidth
                          id="username"
                          label="Nombre de usuario"
                          autoFocus

                          {...register('username', {
                              required: 'Este campo es requerido',
                              minLength: { value: 3, message: 'Mínimo 3 caracteres'}
                          })}
                          error={!!errors.username}
                          helperText={errors.username?.message}
                      />
                      <TextField
                          type='email'
                          margin="normal"
                          fullWidth
                          id="email"
                          label="Correo"
                          {...register('email', {
                              required: 'Este campo es requerido',
                              validate: validations.isEmail
                          })}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                      />
                      <TextField
                          margin="normal"
                          fullWidth
                          label="Contraseña"
                          id="password"
                          type='password'
                         
                          {...register('password', {
                              required: 'Este campo es requerido',
                              minLength: { value: 6, message: 'Mínimo 6 caracteres' }
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
                          Registrar
                      </Button>
                  </Box>
              </form>
          </Box>

      </Container>
  )
}
