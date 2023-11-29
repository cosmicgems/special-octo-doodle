import { solutionPages } from '../../../assets/solutionAssets';
import React, { useRef, useState, useEffect } from 'react'
import { Card } from '.'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Button from '@mui/material/Button';
import { theme } from '../../../styles/themes';
import { Typography } from '@mui/material';

const Pages = () => {    
    

    
const pagesRef = useRef<HTMLDivElement>(null);

const handleHeroNav = (direction:string) => {
  if (pagesRef.current) {
    if (direction === 'left') {
      pagesRef.current.scrollLeft -= 400;
    }
    if (direction === 'right') {
      pagesRef.current.scrollLeft += 400;
    }
  }
};

  return (
    <div className='flex flex-col md:flex-row md:justify-center md:items-center w-full gap-1'>
      <div className='pr-6 w-2/5 md:w-1/5 md:flex md:justify-center md:items-center'>
        <div className='quote-card-component rounded-r w-full min-h-[7vh] md:min-h-[15vh] flex justify-end items-center px-3'>
          <Typography variant='h6' className='gradient-text'>
            Pages
          </Typography>           
        </div>
       
      </div>

      <div ref={pagesRef} className='flex md:w-4/5 overflow-x-auto md:overflow-x-hidden items-center pb-6 pt-2 gap-12 snap-x snap-mandatory '>
          <div className='hidden lg:flex absolute items-center h-[65vh]'>
              <Button className=' mr-24' sx={{}}   onClick={() => handleHeroNav('left')}>
                <ArrowCircleLeftRoundedIcon  sx={{fontSize: "3.5rem", color: theme.palette?.primary?.main}} />
              </Button>
          </div>
          <div className='w-[24vw]'/>
        {
          solutionPages.map(({name, detail, image}, i) => {
            return (
              <div key={i + name} className='w-full  snap-center'>
                <Card name={name} detail={detail} image={image} />
              </div>
            )
          })
        }
        <div className='w-[24vw]'/>
        <div className='hidden lg:flex absolute items-center h-[65vh] right-0'>
            <Button className='' sx={{}}   onClick={() => handleHeroNav('right')}>
              <ArrowCircleRightRoundedIcon  sx={{fontSize: "3.5rem", color: theme.palette?.primary?.main}} />
            </Button>
        </div>        
      </div>
        <div className='md:hidden flex justify-center w-full gradient-text '>
          <Typography variant='caption' className='text-center '>
            SCROLL FOR MORE 
          </Typography>
        </div>

    </div>
  )
}

export default Pages