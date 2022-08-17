import { useContext } from 'react';
import type { NextPage } from 'next'

import { useRouter } from 'next/router';

import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../context/auth';
import useRedirect from '../../components/hooks/usuario/useRedirect'
import { Layout } from '../../components/layouts'
import useRedirectAuthenticated from '../../components/hooks/usuario/useRedirectAuthenticated';


type FormData = {
    username: string,
    email: string,
    password: string,
};


const EliminarUsuario: NextPage = () => {
    useRedirect()
    useRedirectAuthenticated()

    const router = useRouter()

    const { deleteUser } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();


    const onDeleteUser = async () => {
        const { hasError, message } = await deleteUser(router.query.id)


        if (hasError) {
            toast.error('Error al eliminar', {
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
            <Layout title={`Eliminar Usuario - Taller Gonzales `}>
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
                        <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
                            <HowToRegRoundedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Eliminar
                        </Typography>

                        <form onSubmit={handleSubmit(onDeleteUser)} noValidate>
                            <Box sx={{ mt: 1 }} >
                                <TextField
                                    disabled
                                    type='text'
                                    margin="normal"
                                    fullWidth
                                    id="username"
                                    label="Nombre de usuario"
                                    autoFocus
                                    defaultValue={router.query.username}
                                    
                                    error={!!errors.username}
                                    helperText={errors.username?.message}
                                />
                                <TextField
                                    disabled
                                    type='email'
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Correo"
                                    defaultValue={router.query.email}
                                   
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            

                                <Button
                                    color='error'
                                    type='submit'
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Eliminar
                                </Button>
                            </Box>
                        </form>
                    </Box>

                </Container>
            </Layout>
        </>
    )
}

export default EliminarUsuario