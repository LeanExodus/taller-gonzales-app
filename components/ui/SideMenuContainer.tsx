import { Drawer } from "@mui/material"
import { FC, useContext } from "react"
import { UIContext } from "../../context/ui"

interface Props{
    children?: React.ReactNode
}

export const SideMenuContainer:FC<Props> = ({children}) => {

    const { sidemenuOpen, closeSideMenu } = useContext(UIContext)

  return (
      <Drawer
          
          variant="temporary"
          open={sidemenuOpen}
          onClose={closeSideMenu}
          ModalProps={{
              keepMounted: true, 
          }}
          sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'content-box', width: 240 },
              
              
          }}
      >
          {children}
      </Drawer>
  )
}
