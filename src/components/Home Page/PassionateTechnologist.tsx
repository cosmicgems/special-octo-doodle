import { Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion"
import { grey, red } from '@mui/material/colors'
import { useStateContext } from '../../../Context/StateContext'

const PassionateTechnologist = () => {
    const { 
            isAboutHoriBg, 
            isAboutVertBg, 
            isWorkHoriBg, 
            isWorkVertBg,
            maliek, 
            hovered, 
        } = useStateContext();



    return (
            <>
                {
                    hovered ?
                        <> 
                            {
                                isAboutHoriBg || isAboutVertBg || isWorkHoriBg || isWorkVertBg || maliek ?
                                    <motion.div 
                                    className='mb-3 lg:px-24'
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration: 1}}
                                    >
                                        <Typography variant='h5' sx={{color:grey[50], fontFamily: 'rajdhani', }} component='div' className=' md:px-24 sm:text-center ' >
                                            Explore my portfolio — a journey of a self-taught technologist &nbsp;
                                            <motion.span
                                            initial={false}
                                            animate={{ scale: [1, 1.5, 1, 1.5, 1] }}
                                            transition={{delay:1 }}
                                            >
                                                <Typography className='inline' variant='h5' sx={{color:red[500], fontFamily:'kodchasan'}}>passionate </Typography>                                            
                                            </motion.span>
                                            about leveraging computer science to enhance lives through innovation.
                                        </Typography>
                                    </motion.div>  
                                :
                                ""
                            }                    
                        </>

                
                    :
                    <motion.div 
                    className='mb-3 lg:px-24'
                    initial={{opacity:0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 1, delay:0.25}}
                    >
                        <Typography 
                            variant='h5' 
                            component='div' 
                            className=' md:px-24 sm:text-center' 
                            sx={{fontFamily: 'rajdhani'}} >
                            Explore my portfolio — a journey of a self-taught technologist&nbsp;
                            <Typography className='inline' variant='h5' sx={{color:red[500], fontFamily:'kodchasan'}}>passionate </Typography>
                            about leveraging computer science to enhance lives through innovation.
                        </Typography>
                    </motion.div>                
                }

            </>

    )
}

export default PassionateTechnologist