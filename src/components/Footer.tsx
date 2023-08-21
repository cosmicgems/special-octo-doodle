import React from 'react'
import { GitHub, Instagram, LinkedIn, YouTube, Facebook, } from '@mui/icons-material'
import Link from 'next/link'
import {grey} from '@mui/material/colors'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <footer className='grow-0' style={{fontFamily:'kodchasan'}} >
        <div className='flex flex-row gap-1 justify-center items-center '>
          <div className='grow-0'>
            <Link href='https://www.github.com/cosmicgems'>
              <GitHub sx={{color: grey[500]}}/>              
            </Link>
          </div>
          <div className='grow-0'>
            <Link href='https://www.instagram.com/richnco_liek/'>
              <Instagram sx={{color: grey[500]}}/>              
            </Link>
          </div>
          <div className='grow-0'>
            <Link href='https://www.linkedin.com/in/maliek-davis-a79b80275/'>
              <LinkedIn sx={{color: grey[500]}}/>              
            </Link>
          </div>
          <div className='grow-0'>
            <Link href='https://www.youtube.com/channel/UCF_QOiSVYqteXK1_xIb2lIw'>
              <YouTube sx={{color: grey[500]}}/>              
            </Link>
          </div>
          <div className='grow-0'>
            <Link href='https://www.facebook.com/profile.php?id=100081592810213'>
              <Facebook sx={{color: grey[500]}}/>              
            </Link>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <div className='px-12 text-center m-0'>
            <Typography variant='overline' className='' sx={{fontFamily: 'rajdhani', color: grey[500] }}>&copy; COPYRIGHT 2023 Developed and designed w/&#10084;&#65039; by<span style={{fontFamily:'kodchasan'}}> Maliek Davis</span> </Typography>               
          </div>
        </div>

    </footer>

  )
}

export default Footer