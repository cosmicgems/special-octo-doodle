import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { motion } from "framer-motion"
import { useStateContext } from '../../Context/StateContext'
import { CardMedia, Typography } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import { blue, grey, orange, red } from '@mui/material/colors'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { images } from '../assets/images'

const inter = Inter({ subsets: ['latin'] })

function shuffleArray(array) {
  
  const shuffledArray = [...array];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export default function Home() {
  const videoRef = useRef(null);

  
  
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState(false);
  const [maliek, setMaliek] =useState(false);
  
  const {  setIsWorkHoriBg, setIsWorkVertBg, setIsAboutHoriBg, setIsAboutVertBg,isAboutHoriBg, isAboutVertBg, isWorkHoriBg, isWorkVertBg, orientation, horizontal, vertical} = useStateContext();
  
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const videoSource = isWorkHoriBg
        ? '/backgrounds/horizontal_code.mp4'
        : isWorkVertBg
        ? '/backgrounds/vertical_code.gif'
        : isAboutHoriBg
        ? '/backgrounds/horizontal_octopus.mp4'
        : isAboutVertBg
        ? '/backgrounds/vertical_octopus.gif'
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
      }else if(theme === 'maliek'){
        setIsWorkHoriBg(false);
        setIsAboutVertBg(false);
        setIsWorkVertBg(false);
        setIsAboutHoriBg(false);
      }
    console.log(isWorkHoriBg);
    
  }


  
  const shuffledImages = shuffleArray(images);

  // State to track the loaded state of each image
  const [loadedImages, setLoadedImages] = useState([]);

  // Function to mark an image as loaded
  const handleImageLoad = (imageIndex) => {
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, imageIndex]);
  };


  return (
    <>
    

      {hovered && horizontal ?
        <>
        <div className="video-container">
            <video autoPlay muted loop className="background-video" ref={videoRef} preload="auto">
              <source src={`${isWorkHoriBg ? "/backgrounds/horizontal_code.mp4"  : isAboutHoriBg ?  "/backgrounds/horizontal_octopus.mp4"  : "" }`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              </div>
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 0.75}} className="overlay"></motion.div>
              </>  : null
      }

      {hovered && vertical ?
        <>
        <CardMedia
        component="div"
        className="video-container"
        image={`${isWorkVertBg ? '/backgrounds/vertical_code.gif' : isAboutVertBg ? '/backgrounds/vertical_octopus.gif' : ''}`} />
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 0.75}} className="overlay"></motion.div>
              </>  : null
      }
      {hovered && maliek ?
      
    <div className="video-container">
        <Box sx={{ width: "100%", height: "100vh", }}>
        <ImageList className='sm:hidden' variant="masonry" cols={4} gap={2}>
          {shuffledImages.map((item, index) => (
            <ImageListItem key={item.image}>
            {/* Display low-quality image initially */}
            <img
              src={`${item.image}?w=100&fit=crop&auto=format`}  // Use a lower-quality image here
              alt='Images of me and my family is a quilt'
              style={{ filter: loadedImages.includes(index) ? 'none' : 'blur(20px)' }}
            />

            {/* Load high-quality image in the background */}
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}  // Use the high-quality image here
              alt='Images of me and my family is a quilt'
              style={{ display: 'none' }}
              onLoad={() => handleImageLoad(index)}  // Mark the image as loaded
            />
            </ImageListItem>
          ))}
        </ImageList>
          <ImageList className='hidden sm:block' variant="masonry" cols={12} gap={4}>
            {shuffledImages.map((item, index) => (
              <ImageListItem key={item.image}>
                {/* Display low-quality image initially */}
                <img
                  src={`${item.image}?w=100&fit=crop&auto=format`}  // Use a lower-quality image here
                  alt='Images of me and my family is a quilt'
                  style={{ filter: loadedImages.includes(index) ? 'none' : 'blur(20px)' }}
                />

                {/* Load high-quality image in the background */}
                <img
                  src={`${item.image}?w=248&fit=crop&auto=format`}  // Use the high-quality image here
                  alt='Images of me and my family is a quilt'
                  style={{ display: 'none' }}
                  onLoad={() => handleImageLoad(index)}  // Mark the image as loaded
                />
              </ImageListItem>
            ))}
          </ImageList>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }} 
          className="overlay2"
        ></motion.div>
        </Box></div> : ''
        
      }

  
    <main
      className={`flex  flex-col items-center md:justify-center h-max mb-5  px-4 md:px-14 lg:px-24 lg:mt-24   ${inter.className}`}
      style={{fontFamily: 'rajdhani'}}
    >


        {isWorkHoriBg && hovered ?
              <motion.div 
              className='mb-3 '
              initial={{opacity:0.1,}}
              animate={{opacity:1}}
              transition={{duration: 1}}
              >
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', color:blue[500], textShadow: '2px 2px #fff', fontSize: {xs: '5rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span 
           onHoverEnd={() => {setHovered(false); setMaliek(false)}}  onMouseEnter={() => {
                handleBackground('maliek');
                setHovered(true); setMaliek(true)  // Set hover status to true
              }}  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
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
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', color:blue[500], textShadow: '2px 2px #fff', fontSize: {xs: '5rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span 
           onHoverEnd={() => {setHovered(false); setMaliek(false)}}  onMouseEnter={() => {
                handleBackground('maliek');
                setHovered(true); setMaliek(true)  // Set hover status to true
              }}  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
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
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', color:red[500], textShadow: '2px 2px #fff', fontSize: {xs: '5rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span 
           onHoverEnd={() => {setHovered(false); setMaliek(false)}}  onMouseEnter={() => {
                handleBackground('maliek');
                setHovered(true); setMaliek(true)  // Set hover status to true
              }}  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
          </Typography>
              </motion.div> : null
        }
        {isAboutVertBg || maliek && hovered ?
              <motion.div 
              className='mb-3 '
              initial={{opacity:0, y:-100, scale: .5}}
              animate={{opacity:1, y:0, scale: 1}}
              transition={{duration: 0.75}}
              >
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', color:red[500], textShadow: '2px 2px #fff', fontSize: {xs: '5rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span 
           onHoverEnd={() => {setHovered(false); setMaliek(false)}}  onMouseEnter={() => {
                handleBackground('maliek');
                setHovered(true); setMaliek(true)  // Set hover status to true
              }}  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
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
          <Typography component='div' variant='h1' sx={{fontFamily: 'rajdhani', fontSize: {xs: '5rem'}}} className=' sm:text-center'>
          Hello, I&apos;m <motion.span 
           onHoverEnd={() => {setHovered(false); setMaliek(false)}}  onMouseEnter={() => {
                handleBackground('maliek');
                setHovered(true); setMaliek(true)  // Set hover status to true
              }} style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>
          </Typography> 
              </motion.div>: null
        }



      {isWorkHoriBg  && hovered ?
        <motion.div 
        className='mb-3 lg:px-24'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1, delay:0.25}}
        >
          <Typography variant='h5' sx={{color:grey[50], fontFamily: 'rajdhani', }} component='div' className=' md:px-24 sm:text-center ' >
          Explore my portfolio — a journey of a self-taught technologist <Typography className='inline' variant='h5' sx={{color:red[500], fontFamily:'kodchasan'}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
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
          Explore my portfolio — a journey of a self-taught technologist <Typography className='inline' variant='h5' sx={{color:red[500], fontFamily:'kodchasan'}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
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
          Explore my portfolio — a journey of a self-taught technologist <Typography className='inline' variant='h5' sx={{color:red[500], fontFamily:'kodchasan'}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
          </Typography>
        </motion.div> : null
      }
      {maliek && hovered ?
        <motion.div 
        className='mb-3 lg:px-24'
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1, delay:0.25}}
        >
          <Typography variant='h5' sx={{color:grey[50], fontFamily: 'rajdhani',}} component='div' className=' md:px-24 sm:text-center' >
          Explore my portfolio — a journey of a self-taught technologist <Typography className='inline' variant='h5' sx={{color:red[500], fontFamily:'kodchasan'}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
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
          Explore my portfolio — a journey of a self-taught technologist <Typography className='inline' variant='h5' sx={{color:red[500], fontFamily:'kodchasan'}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
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
          Explore my portfolio — a journey of a self-taught technologist <Typography className='inline' variant='h5' sx={{color:red[500], fontFamily:'kodchasan'}}>passionate </Typography>about leveraging computer science to enhance lives through innovation.
          </Typography>
        </motion.div> : null
      }

      {isWorkHoriBg  && hovered ?
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
            </div></motion.div>
            <motion.div 
              className='flex flex-row items-center justify-center gap-3'
              initial={{opacity:0.1}}
              animate={{ opacity:1}}
              transition={{ duration: 1, delay:1 }}
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
              </motion.div>      
          </>
        : null

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
                </motion.div>      
        </> : null

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
      {maliek && hovered ?
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
        </div></motion.div>
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
        </motion.div>       
      </> : null

      }

    </main>
    </>
  )
}
