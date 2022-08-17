import type { NextPage } from 'next'

import { useRouter } from 'next/router';

import { Avatar, Box, Button, Card, CardMedia, Chip, Container, Divider, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '../../components/layouts';
import Link from 'next/link';
import useRedirect from '../../components/hooks/usuario/useRedirect';
import { eliminarServicio } from '../../utils/servicio';

type FormData = {
    servicename: string,

};

const EliminarServicio: NextPage = () => {
    useRedirect()

    const router = useRouter()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();


    const onDeleteService = async () => {


        const { hasError, message } = await eliminarServicio(router.query.id)

        if (hasError) {
            toast.error('No se logro eliminar el servicio', {
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

        router.replace('/administracion/servicios')
    }

    return (
        <>
            <Layout title='Eliminar Servicio - Taller Gonzales'>

                <Container component="main" >

                    <ToastContainer />

                    <Box
                        sx={{
                            marginTop: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        mb={5}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <DeleteIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Eliminar Servicio
                        </Typography>

                        <form onSubmit={handleSubmit(onDeleteService)} noValidate>
                            <Box sx={{ mt: 2, minWidth: '400px' }} >
                                <TextField
                                    type='text'
                                    margin="normal"
                                    fullWidth
                                    id="servicename"
                                    label="Nombre del Servicio"
                                    autoFocus
                                    defaultValue={router.query.servicename}
                                    disabled

                                />
                           
                                <Divider />

                                <Box mt={1} display='flex' flexDirection="column" textAlign={'center'}>

                                    <Grid container spacing={2}>

                                        <Grid item xs={12} >
                                            <Card sx={{ minWidth: '230px', maxWidth: '230px', minHeight: '130px', ml: 10 }}>
                                                <CardMedia

                                                    width={'100%'}
                                                    component='img'
                                                    className='fadeIn'
                                                    //@ts-ignore[3] 
                                                    image={router.query.image}
                                                    alt={''}
                                                />


                                            </Card>
                                        </Grid>


                                    </Grid>

                                </Box>


                                <Grid container spacing={5}>
                                    <Grid item xs={6}>
                                        <Button
                                            color='error'
                                            type='submit'
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Eliminar
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Link href={'/administracion/servicios'}>
                                            <Button
                                                color='secondary'
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Volver
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>

                            </Box>

                        </form>
                    </Box>

                </Container>
            </Layout>
        </>
    )
}



export default EliminarServicio