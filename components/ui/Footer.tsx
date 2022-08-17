import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link'

import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import { AuthContext } from '../../context/auth';





export const Footer = () => {

  const { isLoggedIn, user, logout } = useContext(AuthContext)


  return (
    <>

      <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 6}} sx={{
       

        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
      }}>
        <Container maxWidth={'lg'}>
          <Grid container spacing={5}>

              <Grid item xs={12} sm={4}>
                <Box textAlign={'center'} borderBottom={1} mb={1}>
                      <Typography variant='h6'>Ubicación</Typography>
                  </Box>
                <Box textAlign={'center'}>
                      <Typography>100 metros Éste del Puente Colgante del Río cañas.</Typography>
                      <Typography>Provincia de Guanacaste, Cañas, 50601</Typography>
                  </Box>
              </Grid>

            <Grid item xs={12} sm={4}>
              <Box textAlign={'center'} borderBottom={1} mb={1}>
                <Typography variant='h6'>Horario</Typography>
              </Box>
              <Box textAlign={'center'}>
                <Typography>Lunes a Sabado 7:30 a.m. - 6:30 p.m.</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box textAlign={'center'} borderBottom={1} mb={1} >
                {isLoggedIn ? (<Typography variant='h6'>Bienvenido {user?.username}</Typography>) : (<Typography variant='h6'>Cuenta</Typography>)}
              </Box>
              <Box >
                {
                  !isLoggedIn ? (
                    <>
                      <Link href={'/login'}>
                        <Button sx={{ width: '100%' }} startIcon={<LoginIcon />} variant='outlined'>
                          Ingresar
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <>
                        <Button sx={{ width: '100%' }} startIcon={<LogoutIcon />} variant='outlined' onClick={logout} >
                        Salir
                      </Button>
                    </>
                  )
                }
              </Box>
            </Grid>

          </Grid>
          <Box textAlign={'center'} pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Taller Automotriz Gónzalez &reg; {new Date().getFullYear()}
          </Box>
        </Container>
    </Box>
    
    {/* <Box
      component="footer"
      sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          
          backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[900],
      }}
    >

 
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant='h6'>Bienvenido {user?.username}</Typography>
              
              {
                !isLoggedIn ? (
                  <>
                    <Link href={'/login'}>
                      <Button sx={{width:'100%'}} startIcon={<LoginIcon fontSize="small" />} variant='contained'>
                        Ingresar
                      </Button>
                    </Link>
                  </>
                ):(
                  <>
                  <Button sx={{ width: '100%' }} startIcon={<LogoutIcon fontSize="small" />} variant='contained' onClick={logout} >
                      Salir
                    </Button>
                  </>
                )
              }
  
          </Grid>
           
   
    </Box>*/}
    </> 
  )
}
