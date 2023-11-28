import { quote } from '../../../assets/quote'
import { USD } from '../../../helpers'
import { Typography } from '@mui/material'
import React from 'react'

const Document = () => {
    
    const totalCost = quote.reduce((acc, { cost }) => acc + cost, 0);

  return (
    <div className='document-component w-[33vw] h-[42.7vw] overflow-y-auto py-6'>  

        <div className='px-6 flex flex-col gap-3'>
            <div className='flex justify-between mb-3'>
                <div className='flex flex-col '>
                    <Typography variant='body1' className='font-bold' sx={{fontFamily: "Playfair Display"}}>
                        Pearl Box
                    </Typography>       
                    <Typography variant='body2'>
                        Quote
                    </Typography>                     
                </div>
                <div className='flex flex-col items-end'>
                    <Typography variant='body1' className='font-bold' sx={{fontFamily: "Playfair Display"}}>
                        Nasser Law
                    </Typography>       
                    <Typography variant='body2'>
                        November 27, 2023
                    </Typography>                     
                </div>
               
            </div>

            <div className='w-full'>
                <Typography variant='caption' className=''>
                    Quoted price may be higher or lower. Price is contingent on added or removed features. 50% deposit to start project. Remaining balance due upon delivery of finished product and completed &quot;Final Sign-off&quot;.
                </Typography>
            </div>

            {
                quote.map(({ name, detail, cost, additional_information}, i) => {
                return <div key={ name + ": " + i } className='flex flex-col gap-1'>
                    <div className='flex justify-between '>
                        <Typography variant='body1' className='font-bold' sx={{fontFamily: "Playfair Display"}}>
                            {name}
                        </Typography>   
                        <Typography variant='body1' className='font-bold'>
                            { USD.format(cost) }
                        </Typography>                  
                    </div>

                    <Typography variant='body2' className='' >
                        {detail}
                    </Typography>
                    <Typography variant='caption'  className='pl-6'>
                        {additional_information}
                    </Typography>
                </div>
                })
            }

            <div className='flex justify-between mb-2'>
                <Typography variant='body1' className='font-bold'>
                    Total Investment
                </Typography>   
                <Typography variant='body1' className='font-bold'>
                    { USD.format(totalCost) }
                </Typography>                  
            </div>

            <div className='w-full justify-center flex items-center'>
                <Typography variant='overline' className='font-bold'>
                    Quote price valid for 30 days
                </Typography>                
            </div>
            


            </div>
        </div>
    )
}

export default Document