import React from 'react'
import { Features, Pages } from '.'
import { Typography } from '@mui/material'

const Solutions = () => {
  return (
    <div className='solutions-component min-h-screen flex flex-col justify-center items-center gap-6 md:gap-12 w-full '>
    <div className='md:hidden solutions-overlay absolute w-screen h-screen' />

      <Typography variant='h4' className='gradient-text mb-6 '>
        Solutions
      </Typography>

      <div className='flex flex-col gap-6 md:gap-16 w-full z-10'>
        <Pages />

        <Features />        
      </div>


    </div>
  )
}

export default Solutions