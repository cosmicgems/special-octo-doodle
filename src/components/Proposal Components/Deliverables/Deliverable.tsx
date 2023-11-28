import { Deliverable } from '../../../assets/deliverableAssets'
import { Typography } from '@mui/material'
import React from 'react'
import { grey, indigo, } from '@mui/material/colors'

const Deliverable = ({name, detail, feature}: Deliverable) => {
  return (
    <div className='deliverable-card w-[85vw] md:w-[25vw] p-3 card-wrapper rounded'>
        <div className='flex flex-col gap-3'>
            <Typography sx={{color: indigo[800], fontFamily: "Playfair Display"}}>
                {name}
            </Typography>
            <Typography variant='body1'  sx={{color: indigo[800]}}>
                {detail}
            </Typography>
            {
                feature && 
                <ul>
                    {
                        feature.map((f, i) => (
                            <li key={i + ": " + f.name}>
                                <Typography variant='body2' sx={{color: indigo[800]}}>
                                    {f.name}
                                </Typography>                                
                            </li>

                        ))
                    }
                </ul>
            }
        </div>
    </div>
  )
}

export default Deliverable