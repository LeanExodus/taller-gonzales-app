import { useState } from "react"

import { Backdrop, CircularProgress, Container, Grid, Skeleton } from "@mui/material"

import { useAxiosProducts } from "../hooks/producto"
import { ProductCard } from "./ProductCard"



export const ProductGrid = () => {

    const { productos, isLoading } = useAxiosProducts()

    

  return (
      <Container component="main" maxWidth="xl" sx={{minHeight:'100vh'}}>
          <Grid container mt={12} spacing={2} >

              
                   <Backdrop
                      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                      open={isLoading}
                    
                  >
                      <CircularProgress color="inherit" />
                  </Backdrop>
              
              {productos.filter(producto => producto.show !== false).map((producto ) => (

                  <Grid item key={producto.id} xs={12} sm={6} md={4} lg={2}>
                      
                       <ProductCard producto={producto} />
                       

                  </Grid>

              ))}
          </Grid>
     </Container>
              
  )
}
