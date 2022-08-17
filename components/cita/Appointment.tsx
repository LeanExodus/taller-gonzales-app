
import { Avatar, Box, Button, Divider, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, TextField, Typography, SxProps } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

import { validations } from "../../utils";
import { toast, ToastContainer } from 'react-toastify';

type FormData = {
    fecha: string,
    hora: string,
    nombre: string,
    apellidos: string,
    email: string,
    tel: string,
    
};

export const Appointment = () => {
    

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormData>();

    const sendEmail = ({ fecha, hora,nombre, apellidos, email, tel }: FormData) => {
        emailjs.send('service_hlasgd9', 'template_6k128nh', {
            fecha: fecha,
            hora: hora,
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            tel: tel,
            
        }, 'gsAkI5TlyQHkZ3TVT')
            .then((result) => {
                reset()
                toast.success('Petición enviada', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <ToastContainer />
            <Grid mt={8} mb={5} container component="main">


                <Grid item xs={12} md={6} component={Paper} elevation={4} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <EventAvailableIcon />
                        </Avatar>

                        <Box onSubmit={handleSubmit(sendEmail)} component="form" noValidate sx={{ mt: 1 }}>

                            <TextField 
                            InputProps={{
                                inputProps: {
                                    min: "2022-08-17",
                                    max: "2022-12-31"
                                }
                            }} 
                            InputLabelProps={{shrink: true,}} 
                            type={'date'} 
                            sx={{ mt: 2 }} 
                            fullWidth 
                            id="fecha" 
                            label="¿En qué fecha le gustaría visitarnos?" 
                            variant="outlined" 
                                {...register('fecha', {
                                    required: 'Este campo es requerido',
                                    
                                })}
                                error={!!errors.fecha}
                                helperText={errors.fecha?.message}
                            />
                            

                            <TextField 
                            InputLabelProps={{shrink: true,}} 
                            type={'time'} sx={{ mt: 2 }} 
                            fullWidth 
                            id="hora" 
                            label="Hora de la cita" 
                                helperText={'Horario de atención 7:30 a.m. - 18:30 p.m.' || errors.hora?.message} 
                            variant="outlined" 
                                {...register('hora', {
                                    required: 'Este campo es requerido',

                                })}
                                error={!!errors.hora}
                                
                            />

                            <Grid mt={2} container spacing={1}>
                                <Grid xs={12} md={6} item>
                                    <TextField 
                                    fullWidth 
                                    id="nombre" 
                                    label="Nombre" 
                                    variant="outlined" 
                                    type='text'
                                      {...register('nombre', {
                                          required: 'Este campo es requerido',
                                          minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                                      })}
                                    error={!!errors.nombre}
                                    helperText={errors.nombre?.message}
                                    />
                                    
                                </Grid>
                                <Grid xs={12} md={6} item>

                                    <TextField 
                                    type={'text'}
                                    fullWidth 
                                    id="apellidos" 
                                    label="Apellidos" 
                                    variant="outlined" 
                                        {...register('apellidos', {
                                            required: 'Este campo es requerido',
                                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                                        })}
                                        error={!!errors.apellidos}
                                        helperText={errors.apellidos?.message}
                                    />
                                </Grid>
                            </Grid>

                            <TextField 
                            sx={{ mt: 2 }} 
                            fullWidth 
                            id="correo" 
                            label="Correo" 
                            variant="outlined" 
                                type={'email'}
                                {...register('email', {
                                    required: 'Este campo es requerido',
                                    validate: validations.isEmail
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                />

                            <TextField 
                            type={'tel'} 
                            sx={{ mt: 2 }} 
                            fullWidth 
                            id="tel" 
                            label="Teléfono" 
                            variant="outlined" 
                                {...register('tel', {
                                    required: 'Este campo es requerido',
                                    min: { value: 1, message: 'No puede ser negativo' }
                                })}
                                error={!!errors.tel}
                                helperText={errors.tel?.message}
                            />

                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Enviar
                            </Button>


                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}
