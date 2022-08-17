import { FC } from 'react';

import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Oferta } from '../../interfaces';

interface Props {
    oferta: Oferta
}

const OfertImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

export const OfertCard: FC<Props> = ({ oferta: { id, title, img } }) => {
  return (
      
      <>
      
          <Card>
              <Box sx={{ pt: '100%', position: 'relative' }}>

                  <OfertImgStyle alt={title} src={img} />
              </Box>

              <Stack spacing={2} sx={{ p: 2 }}>

                  <Typography textAlign={'center'} variant="subtitle2" noWrap>
                      {title}
                  </Typography>

              </Stack>
          </Card>

      
      
        </>
  )
}
