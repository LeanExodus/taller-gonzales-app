import { FC, useContext } from "react"
import Link from "next/link";


import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"

import ContactMailIcon from '@mui/icons-material/ContactMail';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GarageIcon from '@mui/icons-material/Garage';
import { UIContext } from "../../context/ui"
import { AuthContext } from "../../context/auth";

interface Props{
    navItems: {
        text: string;
        href: string;
    }[]
}

export const SideMenu:FC<Props> = ({navItems}) => {
    const { openSideMenu } = useContext(UIContext)
    const { isLoggedIn } = useContext(AuthContext)

  return (
      <Box onClick={openSideMenu} sx={{display:'block'}}>
          
          <List sx={{ }}>
              {navItems.map(({text,href}) => (
                  <ListItem key={href} disablePadding>
                      <Link href={href}>
                          <ListItemButton sx={{ textAlign: 'center' }}>
                              {text == 'Productos' && <GarageIcon fontSize="small" />}
                              {text == 'Contacto' && <ContactMailIcon fontSize="small" />}
                              {text == 'Agendar cita' && <CalendarMonthIcon fontSize="small" />}
                              <ListItemText primary={text} />
                          </ListItemButton>
                      </Link>
                      
                  </ListItem>
              ))}
              {
                  isLoggedIn == true &&
                  <ListItem disablePadding>
                      <Link href={'/administracion'}>
                          <ListItemButton sx={{ textAlign: 'center' }}>
                                  <AdminPanelSettingsRoundedIcon fontSize="small" />
                              <ListItemText primary={'Administración'} />
                          </ListItemButton>
                      </Link>
                  </ListItem>
              }
              
          </List>
      </Box>
  )
}
