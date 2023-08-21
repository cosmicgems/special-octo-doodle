import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { motion } from "framer-motion"
import { useStateContext } from '../../Context/StateContext'
import { CardMedia, Typography } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import { blue, grey, orange, red } from '@mui/material/colors'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const videoRef = useRef(null);

  
  
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState(false);
  
  const {  setIsWorkHoriBg, setIsWorkVertBg, setIsAboutHoriBg, setIsAboutVertBg,isAboutHoriBg, isAboutVertBg, isWorkHoriBg, isWorkVertBg, orientation} = useStateContext();
  
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const videoSource = isWorkHoriBg
        ? '/backgrounds/horizontal_code.mp4'
        : isWorkVertBg
        ? '/backgrounds/vertical_code.mp4'
        : isAboutHoriBg
        ? '/backgrounds/horizontal_octopus.mp4'
        : isAboutVertBg
        ? '/backgrounds/vertical_octopus.mp4'
        : '';

      video.src = videoSource;
      video.load(); // Preload the video data
    }
  }, [isWorkHoriBg, isWorkVertBg, isAboutHoriBg, isAboutVertBg]);

  
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
      }
    console.log(isWorkHoriBg);
    
  }

  const handleMouseLeave = () => {
    setIsAboutHoriBg(false);
    setIsAboutVertBg(false);
    setIsWorkHoriBg(false);
    setIsWorkVertBg(false);
  }

  return (
    <>
    <div className="video-container">

      {hovered ?
        <>
            <video autoPlay muted loop className="background-video" ref={videoRef} preload="auto">
              <source src={`${isWorkHoriBg ? "/backgrounds/horizontal_code.mp4" : isWorkVertBg ?  "/backgrounds/vertical_code.mp4" : isAboutHoriBg ?  "/backgrounds/horizontal_octopus.mp4" : isAboutVertBg ?  "/backgrounds/vertical_octopus.mp4" : "" }`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 0.75}} className="overlay"></motion.div></>  : null
      }

    </div>
    <main
      className={`flex  flex-col items-center md:justify-center h-[80vh] sm:h-max  px-4 md:px-14 lg:px-24 lg:mt-24   ${inter.className}`}
      style={{fontFamily: 'rajdhani'}}
    >


        {isWorkHoriBg && hovered ?
              <motion.div 
              className='mb-3 '
              initial={{opacity:0, y:-100, scale: .5}}
              animate={{opacity:1, y:0, scale: 1}}
              transition={{duration: 0.75}}
              >
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', color:blue[500], textShadow: '2px 2px #fff', fontSize: {xs: '4rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
          </Typography>
              </motion.div> : null
        }
        {isWorkVertBg && hovered ?
              <motion.div 
              className='mb-3 '
              initial={{opacity:0, y:-100, scale: .5}}
              animate={{opacity:1, y:0, scale: 1}}
              transition={{duration: 0.75}}
              >
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', color:blue[500], textShadow: '2px 2px #fff', fontSize: {xs: '4rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
          </Typography>
              </motion.div> : null
        }
        {isAboutHoriBg && hovered ?
              <motion.div 
              className='mb-3 '
              initial={{opacity:0, y:-100, scale: .5}}
              animate={{opacity:1, y:0, scale: 1}}
              transition={{duration: 0.75}}
              >
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', color:red[500], textShadow: '2px 2px #fff', fontSize: {xs: '4rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
          </Typography>
              </motion.div> : null
        }
        {isAboutVertBg && hovered ?
              <motion.div 
              className='mb-3 '
              initial={{opacity:0, y:-100, scale: .5}}
              animate={{opacity:1, y:0, scale: 1}}
              transition={{duration: 0.75}}
              >
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', color:red[500], textShadow: '2px 2px #fff', fontSize: {xs: '4rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
          </Typography>
              </motion.div> : null
        }
        {!color && !hovered  ?
              <motion.div 
              className='mb-3 '
              initial={{opacity:0, y:-100, scale: .5}}
              animate={{opacity:1, y:0, scale: 1}}
              transition={{duration: 1}}
              >
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', fontSize: {xs: '4rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
          </Typography> 
              </motion.div>: null
        }



      {isWorkHoriBg && hovered ?
        <motion.div 
        className='mb-3 lg:px-24'
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1, delay:0.25}}
        >
          <Typography variant='h5' sx={{color:grey[50], fontFamily: 'rajdhani', }} component='div' className=' md:px-24 sm:text-center ' >
          Explore my portfolio — a journey of a self-taught technologist <Typography variant='span' sx={{color:red[500]}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
          </Typography>
        </motion.div> : null
      }
      {isWorkVertBg && hovered ?
        <motion.div 
        className='mb-3 lg:px-24'
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1, delay:0.25}}
        >
          <Typography variant='h5' sx={{color:grey[50], fontFamily: 'rajdhani',}} component='div' className=' md:px-24 sm:text-center ' >
          Explore my portfolio — a journey of a self-taught technologist <Typography variant='span' sx={{color:red[500]}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
          </Typography>
        </motion.div> : null
      }
      {isAboutHoriBg && hovered ?
        <motion.div 
        className='mb-3 lg:px-24'
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1, delay:0.25}}
        >
          <Typography variant='h5' sx={{color:grey[50], fontFamily: 'rajdhani', }} component='div' className=' md:px-24 sm:text-center' >
          Explore my portfolio — a journey of a self-taught technologist <Typography variant='span' sx={{color:red[500]}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
          </Typography>
        </motion.div> : null
      }
      {isAboutVertBg && hovered ?
        <motion.div 
        className='mb-3 lg:px-24'
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1, delay:0.25}}
        >
          <Typography variant='h5' sx={{color:grey[50], fontFamily: 'rajdhani',}} component='div' className=' md:px-24 sm:text-center' >
          Explore my portfolio — a journey of a self-taught technologist <Typography variant='span' sx={{color:red[500]}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
          </Typography>
        </motion.div> : null
      }
      {!color && !hovered  ?
        <motion.div 
        className='mb-3 lg:px-24'
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1, delay:0.25}}
        >
          <Typography variant='h5' component='div' className=' md:px-24 sm:text-center' sx={{fontFamily: 'rajdhani'}} >
          Explore my portfolio — a journey of a self-taught technologist <Typography variant='span' sx={{color:red[500]}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
          </Typography>
        </motion.div> : null
      }

      {isWorkHoriBg && hovered ?
        <motion.div 
        className='flex flex-row items-center justify-center gap-3'
        initial={{opacity:0, scale:.25}}
        animate={{ opacity:1, scale: 1 }}
        transition={{ duration: .75, delay:1 }}
        >
        <motion.div
         onHoverEnd={() => {setHovered(false); setColor(false)}}  
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
        </motion.div>
        <motion.div
           onHoverEnd={() => {setHovered(false); setColor(false)}}
        >
          <Link href="/about"><Button onMouseEnter={() => {
                handleBackground('personal');
                setHovered(true); setColor(true) // Set hover status to true
              }} variant='outlined' sx={{fontFamily: 'kodchasan', borderColor: grey[50], color: grey[50]}}>About Me</Button></Link>
        </motion.div>
        </motion.div> : null

      }
      {isWorkVertBg && hovered ?
              <motion.div 
      className='flex flex-row items-center justify-center gap-3'
      initial={{opacity:0, scale:.25}}
      animate={{ opacity:1, scale: 1 }}
      transition={{ ease: "easeOut", duration: .75, delay:1 }}
      >
        <motion.div
         onHoverEnd={() => {setHovered(false); setColor(false)}}  
        >
          <Link href="/work">
            <Button  onMouseEnter={() => {
                handleBackground('professional');
                setHovered(true); setColor(true) // Set hover status to true
              }}
              variant='contained' sx={{fontFamily: 'rajdhani', }}>
                My Work
            </Button>
          </Link>
        </motion.div>
        <motion.div
           onHoverEnd={() => {setHovered(false); setColor(false)}}
        >
          <Link href="/about">
            <Button onMouseEnter={() => {
                handleBackground('personal');
                setHovered(true); setColor(true) // Set hover status to true
              }} variant='outlined' sx={{fontFamily: 'kodchasan', borderColor: grey[50], color: grey[50]}}>About Me</Button></Link>
        </motion.div>
      </motion.div> : null

      }
      {isAboutHoriBg && hovered ?
              <motion.div 
      className='flex flex-row items-center justify-center gap-3'
      initial={{opacity:0, scale:.25}}
      animate={{ opacity:1, scale: 1 }}
      transition={{ ease: "easeOut", duration: .75, delay:1 }}
      >
        <motion.div
         onHoverEnd={() => {setHovered(false); setColor(false)}}  
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
        </motion.div>
        <motion.div
           onHoverEnd={() => {setHovered(false); setColor(false)}}
        >
          <Link href="/about"><Button onMouseEnter={() => {
                handleBackground('personal');
                setHovered(true); setColor(true) // Set hover status to true
              }} variant='outlined' sx={{fontFamily: 'kodchasan', borderColor: grey[50], color: grey[50]}}>About Me</Button></Link>
        </motion.div>
      </motion.div> : null

      }
      {isAboutVertBg && hovered ?
              <motion.div 
      className='flex flex-row items-center justify-center gap-3'
      initial={{opacity:0, scale:.25}}
      animate={{ opacity:1, scale: 1 }}
      transition={{ ease: "easeOut", duration: .75, delay:1 }}
      >
        <motion.div
         onHoverEnd={() => {setHovered(false); setColor(false)}}  
        >
          <Link href="/work">
            <Button  onMouseEnter={() => {
                handleBackground('professional');
                setHovered(true); setColor(true) // Set hover status to true
              }}
              variant='contained' sx={{fontFamily: 'rajdhani', }}>
                My Work
            </Button>
          </Link>
        </motion.div>
        <motion.div
           onHoverEnd={() => {setHovered(false); setColor(false)}}
        >
          <Link href="/about"><Button onMouseEnter={() => {
                handleBackground('personal');
                setHovered(true); setColor(true) // Set hover status to true
              }} variant='outlined' sx={{fontFamily: 'kodchasan', borderColor: grey[50], color: grey[50]}}>About Me</Button></Link>
        </motion.div>
      </motion.div> : null

      }
      {!color && !hovered ?
              <motion.div 
      className='flex flex-row items-center justify-center gap-3'
      initial={{opacity:0, scale:.25}}
      animate={{ opacity:1, scale: 1 }}
      transition={{ ease: "easeOut", duration: .75, delay:1 }}
      >
        <motion.div
         onHoverEnd={() => {setHovered(false); setColor(false)}}  
        >
          <Link href="/work">
            <Button  onMouseEnter={() => {
                handleBackground('professional');
                setHovered(true); setColor(true) // Set hover status to true
              }}
              variant='contained' sx={{fontFamily: 'rajdhani'}}>
                My Work
            </Button>
          </Link>
        </motion.div>
        <motion.div
           onHoverEnd={() => {setHovered(false); setColor(false)}}
        >
          <Link href="/about"><Button onMouseEnter={() => {
                handleBackground('personal');
                setHovered(true); setColor(true) // Set hover status to true
              }} variant='outlined' sx={{fontFamily: 'kodchasan'}}>About Me</Button></Link>
        </motion.div>
      </motion.div> : null

      }

    </main>
    </>
  )
}
