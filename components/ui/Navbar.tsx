import React, { useContext } from "react";
import Link from "next/link";


import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


import { UIContext } from "../../context/ui";
import { SideMenuContainer, SideMenu, ActiveLink } from "./";
import { AuthContext } from "../../context/auth";



const navItems = [
    {
        text: 'Productos',
        href: '/productos'
    },
    {
        text: 'Contacto',
        href: '/contacto'
    },
    {
        text: 'Agendar cita',
        href: '/cita'
    },
       
]


export const Navbar = () => {

  const {openSideMenu} = useContext(UIContext)
  const {isLoggedIn} = useContext(AuthContext)

  return (
    <>
      <Box sx={{ display: 'flex' }}>
          <AppBar component="nav" >
              <Toolbar >
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={openSideMenu}
                      sx={{ mr: 2, display: { md: 'none' } }}
                  >
                      <MenuOutlinedIcon />
                  </IconButton>

                  <Link  href='./' passHref>
                      <Typography
                          ml={2}
                          variant="h5"
                          component="a"
                          sx={{
                            display: {xs:'flex',sm: 'block' } 
                          }}
                        
                      >
                          Taller Gonzales
                      </Typography>
                        
                  </Link>
                  
                  <Box sx={{ display: {flexGrow:1 ,sm: 'block' } }}></Box>

                  <Box  sx={{ display: { xs: 'none', md: 'block' } }} mr={2}>
                          
                      {navItems.map(({text, href}) => (
                        
                        
                        <ActiveLink key={href} text={text} href={href}/>
                      ))}

                  </Box>
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>

                      {
                        isLoggedIn && (
                            <ActiveLink text={'Adminitración'} href={'/administracion'} />
                        )   
                      }

                  </Box>
              </Toolbar>
          </AppBar>
          <Box component="nav">
              <SideMenuContainer>
                  <SideMenu navItems={navItems} />
              </SideMenuContainer>
          </Box>
      </Box>
    </>
  )
}
