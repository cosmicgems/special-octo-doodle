import React, { ReactNode, useEffect} from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import NavbarTwo from './NavbarTwo';
import { useStateContext } from '../../Context/StateContext';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import lightThemeOptions from '../styles/themes/lightThemeOptions';


interface LayoutProps {
  children: ReactNode;
}

const lightTheme = createTheme(lightThemeOptions);

const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <ThemeProvider theme={lightTheme}>
      <div className=' flex flex-col h-screen ' style={{overflowY: 'hidden', overflowX: "hidden"}}>
        <NavbarTwo/>
        <main className='grow overflow-y-auto md:overflow-y-hidden overflow-x-hidden'>{children}</main>
      <Footer/> 
      </div>   
    </ThemeProvider>

  )
}

export default Layout