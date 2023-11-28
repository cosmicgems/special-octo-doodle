import { Typography } from '@mui/material'
import React from 'react'

const Challenge = () => {
  return (
    <div className='challenge-component min-h-screen flex flex-col justify-center'>

      <div className='px-12 flex flex-col gap-3 md:px-[33vw]'>
        <Typography variant='h4' className='gradient-text'>
          Challenge
        </Typography>
        <p>
        Increasing the digital presence and client engagement for Nasser Law by designing and implementing an intuitive, informative, and accessible website that showcases expertise, facilitates client inquiries, and fosters trust among potential clients while ensuring compliance with legal regulations and ethical standards.
        </p>        
      </div>

    </div>
  )
}

export default Challenge