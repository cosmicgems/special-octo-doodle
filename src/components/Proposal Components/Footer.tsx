import { Instagram, YouTube, Facebook, Twitter } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-component flex flex-col justify-center items-center gap-1 py-3 '>

      {/* <div className='flex gap-3'>
        <Instagram />
        <Twitter />
        <YouTube />
        <Facebook />
      </div> */}
        <Typography variant='caption' className='font-bold'>
          2023 Pearl Box Co&#169; All Rights Reserved
        </Typography>
    </div>
  )
}

export default Footer