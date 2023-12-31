import { solutionFeatures } from '../../../assets/solutionAssets';
import React, { useRef, useState, useEffect } from 'react'
import { Card } from '.'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Button from '@mui/material/Button';
import { theme } from '../../../styles/themes';
import { Typography } from '@mui/material';

const Features = () => {  


    
const featuresRef = useRef<HTMLDivElement>(null);

const handleHeroNav = (direction:string) => {
  if (featuresRef.current) {
    if (direction === 'left') {
      featuresRef.current.scrollLeft -= 400;
    }
    if (direction === 'right') {
      featuresRef.current.scrollLeft += 400;
    }
  }
};
  return (
    <div className='flex flex-col md:flex-row w-full gap-1'>
      <div className='pl-6 md:pl-0 md:pr-6 w-full md:w-1/5 justify-end items-end flex md:justify-center md:items-center'>
        <div className='quote-card-component rounded-l md:rounded-l-none md:rounded-r w-2/5 md:w-full min-h-[7vh] md:min-h-[15vh] flex justify-start md:justify-end items-center px-3'>
          <Typography variant='h6' className='gradient-text'>
            Features
          </Typography>           
        </div>    
      </div>

      <div ref={featuresRef} className='flex md:w-4/5 overflow-x-auto md:overflow-x-hidden items-center pb-6 pt-2 gap-12 snap-mandatory snap-x'>
          <div className='hidden md:flex absolute items-center h-[65vh]'>
              <Button className=' mr-24' sx={{}}   onClick={() => handleHeroNav('left')}>
                <ArrowCircleLeftRoundedIcon  sx={{fontSize: "3.5rem", color: theme.palette?.primary?.main}} />
              </Button>
          </div>
          <div className='w-[24vw]'/>
        {
          solutionFeatures.map(({name, detail, image}, i) => {
            return (
              <div key={i + name} className='w-full px-3 snap-center'>
                <Card name={name} detail={detail} image={image} />
              </div>
            )
          })
        }
        <div className='w-[24vw]'/>
        <div className='hidden md:flex absolute items-center h-[65vh] right-0'>
            <Button className='' sx={{}}   onClick={() => handleHeroNav('right')}>
              <ArrowCircleRightRoundedIcon  sx={{fontSize: "3.5rem", color: theme.palette?.primary?.main}} />
            </Button>
        </div>             
      </div>
        <div className='md:hidden flex justify-center w-full '>
          <Typography variant='caption' className='text-center gradient-text'>
            SCROLL FOR MORE 
          </Typography>
        </div>
    </div>
  )
}

export default Features