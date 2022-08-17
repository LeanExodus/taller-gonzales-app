import { FC } from "react"

import { Box, Card, Stack, Typography , Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Producto } from "../../interfaces"


interface Props{
    producto: Producto
}


const ProductImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

export const ProductCard:FC<Props> = ({producto: {name,img,price}}) => {
  return (
      <>
      
          <Card>
              <Box sx={{ pt: '100%', position: 'relative' }}>
                  
                      <Button
                         
                          size="small"
                          variant="contained"
                          color={'secondary'}
                          sx={{
                              zIndex: 9,
                              top: 16,
                              right: 16,
                              position: 'absolute',
                              textTransform: 'uppercase',
                          }}
                        >
                      {price.toLocaleString('es-CR', { style: 'currency', currency: 'CRC', minimumFractionDigits: 0 }) }
                        </Button>
                          
                   
                  
                  <ProductImgStyle alt={name} src={img} />
              </Box>

              <Stack spacing={2} sx={{ p: 2}} minHeight={'100px'} >
                  
                  <Typography textAlign={'center'} variant="subtitle1" >
                          {name}
                  </Typography>
    
              </Stack>
          </Card>
      </>
  )
}
