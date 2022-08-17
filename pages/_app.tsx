import type { AppProps } from 'next/app'

import '../styles/globals.css'

import { darkTheme, lightTheme } from '../themes'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { UIProvider } from '../context/ui'
import { AuthProvider } from '../context/auth'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />

          <Component {...pageProps} />

        </ThemeProvider>
      </UIProvider>
    </AuthProvider>
    
  )
  
}

export default MyApp
