import { useContext } from 'react';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';


import { useForm } from 'react-hook-form';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validations } from '../../utils';
import useRedirect from '../../components/hooks/usuario/useRedirect'
import { Layout } from '../../components/layouts'
import { AuthContext } from '../../context/auth';
import useRedirectAuthenticated from '../../components/hooks/usuario/useRedirectAuthenticated';


type FormData = {
   
    username: string,
    email: string,
    
};


const EditarUsuario:NextPage = () => {

    useRedirect()
    useRedirectAuthenticated()

    const router = useRouter()
    
    const {editUser} = useContext(AuthContext)
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();


    const onEditUser = async ({ username, email }: FormData) => {
        const { hasError, message } = await editUser(router.query.id, username, email)


        if (hasError) {
            toast.error('Error al editar', {
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
        
        <>
            <Layout title={`Editar Usuario - Taller Gonzales `}>
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
                        <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}>
                            <HowToRegRoundedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Editar 
                        </Typography>

                        <form onSubmit={handleSubmit(onEditUser)} noValidate>
                            <Box sx={{ mt: 1 }} >
                                <TextField
                                    type='text'
                                    margin="normal"
                                    fullWidth
                                    id="username"
                                    label="Nombre de usuario"
                                    autoFocus
                                    defaultValue={router.query.username}
                                    {...register('username', {

                                        minLength: { value: 3, message: 'Mínimo 3 caracteres' }
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
                                    defaultValue={router.query.email}
                                    {...register('email', {

                                        validate: validations.isEmail
                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                              

                                <Button
                                    color='warning'
                                    type='submit'
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Editar
                                </Button>
                            </Box>
                        </form>
                    </Box>

                </Container>
            </Layout>
        </>
    )
}

export default EditarUsuario