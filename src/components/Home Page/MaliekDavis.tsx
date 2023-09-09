import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Typography } from '@mui/material'
import { blue, red } from '@mui/material/colors'
import { useStateContext } from '../../../Context/StateContext'

const MaliekDavis = () => {
    const [tapTimer, setTapTimer] = useState<any>(null);  
    
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
            setMaliek, 
            hovered, 
            setHovered, 
            vertical, 
            horizontal 
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

    const handleTouchStart = () => {
        setTapTimer(
            setTimeout(()=> {
                handleBackground('maliek'); 
                setHovered(true); 
                setMaliek(true)
            }, 500)
        );

    }

    const handleTouchEnd = () => {
        clearTimeout(tapTimer);
    }

    return (
        <>
        {
            hovered ?
            <>
                {
                    isWorkHoriBg || isWorkVertBg || isAboutHoriBg ||  isAboutVertBg || maliek ?
                        <motion.div 
                        className='mb-3 '
                        initial={{opacity:0.1,}}
                        animate={{opacity:1}}
                        transition={{duration: .5}}
                        >
                            <Typography 
                            component='div' 
                            variant='h1' 
                            sx={{fontFamily: 'rajdhani', 
                                color: isWorkHoriBg || isWorkVertBg ? blue[500] : isAboutHoriBg || isAboutVertBg || maliek ? red[600] : "", 
                                textShadow: '2px 2px #fff', 
                                fontSize: {xs: '5rem'}}} 
                            className=' sm:text-center'>
                                Hello, I&apos;m&nbsp;
                                <motion.span 
                                    onHoverEnd={horizontal ? () => {setHovered(false); setMaliek(false)} : null}  onMouseEnter={horizontal ? () => {handleBackground('maliek');setHovered(true); setMaliek(true)} : null} 
                                    style={{fontFamily: 'kodchasan', fontWeight:700}}
                                    onTouchStart={vertical ? handleTouchStart : null}
                                    onTouchEnd={vertical ? handleTouchEnd : null}
                                    >
                                    Maliek Davis
                                </motion.span>
                            </Typography>
                        </motion.div>   
                        : ""                    
                }
            </>
            :               
            <motion.div 
                className='mb-3 '
                initial={{opacity:0, y:-100, scale: .5}}
                animate={{opacity:1, y:0, scale: 1}}
                transition={{duration: 1}}
                >
                <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', fontSize: {xs: '5rem'}}} className=' sm:text-center'>
                    Hello, I&apos;m&nbsp;
                    <motion.span 
                        onHoverEnd={horizontal ? () => {setHovered(false); setMaliek(false)} : null}  
                        onMouseEnter={horizontal ? () => {handleBackground('maliek'); setHovered(true); setMaliek(true)} : null} 
                        style={{fontFamily: 'kodchasan', fontWeight:700}}
                        onTouchStart={vertical ? handleTouchStart : null}
                        onTouchEnd={vertical ? handleTouchEnd : null}>
                            Maliek Davis
                    </motion.span>
                </Typography> 
            </motion.div>
        }
     
        </>

    )
}

export default MaliekDavis