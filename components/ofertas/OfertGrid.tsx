import { Chip, Container, Divider, Grid, Skeleton, Typography } from '@mui/material';

import { OfertCard } from "./"

import { useAxiosOferts } from "../hooks/oferta"

export const OfertGrid = () => {

    const { ofertas, isLoading } = useAxiosOferts()

  return (
      <Container>
              <Divider sx={{ mt: 2 }}>
                <Chip label={<Typography variant="h4" align="center" component="h2">
                  Ofertas
                </Typography>} />

              </Divider>
                          
              <Grid container mt={1} mb={10} spacing={2}>
              {ofertas.filter(oferta => oferta.show !== false).map((oferta) => (
                      <Grid item key={oferta.id} xs={12} sm={6} md={4}  >
                          {
                          isLoading ?
                            
                            (<Skeleton variant="rectangular" width={'100%'} height={350} />)
                            :
                            (<OfertCard oferta={oferta} />)
                           
                          }
                          
                      </Grid>
                  ))}

              </Grid>
          
      </Container>
  )
}
