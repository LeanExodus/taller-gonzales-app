import { Container, Grid, Skeleton, Typography } from '@mui/material';

import { OfertCard } from "./"

import { useAxiosOferts } from "../hooks/oferta"

export const OfertGrid = () => {

    const { ofertas, isLoading } = useAxiosOferts()

  return (
      <Container>
        
                          
              <Grid container mb={10} spacing={2}>
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
