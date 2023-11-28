import React from 'react'
import { Features, Pages } from '.'
import { Typography } from '@mui/material'

const Solutions = () => {
  return (
    <div className='solutions-component min-h-screen flex flex-col justify-center items-center gap-6 md:gap-12 w-full '>

      <Typography variant='h4' className='gradient-text'>
        Solutions
      </Typography>

      <div className='flex flex-col gap-6 md:gap-16 w-full'>
        <Pages />

        <Features />        
      </div>


    </div>
  )
}

export default Solutions