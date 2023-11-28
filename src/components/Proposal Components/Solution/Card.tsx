import React from 'react'
import { Item } from '../../../assets/solutionAssets'
import { Typography } from '@mui/material'

const Page = ({name, detail, image}: Item) => {
  return (
    <div className='card-component w-[95vw] md:w-[300px] rounded flex flex-col gap-2 card-wrapper p-3'>
        <Typography variant='body2' sx={{fontFamily: "Playfair Display"}}>
            {name}
        </Typography>
        <Typography variant='caption' sx={{fontFamily: "Roboto"}}>
            {detail}
        </Typography>
    </div>
  )
}

export default Page