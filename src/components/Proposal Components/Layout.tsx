import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { theme } from '../../styles/themes';


const lightTheme = createTheme(theme);

const Layout = ({children}:any) => {
  return (
<ThemeProvider theme={lightTheme}>
    <div className='flex flex-col min-h-screen max-w-screen'>

      
        {/* <Navbar /> */}
        <div className='grow w-full '>
            {children}            
        </div>
        
        <Footer />
      

    </div>
    </ThemeProvider>
  )
}

export default Layout