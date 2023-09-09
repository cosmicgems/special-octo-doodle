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
      <div className=' flex flex-col h-screen ' style={{overflowY: 'hidden'}}>
        <NavbarTwo/>
        <main className='grow overflow-y-hidden overflow-x-hidden'>{children}</main>
      <Footer/> 
      </div>   
    </>

  )
}

export default Layout