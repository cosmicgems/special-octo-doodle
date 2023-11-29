import React from 'react'
import { Typography, CardMedia } from '@mui/material'
// import moment from 'moment';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Home = () => {
  const currentDate = new Date();
  const date = currentDate.toISOString()
  
  return (
    <div className='home-component min-h-screen flex md:justify-end md:items-center '>
      <div className='md:hidden home-overlay absolute w-screen h-screen' />
      
      <div className='z-10 w-full flex flex-col md:hidden justify-center items-center sm:hidden gap-6 pt-20 pb-6'>

        <div className=' rounded w-[85vw]  flex flex-col gap-3 justify-center items-center '>
          <Typography variant='h3' sx={{}} className='gradient-text'>
            Pearl Box 
          </Typography>
          <Typography variant='h5' sx={{}} className='gradient-text-home text-center'>
            Project Nasser Law
          </Typography>
          <p>
            November 27, 2023
          </p>
        </div>
        
        <div className='rounded w-[85vw]  flex flex-col gap-1 justify-center items-center p-3'>
          <Typography variant='body1' className='font-bold'>
            Prepared For
          </Typography>
          <Typography variant='body2' className='font-bold'>
            Attorney Mohammed Nasser
          </Typography>
          <div className='flex gap-1 items-center'>
            <SmartphoneIcon />
            <Typography variant='body2'>
              (586) 625-3154
            </Typography>
          </div>
        </div>
        
        <div className='rounded w-[85vw] flex flex-col gap-1 justify-center items-center p-3'>
          <Typography variant='body1' className='font-bold'>
            Prepared By
          </Typography>
          <Typography variant='body2' className='font-bold'>
            Maliek Davis
          </Typography>
          <div className='flex gap-1'>
            <SmartphoneIcon />
            <Typography variant='body2'>
              (248) 392-0942
            </Typography>
          </div>
          <div className='flex gap-1'>
            <MailOutlineIcon />
            <Typography variant='body2'>
              MALIEKJDAVIS24@GMAIL.COM
            </Typography>
          </div>
        </div>

      </div>

      <div className=' hidden w-full   md:flex gap-3'>

        <div className='w-1/2 px-12 flex justify-center'>
          
          <div className='rounded p-3 flex flex-col gap-3 justify-center items-center'>
            <Typography variant='h1' className='gradient-text'>
              Pearl Box
            </Typography>
            

          </div>  

        </div>

        <div className='business-card w-1/2 rounded p-3 flex'>
          
          <div className='flex flex-col  pl-6 gap-3'>
            
              <Typography variant='h4'>
                Nasser Law Project Proposal
              </Typography>
            <Typography sx={{fontFamily: 'Playfair Display'}}>
              November 28, 2023
            </Typography>
            <div>
              <Typography variant='h6'>
                Prepared By
              </Typography>
              <Typography>
                Maliek Davis
              </Typography>              
            </div>


          <div className='flex gap-1'>
            <SmartphoneIcon />
            <Typography variant='body1' className=''>
              (248) 392-0942
            </Typography>
          </div>
          <div className='flex gap-1'>
            <MailOutlineIcon />
            <Typography variant='body1' className=''>
              MALIEKJDAVIS24@GMAIL.COM
            </Typography>
          </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Home