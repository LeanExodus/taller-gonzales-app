
import { Box, Container, Typography } from "@mui/material";

import { useAxiosServices } from "../hooks/servicio";
import { ServicesContent } from "./ServicesContent";



export const ServicesMain = () => {

    const { servicios, isLoading } = useAxiosServices()

  return (
      <Container component="section" sx={{ mt: 2, mb: 4 }}>
          <Typography variant="h5" align="center" component="h2">
              Servicios
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap' }}>
              {servicios.filter(servicio => servicio.show !== false).map((servicio) => (
                  <ServicesContent key={servicio.id} servicio={servicio}/>
              ))}
          </Box>
      </Container>
  )
}
