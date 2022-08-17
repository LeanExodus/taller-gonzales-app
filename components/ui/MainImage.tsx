
import { Box, Grid, Paper, Container } from '@mui/material';


export const MainImage = () => {
  return (
    <Container>
      <Paper
          sx={{
              position: 'relative',
              height:'250px',
              backgroundColor: 'grey.800',
              color: '#fff',
              mb: 2,
              mt: 8,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(https://source.unsplash.com/random/?mecanico)`,
          }}
      >
          
          <img style={{ display: 'none' }} src='https://source.unsplash.com/random/?mecanico' alt='main image description' />
          <Box
              sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0,0,0,.3)',
              }}
          />
          <Grid container>
              <Grid item md={6}>
                  <Box
                      sx={{
                          position: 'relative',
                          p: { xs: 3, md: 6 },
                          pr: { md: 0 },
                      }}
                  >
                     
      
                  </Box>
              </Grid>
          </Grid>
    </Paper>

        
</Container>
  )
}
