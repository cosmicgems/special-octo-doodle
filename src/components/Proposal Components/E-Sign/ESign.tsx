import { Typography } from '@mui/material'
import React from 'react'
import { Form } from '.'

const ESign = () => {
  return (
    <div className='esign-component min-h-screen flex flex-col gap-1 justify-center items-center'>
      
      <div className='w-full md:w-2/5 px-6 '>
        <Typography variant='h6' className='gradient-text text-center' sx={{}}>
          Invest In Your Digital Presence.
        </Typography>       
      </div>

        <Typography variant='caption' className='mb-3 text-justify px-6' sx={{}}>
          Feel free to request any features to be added or deleted. Our goal is to craft a bespoke product that exceeds expectations. Upon submission of this form, the Nasser project will be further solidified and a finalized invoice will be drafted.
        </Typography> 

      <div className='w-full flex justify-center'>
        <Form />
      </div>
      
    </div>
  )
}

export default ESign