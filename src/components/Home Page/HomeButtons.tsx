import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useStateContext } from '../../../Context/StateContext'
import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/router';

const HomeButtons = () => {
    let timer:any
    const [holdTime, setHoldTime] = useState<number>(0);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);



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
            color,
            setColor,
            vertical, 
            horizontal
        } = useStateContext();
    
    const router = useRouter();
                
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
        }else if(theme === 'maliek' || theme === "" ){
            setIsWorkHoriBg(false);
            setIsAboutVertBg(false);
            setIsWorkVertBg(false);
            setIsAboutHoriBg(false);
        }
    
        }
    


    const handleTouchStart = (button:string) => {  
        
        const startTime = Date.now();

        let timer = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            setHoldTime(elapsedTime);
        }, 100);

        setTimerId(timer);

    }

    const handleTouchEnd = (button:string) => {
        // Clear the timer by using the timerId from state
        clearInterval(timerId);
        console.log(holdTime);

        if(holdTime >= 1000){
            setHovered(true);
            setColor(true); 
            const background = (button != "") ? button : ""
            
            handleBackground(background);
            setHoldTime(0)            
        } else if (holdTime < 1000) {
            setHovered(false);
            setColor(false);
            handleBackground(""); 
            let route:string 
            if( button === "professional" ){
                route = "work"
            } else if ( button === "personal" ) {
                route = "about"
            }
            router.push(`/${route}`)
        }       

        

    };

    const handleTap = (button:string) => {
        if(button === "work"){
            if(holdTime >= 1000){
                handleBackground('professional');
                setHovered(true); 
                setColor(true); 
            } else {
                setHovered(false); 
                setColor(false);
                router.push("/work")
            }            
        } else if (button === "personal") {
            if(holdTime >= 1000){
                handleBackground('personal');
                setHovered(true); 
                setColor(true); 
            } else {
                setHovered(false); 
                setColor(false);
                router.push("/about")
            } 
        }

    }

    return (
        <>
            {
                hovered ?
                    <>
                        {
                            isWorkHoriBg || isWorkVertBg || isAboutHoriBg || isAboutVertBg || maliek ?
                                <>
                                    {
                                        vertical ?
                                            <motion.div 
                                            className='items-center justify-center gap-3'
                                            initial={{opacity:0, scale:.25}}
                                            animate={{ opacity:1, scale: [1] }}
                                            transition={{ ease: "easeOut", duration: .75, delay:1 }}
                                            >
                                                <div className='w-full'>
                                                <Typography variant='h6' component='div' sx={{width:'100%', fontFamily: 'kodchasan', color: grey[500]}} className='mb-1'>
                                                    Tap & Hold, I&apos;m Interactive! 
                                                </Typography>
                                                </div>
                                            </motion.div>                            
                                        :
                                        horizontal ?
                                            <motion.div 
                                            className='items-center justify-center gap-3'
                                            initial={{opacity:0, scale:.25}}
                                            animate={{ opacity:1, scale: [1] }}
                                            transition={{ ease: "easeOut", duration: .75, delay:1 }}
                                            >
                                                <div className='w-full'>
                                                <Typography variant='h6' component='div' sx={{width:'100%', fontFamily: 'kodchasan', color: grey[500]}} className='mb-1'>
                                                    Hover I&apos;m Interactive! 
                                                </Typography>
                                                </div>
                                            </motion.div>
                                        : 
                                        null
                                    }
                                    <motion.div 
                                    className='flex flex-row items-center justify-center gap-3'
                                    initial={{opacity:0.1}}
                                    animate={{ opacity:1}}
                                    transition={{ duration: 1, delay:1 }}
                                    >
                                        <div
                                        onMouseOut={horizontal ? () => {setHovered(false); setColor(false)} : null}  
                                        >
                                        
                                            <Button   
                                            onMouseEnter={ horizontal ?() => {handleBackground('professional');setHovered(true); setColor(true)} : null}
                                            onTouchStart={ vertical ? () => handleTouchStart("professional") : null}
                                            onTouchEnd={vertical ? () => handleTouchEnd("professional") : null}
                                            variant='contained' sx={{fontFamily: 'rajdhani',}}>
                                                My Work
                                            </Button>
                                        
                                        </div>
                                        <div
                                        onMouseOut={horizontal ? () => {setHovered(false); setColor(false)} : null}
                                        >
                                        
                                            <Button 
                                            
                                            onMouseEnter={horizontal ? () => {handleBackground('personal');setHovered(true); setColor(true) } : null} 
                                            onTouchStart={ vertical ? () => handleTouchStart("personal") : null}
                                            onTouchEnd={vertical ? () => handleTouchEnd("personal") : null}
                                            variant='outlined' 
                                            sx={{fontFamily: 'kodchasan', borderColor: grey[50], color: grey[50]}}>
                                                About Me
                                            </Button>
                                        
                                        </div>
                                    </motion.div>      
                                </>
                            :
                            ""
                        }
                    </>
                    :
                    <>
                        {
                            vertical ?
                                <motion.div 
                                className='items-center justify-center gap-3'
                                initial={{opacity:0, scale:.25}}
                                animate={{ opacity:1, scale: [1] }}
                                transition={{ ease: "easeOut", duration: .75, delay:1 }}
                                >
                                    <div className='w-full'>
                                    <Typography variant='h6' component='div' sx={{width:'100%', fontFamily: 'kodchasan', color: grey[500]}} className='mb-1'>
                                        Tap & Hold, I&apos;m Interactive! 
                                    </Typography>
                                    </div>
                                </motion.div>                            
                            :
                            horizontal ?
                                <motion.div 
                                className='items-center justify-center gap-3'
                                initial={{opacity:0, scale:.25}}
                                animate={{ opacity:1, scale: [1] }}
                                transition={{ ease: "easeOut", duration: .75, delay:1 }}
                                >
                                    <div className='w-full'>
                                    <Typography variant='h6' component='div' sx={{width:'100%', fontFamily: 'kodchasan', color: grey[500]}} className='mb-1'>
                                        Hover I&apos;m Interactive! 
                                    </Typography>
                                    </div>
                                </motion.div>
                            : 
                            null
                        }

                        <motion.div 
                        className='flex flex-row items-center justify-center gap-3'
                        initial={{opacity:0, scale:.25}}
                        animate={{ opacity:1, scale: [1, 1.5, 1, 1.5, 1] }}
                        transition={{ ease: "easeOut", duration: .75, delay:1 }}
                        >
                            <motion.div
                            onHoverEnd={horizontal ? () => {setHovered(false); setColor(false)} : null}  
                            >
                                

                                    <Button  
                                    onMouseEnter={ horizontal ?() => {handleBackground('professional');setHovered(true); setColor(true)} : null}
                                    onTouchStart={ vertical ? () => handleTouchStart("professional") : null}
                                    onTouchEnd={vertical ? () => handleTouchEnd("professional") : null}
                                    variant='contained' 
                                    sx={{fontFamily: 'rajdhani'}}>
                                        My Work
                                    </Button>
                            
                            </motion.div>
                            <motion.div
                            onHoverEnd={horizontal ? () => {setHovered(false); setColor(false)} : null }
                            >
                                
                                    <Button 
                                    onMouseEnter={horizontal ? () => {handleBackground('personal');setHovered(true); setColor(true) } : null} 
                                    onTouchStart={ vertical ? () => handleTouchStart("personal") : null}
                                    onTouchEnd={vertical ? () => handleTouchEnd("personal") : null}
                                    variant='outlined' 
                                    sx={{fontFamily: 'kodchasan'}}>
                                        About Me
                                    </Button>
                                
                            </motion.div>
                        </motion.div>             
                    </>
            }

    
        </>
    )
}

export default HomeButtons