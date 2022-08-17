import type { NextPage } from 'next'


import { useRouter } from 'next/router';

import { Avatar, Box, Button, Card, CardMedia, Container, Divider, Grid, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '../../components/layouts';
import Link from 'next/link';
import { eliminarProducto } from '../../utils/producto';
import useRedirect from '../../components/hooks/usuario/useRedirect';

type FormData = {
    productname: string,
    price: string,


};

const EliminarProducto: NextPage = () => {
    useRedirect()

    const router = useRouter()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();


    const onDeleteProduct = async () => {

        
        const { hasError, message } = await eliminarProducto(router.query.id)

        if (hasError) {
            toast.error('No se logro eliminar el producto', {
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

        router.replace('/administracion/productos')
    }

    return (
        <>
            <Layout title='Eliminar Producto - Taller Gonzales'>

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
                            Eliminar Producto
                        </Typography>

                        <form onSubmit={handleSubmit(onDeleteProduct)} noValidate>
                            <Box sx={{ mt: 2 }} >
                                <TextField
                                    type='text'
                                    margin="normal"
                                    fullWidth
                                    id="productname"
                                    label="Nombre del Producto"
                                    autoFocus
                                    defaultValue={router.query.productname}
                                    disabled
                                    
                                />
                                <TextField
                                    type='number'
                                    margin="normal"
                                    fullWidth
                                    id="price"
                                    label="Precio"
                                    defaultValue={router.query.price}
                                    disabled
                                   
                                />
                                

                                <Divider />

                                <Box mt={1} display='flex' flexDirection="column" textAlign={'center'}>

                                    <Grid container spacing={2}>

                                        <Grid item xs={12} >
                                            <Card sx={{ minWidth: '230px', maxWidth: '230px', minHeight: '130px', ml: 12 }}>
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
                                        <Link href={'/administracion/productos'}>
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



export default EliminarProducto