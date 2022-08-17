
import { Box, Chip, Container, Divider, Typography } from "@mui/material";

import { useAxiosServices } from "../hooks/servicio";
import { ServicesContent } from "./ServicesContent";



export const ServicesMain = () => {

    const { servicios, isLoading } = useAxiosServices()

  return (
      <Container component="section" sx={{ mt: 2, mb: 10 }}>
          <Divider>
              <Chip label={<Typography variant="h4" align="center" component="h2">
                  Servicios
              </Typography>} />

          </Divider>
          <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap' }}>
              {servicios.filter(servicio => servicio.show !== false).map((servicio) => (
                  <ServicesContent key={servicio.id} servicio={servicio}/>
              ))}
          </Box>
      </Container>
  )
}
