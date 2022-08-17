import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0b0f13'
      
    },
    primary:{
      main: '#b4dbd5'
    },
    secondary:{
        main: '#6a6bc3'
    },
    success:{
      main: '#1ac151'
    },
    warning:{
      main: '#f7ce16'
    },
    error:{
        main: '#fe153f'
    }, 
    info:{
       main: '#f94b56'
    }
  },

  components:{
      MuiAppBar:{
        defaultProps:{elevation:0},
        styleOverrides: {
          root:{
            backgroundColor: '#0b0f13',
            position:'fixed'
          }
          
        }
        
      },
      
  }
  
});


