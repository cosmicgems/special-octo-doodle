import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { theme } from '../../styles/themes';


const lightTheme = createTheme(theme);

const Layout = ({children}:any) => {
  return (

    <div className='flex flex-col min-h-screen max-w-screen'>

      <ThemeProvider theme={lightTheme}>
        {/* <Navbar /> */}
        <div className='grow w-full'>
            {children}            
        </div>
        
        <Footer />
      </ThemeProvider>

    </div>
  )
}

export default Layout