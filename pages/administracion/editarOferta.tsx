import type { NextPage } from 'next'

import { ChangeEvent, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Avatar, Box, Button, Card, CardActions, CardMedia, Chip, Container, Divider, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '../../components/layouts';
import { TallerApi } from '../../api';
import Cookies from 'js-cookie';
import Link from 'next/link';
import useRedirect from '../../components/hooks/usuario/useRedirect';
import { editarOferta } from '../../utils/oferta';

type FormData = {
    ofertname: string,
    mostrar: boolean

};

const EditarOferta: NextPage = () => {
    useRedirect()

    const router = useRouter()
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const [image, setImage] = useState(router.query.image)
    const [show, setShow] = useState(router.query.show)


    const handleChangeShow = (event: SelectChangeEvent) => {
        setShow(event.target.value as string);
    };

    const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (!target.files || target.files.length === 0) {
            return
        }

        try {

            for (const file of target.files) {
                const formData = new FormData()

                formData.append('Image', file)

                const { data } = await TallerApi.post(`/uploadImage`, formData,
                    {
                        headers: {
                            "content-type": "multipart/form-data",
                            Authorization: 'Bearer ' + Cookies.get('jwt')
                        }
                    })

                setImage(data.url)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onEditService = async ({ ofertname }: FormData) => {


        if (image === '') {
            toast.error('Se necesita 1 imagen', {
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
        //@ts-ignore[1]
        const { hasError, message } = await editarOferta(router.query.id, ofertname, image, show)

        if (hasError) {
            toast.error('No se logro editar la oferta', {
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

        router.replace('/administracion/ofertas')
    }

    return (
        <>
            <Layout title='Editar Oferta - Taller Gonzales'>

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
                            <EditIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Editar Servicio
                        </Typography>

                        <form onSubmit={handleSubmit(onEditService)} noValidate>
                            <Box sx={{ mt: 2, minWidth: '400px' }} >
                                <TextField
                                    type='text'
                                    margin="normal"
                                    fullWidth
                                    id="ofertname"
                                    label="Nombre de la oferta"
                                    autoFocus
                                    defaultValue={router.query.ofertname}
                                    {...register('ofertname', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 3, message: 'Mínimo 3 caracteres' },
                                        maxLength: { value: 35, message: 'No puede ser mayor a 35 caracteres' }
                                    })}
                                    error={!!errors.ofertname}
                                    helperText={errors.ofertname?.message}
                                />

                                <InputLabel id="selectShowLabel">Mostrar</InputLabel>
                                <Select
                                    fullWidth
                                    labelId='selectShowLabel'
                                    id='show'
                                    //@ts-ignore[2]
                                    value={show}

                                    onChange={handleChangeShow}
                                >
                                    {/* @ts-ignore[3] */}
                                    <MenuItem value={true}>
                                        SI
                                    </MenuItem>
                                    {/* @ts-ignore[3] */}
                                    <MenuItem value={false}>
                                        NO
                                    </MenuItem>
                                </Select>

                                <Divider />

                                <Box display='flex' flexDirection="column" textAlign={'center'}>

                                    <Button
                                        color="secondary"
                                        fullWidth
                                        startIcon={<FileUploadOutlinedIcon />}
                                        sx={{ mb: 2 }}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        Cargar imagen
                                    </Button>
                                    <input

                                        ref={fileInputRef}
                                        type='file'
                                        accept='image/png, image/gif, image/jpeg'
                                        style={{ display: 'none' }}
                                        onChange={onFileSelected}
                                    />

                                    <Chip

                                        label="Es necesaria 1 imagen"
                                        color='error'
                                        variant='outlined'
                                        sx={{ display: image === '' ? 'flex' : 'none', mb: 1 }}
                                    />

                                    <Grid container spacing={2}>

                                        <Grid item xs={12} >
                                            <Card sx={{ minWidth: '230px', maxWidth: '230px', minHeight: '180px', ml: 10 }}>
                                                <CardMedia

                                                    width={'100%'}
                                                    component='img'
                                                    className='fadeIn'
                                                    //@ts-ignore[3] 
                                                    image={image}
                                                    alt={''}
                                                />

                                                <CardActions>
                                                    <Button sx={{ display: image === '' ? 'none' : 'flex', mb: 1 }} variant='contained' fullWidth color="error" onClick={() => setImage('')}>
                                                        Borrar
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>


                                    </Grid>

                                </Box>



                                <Grid container spacing={5}>
                                    <Grid item xs={6}>
                                        <Button
                                            color='warning'
                                            type='submit'
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Editar
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Link href={'/administracion/ofertas'}>
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



export default EditarOferta