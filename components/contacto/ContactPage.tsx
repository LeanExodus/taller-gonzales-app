import { useState } from "react";
import { useForm } from "react-hook-form";


import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Avatar, Box, Button, Divider, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, TextField, Typography, SxProps } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { validations } from "../../utils";


type FormData = {
    motivo: string,
    nombre: string,
    apellidos: string,
    email: string,
    tel: string,
    comentario: string,
};

export const ContactPage = () => {
    const [option, setOption] = useState('Información General')
    
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormData>();

    const handleChange = (event: SelectChangeEvent) => {
        setOption(event.target.value as string);
    };


    const sendEmail = ({nombre, apellidos, email, tel, comentario}:FormData) => {
        emailjs.send('service_hlasgd9', 'template_6ftdcph', {
            motivo: option,
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            tel: tel,
            comentario: comentario,
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
              
              <Grid textAlign={{xs:'center', md:'start'}} item xs={12} md={6}  component={Paper} elevation={4} square p={10}>
                  <Typography mt={1} variant="h4">Contáctenos</Typography>
                  <Typography mt={2} mb={4}>Nos puede contactar mediante llamada o solicite más información llenando el formulario.</Typography>
                  <Typography mt={2} mb={5} ><LocalPhoneIcon fontSize="inherit" /> 2669 0408</Typography>
                  <Divider/>

                  <Typography mt={4} variant="h4">Ubicación</Typography>
                  <Typography mt={2} >100 metros Éste del Puente Colgante del Río cañas.</Typography>
                  <Typography mb={5}>Provincia de Guanacaste, Cañas, 50601</Typography>

                  <Divider />

                  <Typography mt={4} variant="h4">Horario de servicio</Typography>
                  <Typography mt={2} >Lunes a Sabado 7:30 a.m. - 6:30 p.m.</Typography>
                  
              </Grid>
              
              <Grid  item xs={12} md={6} component={Paper} elevation={4} square>
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
                          <ContactsIcon />
                      </Avatar>
                      
                      <Box onSubmit={handleSubmit(sendEmail)} component="form" noValidate sx={{ mt: 1 }}>
                          
                          <InputLabel sx={{mt:2}} id="demo-simple-select-label">Seleccione un motivo</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="motivo"
                              value={option}
                              onChange={handleChange}
                              fullWidth
                          >
                              <MenuItem value={'Información General'}>Información General</MenuItem>
                              <MenuItem value={'Servicios'}>Servicios</MenuItem>
                              <MenuItem value={'Productos'}>Productos</MenuItem>
                              <MenuItem value={'Ofertas'}>Ofertas</MenuItem>
                              <MenuItem value={'Quejas'}>Quejas</MenuItem>
                          </Select>
                          
                         <Grid  mt={2} container spacing={1}>
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
                          type={'email'}
                          sx={{ mt: 2 }} 
                          fullWidth 
                          id="correo" 
                          label="Correo" 
                          variant="outlined" 
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

                          <TextField 
                          type={'text'}
                          multiline 
                          rows={3}  
                          sx={{ mt: 2 }} 
                          fullWidth 
                          id="comentario" 
                          label="Por favor, compártanos sus comentarios" 
                          variant="outlined" 
                              {...register('comentario', {
                                  required: 'Este campo es requerido',
                                  
                              })}
                              error={!!errors.comentario}
                              helperText={errors.comentario?.message}
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
