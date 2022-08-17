import { useContext } from 'react';
import { NextPage } from "next"
import Link from "next/link";

import { Avatar, Box, Button, Container, Grid, SxProps, Theme, Typography } from "@mui/material"

import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import BuildIcon from '@mui/icons-material/Build';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { Layout } from "../../components/layouts"
import  useRedirect from '../../components/hooks/usuario/useRedirect';
import { AuthContext } from '../../context/auth';


const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5
    
};

const Administracion: NextPage = () => {
    useRedirect()

    const {user} = useContext(AuthContext)

  return (

        <>
            <Layout title='Administración - Taller Gonzales'>
            
                
              <Box
                  sx={{
                      marginTop: 20,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                  }}
              >
                  <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                      <BuildIcon />
                  </Avatar>
                  <Typography component="h1" variant="h4">
                      Administrar 
                  </Typography>

                  <Container sx={{ mt: 10, mb: 30}}>
                      
                      
                      
                      <Grid container spacing={4}>

                          {user?.role.name == 'Admin' || user?.role.name == 'SuperAdmin' ?
                              (<>
                                  <Grid item xs={12} md={6} lg={3} >
                                      <Box sx={item}>
                                          <Link href={'/administracion/usuarios'}>
                                              <Button sx={{ minWidth: '250px' }} variant="contained" startIcon={<PersonIcon sx={{ minHeight: '130px', width: '100%' }} />}>
                                                  Usuarios
                                              </Button>

                                          </Link>

                                      </Box>
                                  </Grid>

                                  <Grid item xs={12} md={6} lg={3}>

                                      <Box sx={item}>
                                          <Link href={'/administracion/productos'}>
                                              <Button sx={{ minWidth: '250px' }} variant="contained" startIcon={<InventoryIcon sx={{ minHeight: '130px', width: '100%' }} />}>
                                                  Productos
                                              </Button>

                                          </Link>
                                      </Box>
                                  </Grid>

                                  <Grid item xs={12} md={6} lg={3}>
                                      <Box sx={item}>
                                          <Link href={'/administracion/servicios'}>
                                              <Button sx={{ minWidth: '250px' }} variant="contained" startIcon={<HomeRepairServiceIcon sx={{ minHeight: '130px', width: '100%' }} />}>
                                                  Servicios
                                              </Button>

                                          </Link>

                                      </Box>
                                  </Grid>

                                  <Grid item xs={12} md={6} lg={3}>
                                      <Box sx={item}>
                                          <Link href={'/administracion/ofertas'}>
                                              <Button sx={{ minWidth: '250px' }} variant="contained" startIcon={<LocalOfferIcon sx={{ minHeight: '130px', width: '100%' }} />}>
                                                  Ofertas
                                              </Button>

                                          </Link>

                                      </Box>
                                  </Grid>
                              </>)
                              :
                              (<>
                                  <Grid item xs={12} md={4} >

                                      <Box sx={item}>
                                          <Link href={'/administracion/productos'}>
                                              <Button sx={{ minWidth: '250px' }} variant="contained" startIcon={<InventoryIcon sx={{ minHeight: '130px', width: '100%' }} />}>
                                                  Productos
                                              </Button>

                                          </Link>
                                      </Box>
                                  </Grid>

                                  <Grid item xs={12} md={4} >
                                      <Box sx={item}>
                                          <Link href={'/administracion/servicios'}>
                                              <Button sx={{ minWidth: '250px' }} variant="contained" startIcon={<HomeRepairServiceIcon sx={{ minHeight: '130px', width: '100%' }} />}>
                                                  Servicios
                                              </Button>

                                          </Link>

                                      </Box>
                                  </Grid>

                                  <Grid item xs={12} md={4} >
                                      <Box sx={item}>
                                          <Link href={'/administracion/ofertas'}>
                                              <Button sx={{ minWidth: '250px' }} variant="contained" startIcon={<LocalOfferIcon sx={{ minHeight: '130px', width: '100%' }} />}>
                                                  Ofertas
                                              </Button>

                                          </Link>

                                      </Box>
                                  </Grid>
                              </>)
                          }

                      </Grid>

                     
                  </Container>
              </Box>
            </Layout>
        </>
      
  )
}
export default Administracion