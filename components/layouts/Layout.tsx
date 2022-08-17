import { FC } from "react"
import Head from "next/head"

import { Box } from "@mui/material"
import { Footer, Navbar } from "../ui"

interface Props{
    title?: string
    children?: React.ReactNode
}

export const Layout: FC<Props> = ({ children,title = 'Taller Gonzales'}) => {
  return (
    
    <Box >
        <Head>
            <title> {title} </title>
        </Head>

        <Navbar/>
        
        <Box sx={{ padding: '10px 20px', display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
            {children}
        </Box>
        
        <Footer/>

    </Box>
  )
}
