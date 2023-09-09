import React from 'react'
import { motion } from "framer-motion"
import { useStateContext } from '../../../Context/StateContext'
import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const HomeButtons = () => {

    const {  
            setIsWorkHoriBg, 
            setIsWorkVertBg, 
            setIsAboutHoriBg, 
            setIsAboutVertBg,
            isAboutHoriBg, 
            isAboutVertBg, 
            isWorkHoriBg, 
            isWorkVertBg, 
            orientation, 
            maliek, 
            hovered, 
            setHovered,
            setColor
        } = useStateContext();

                
    const handleBackground = (theme:string) => {
        if(theme === 'professional'){
            if(orientation === 'horizontal'){
            setIsWorkHoriBg(true);
            setIsAboutVertBg(false);
            setIsWorkVertBg(false);
            setIsAboutHoriBg(false);
            } else if (orientation === 'vertical') {
            setIsWorkHoriBg(false);
            setIsAboutVertBg(false);
            setIsWorkVertBg(true);
            setIsAboutHoriBg(false);
            }
        } else if(theme === 'personal'){
            if(orientation === 'horizontal'){
            setIsWorkHoriBg(false);
            setIsAboutVertBg(false);
            setIsWorkVertBg(false);
            setIsAboutHoriBg(true);
            } else if (orientation === 'vertical') {
            setIsWorkHoriBg(false);
            setIsAboutVertBg(true);
            setIsWorkVertBg(false);
            setIsAboutHoriBg(false);
            } 
            }else if(theme === 'maliek'){
            setIsWorkHoriBg(false);
            setIsAboutVertBg(false);
            setIsWorkVertBg(false);
            setIsAboutHoriBg(false);
            }
        console.log(isWorkHoriBg);
    
        }

    return (
        <>
            {
                hovered ?
                    <>
                        {
                            isWorkHoriBg || isWorkVertBg || isAboutHoriBg || isAboutVertBg || maliek ?
                                <>
                                    <motion.div 
                                    className='items-center justify-center gap-3'
                                    initial={{opacity:0, scale:.25}}
                                    animate={{ opacity:1, scale: [1] }}
                                    transition={{ ease: "easeOut", duration: .75, delay:1 }}
                                    >
                                    <div className='w-full'>
                                        <Typography variant='h6' component='div' sx={{width:'100%', fontFamily: 'kodchasan', color: grey[500]}} className='mb-1'>
                                        Hover or Tap&Hold, I&apos;m Interactive! 
                                        </Typography>
                                    </div>
                                    </motion.div>
                                    <motion.div 
                                    className='flex flex-row items-center justify-center gap-3'
                                    initial={{opacity:0.1}}
                                    animate={{ opacity:1}}
                                    transition={{ duration: 1, delay:1 }}
                                    >
                                        <div
                                        onMouseOut={() => {setHovered(false); setColor(false)}}  
                                        >
                                        <Link href="/work">
                                            <Button  onMouseEnter={() => {
                                                handleBackground('professional');
                                                setHovered(true); setColor(true) // Set hover status to true
                                            }}
                                            variant='contained' sx={{fontFamily: 'rajdhani',}}>
                                                My Work
                                            </Button>
                                        </Link>
                                        </div>
                                        <div
                                        onMouseOut={() => {setHovered(false); setColor(false)}}
                                        >
                                        <Link href="/about">
                                            <Button onMouseEnter={() => { handleBackground('personal'); setHovered(true); setColor(true)}} 
                                            variant='outlined' 
                                            sx={{fontFamily: 'kodchasan', borderColor: grey[50], color: grey[50]}}>
                                                About Me
                                            </Button>
                                        </Link>
                                        </div>
                                    </motion.div>      
                                </>
                            :
                            ""
                        }
                    </>
                    :
                    <>
                        <motion.div 
                        className='items-center justify-center gap-3'
                        initial={{opacity:0, scale:.25}}
                        animate={{ opacity:1, scale: [1] }}
                        transition={{ ease: "easeOut", duration: .75, delay:1 }}
                        >
                            <div className='w-full'>
                            <Typography variant='h6' component='div' sx={{width:'100%', fontFamily: 'kodchasan', color: grey[500]}} className='mb-1'>
                                Hover or Tap&Hold, I&apos;m Interactive! 
                            </Typography>
                            </div>
                        </motion.div>
                        <motion.div 
                        className='flex flex-row items-center justify-center gap-3'
                        initial={{opacity:0, scale:.25}}
                        animate={{ opacity:1, scale: [1, 1.5, 1, 1.5, 1] }}
                        transition={{ ease: "easeOut", duration: .75, delay:1 }}
                        >
                            <motion.div
                            onHoverEnd={() => {setHovered(false); setColor(false)}}  
                            >
                                <Link href="/work">
                                    <Button  onMouseEnter={() => {
                                        handleBackground('professional');
                                        setHovered(true); setColor(true) 
                                    }}
                                    variant='contained' 
                                    sx={{fontFamily: 'rajdhani'}}>
                                        My Work
                                    </Button>
                                </Link>
                            </motion.div>
                            <motion.div
                            onHoverEnd={() => {setHovered(false); setColor(false)}}
                            >
                                <Link href="/about">
                                    <Button onMouseEnter={() => {handleBackground('personal');setHovered(true); setColor(true) }} variant='outlined' sx={{fontFamily: 'kodchasan'}}>
                                        About Me
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>             
                    </>
            }

    
        </>
    )
}

export default HomeButtons