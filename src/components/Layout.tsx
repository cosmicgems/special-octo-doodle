import React, { ReactNode, useEffect} from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import NavbarTwo from './NavbarTwo';
import { useStateContext } from '../../Context/StateContext';
useStateContext

interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <>
      <div className=' flex flex-col min-h-screen'>
        <NavbarTwo/>
        <main className='grow'>{children}</main>
      <Footer/> 
      </div>   
    </>

  )
}

export default Layout