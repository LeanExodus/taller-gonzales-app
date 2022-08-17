import { FC } from "react";

import { Box, ButtonBase, styled, Typography } from "@mui/material";

import { Servicio } from "../../interfaces";

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
    },
    [theme.breakpoints.down('md')]: {
        width: '50% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

interface Props{
    servicio: Servicio
}

export const ServicesContent: FC<Props> = ({ servicio: { id, name, img } }) => {
  return (
      <ImageIconButton
          key={id}
          style={{
              width: '25%',
          }}
      >
          <Box
              sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 40%',
                  backgroundImage: `url(${img})`,
              }}
          />
          <ImageBackdrop className="imageBackdrop" />
          <Box
              sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'common.white',
              }}
          >
              <Typography
                  component="h3"
                  variant="subtitle2"
                  color="inherit"
                  className="imageTitle"
              >
                  {name}
                  <div className="imageMarked" />
              </Typography>
          </Box>
      </ImageIconButton>
  )
}
