import React, { useState } from 'react'
import {
  Typography,
} from '@mui/material'
import { Doc } from '.'
import { quote } from '../../../assets/quote'
import { USD } from '../../../helpers'
import { theme } from '../../../styles/themes'

const Quote = () => {
  // let c = 0
  const totalCost = quote.reduce((acc, { cost }) => acc + cost, 0);

  return (
    <div className='quote-component min-h-screen w-full pt-16 pb-6'>

      <div className='flex flex-col md:hidden gap-6'>
            <div className='flex justify-between px-6'>
                <div className='flex flex-col '>
                    <Typography variant='h6' className='font-bold' sx={{fontFamily: "Playfair Display"}}>
                        Pearl Box
                    </Typography>       
                    <Typography variant='body2'>
                        Quote
                    </Typography>                     
                </div>
                <div className='flex flex-col items-end'>
                    <Typography variant='h6' className='font-bold' sx={{fontFamily: "Playfair Display"}}>
                        Nasser Law
                    </Typography>       
                    <Typography variant='body2'>
                        November 27, 2023
                    </Typography>                     
                </div>
               
            </div>
        
        <div className='px-6 flex flex-col gap-3'>
          <div className='w-full mb-3 flex flex-col gap-3'>
            <Typography variant='caption' className=''>
                Quoted price may be higher or lower. Price is contingent on added or removed features. Deposit required to start project. Remaining balance due upon delivery of finished product and completed &quot;Final Sign-off&quot;.
            </Typography>
            <Typography variant='caption' className=''>
                This quote represents features and functionality to solve the unique challenge for increased digital presence for Nasser Law. Ensuring an easy workflow, user-friendly architecture, connectivity with clients and staff, and most importantly increased digital presence all wrapped up in a beautiful design.
            </Typography>
          </div>
          {
            quote.map(({ name, detail, cost, additional_information}, i) => {
              return <div key={ name + ": " + i } className='flex flex-col gap-1'>
                <div className='flex justify-between '>
                  <Typography variant='body1' className='font-bold'  sx={{fontFamily: "Playfair Display"}}>
                    {name}
                  </Typography>   
                  <Typography variant='body1' className='font-bold'>
                    { USD.format(cost) }
                  </Typography>                  
                </div>

                <Typography variant='body2' className='' >
                  {detail}
                </Typography>
                <Typography variant='caption'  className='pl-6'>
                  {additional_information}
                </Typography>
              </div>
            })
          }

          <div className='flex justify-between '>
            <Typography variant='body1' className='font-bold'>
              Total Investment
            </Typography>   
            <Typography variant='body1' className='font-bold'>
              { USD.format(totalCost) }
            </Typography>                  
          </div>


        </div>
      </div>

      <div className='md:flex md:flex-col hidden gap-6'> 
        
        <div className=' flex  gap-3'>
          <div className='w-3/5 pl-40'>
            <Doc />            
          </div>


          <div className='w-2/5 flex items-center justify-end'>
            <div className='w-4/5 min-h-[25vh] rounded quote-card-component p-3'>
              <Typography variant='h4' sx={{color: theme.palette?.primary.light}} className='gradient-text'>
                Quote
              </Typography>    
              <Typography variant='body1' sx={{color: theme.palette.primary.light, fontStyle: "italic", fontFamily: "Playfair Display"}}>
                Don&apos;t see a must-have feature?
              </Typography>     
              <Typography variant='body1' sx={{color: theme.palette.primary.light}}>
                Let&apos;s discuss how we can implement your requested feature into the project.
              </Typography>              
            </div>
  
          </div>


        </div>
      </div>
      <div className='w-full justify-center flex items-center md:hidden'>
                <Typography variant='overline' className='font-bold'>
                    Quote valid for 30 days
                </Typography>                
            </div>
      <div className=' flex items-center justify-end md:hidden mt-3'>
        <div className='w-5/6 min-h-[15vh] rounded quote-card-component p-3'>
          <Typography variant='h5' sx={{color: theme.palette?.primary.light}} className='gradient-text'>
            Quote
          </Typography>    
          <Typography variant='body1' sx={{color: theme.palette.primary.light, fontStyle: "italic"}}>
            Don&apos;t see a must-have feature?
          </Typography>     
          <Typography variant='body1' sx={{color: theme.palette.primary.light}}>
            Let&apos;s discuss how we can implement your requested feature into the project.
          </Typography>              
        </div>

      </div>



    {/* <div className='md:hidden challenge-overlay absolute w-screen h-screen' /> */}
    </div>
  )
}

export default Quote