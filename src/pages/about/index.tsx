import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState, useEffect, useRef  } from 'react'
import { motion } from 'framer-motion'
import { useStateContext } from '../../../Context/StateContext'
import { CardMedia } from '@mui/material'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { images } from '../../assets/images'


function shuffleArray(array) {
  
  const shuffledArray = [...array];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const AboutPage = () => {
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
        ? ''
        : isAboutVertBg
        ? ''
        : '';

      video.src = videoSource;
      video.load(); // Preload the video data
    }
  }, [isWorkHoriBg, isWorkVertBg, isAboutHoriBg, isAboutVertBg]);


  const [isProfessional, setIsProfessional] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const [isOneLine, setIsOneLine] = useState(true);


  
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
      } else if(theme === 'one liner'){
        setIsWorkHoriBg(false);
        setIsAboutVertBg(false);
        setIsWorkVertBg(false);
        setIsAboutHoriBg(false);
      }
    console.log(isWorkHoriBg);
    
  }


  const handleProfessional = () => {
    setIsProfessional(true);
    setIsPersonal(false);
    setIsOneLine(false)

  }
  const handlePersonal = () => {
    setIsProfessional(false);
    setIsPersonal(true);
    setIsOneLine(false)

  }
  const handleOneLiner = () => {
    setIsOneLine(true)
    setIsProfessional(false);
    setIsPersonal(false);
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
    <div className="video-container">

    {hovered && isProfessional ? (
      <div className="video-container">
        <video autoPlay muted loop className="background-video" ref={videoRef} preload="auto">
          <source src={`${isWorkHoriBg ? "/backgrounds/horizontal_code.mp4" : isWorkVertBg ?  "/backgrounds/vertical_code.mp4" : isAboutHoriBg ?  "" : isAboutVertBg ?  "" : "" }`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }} 
          className="overlay"
        ></motion.div>
      </div>
      ) : isPersonal && hovered ? ( 
        <Box sx={{ width: "100%", height: "100vh", }}>
        <ImageList className='sm:hidden' variant="masonry" cols={4} gap={2}>
          {shuffledImages.map((item) => (
            <ImageListItem key={item.image}>
              <img
                src={`${item.image}?w=248&fit=crop&auto=format`}
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt='Images of me and my family is a quilt'
                loading="lazy"
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
        </Box>
      ) :  (
        <>
          <CardMedia
            component="img"
            alt="Background Image"
            height="100%"
            image='/images/diamond.jpg' // Replace with the actual image path
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }} 
            className="overlay"
          ></motion.div>  
        </>

      )}

    </div>
      <div className={` ${ isProfessional ? "" : isPersonal ? "" : "mt-24" } `}>
        <div className={`flex flex-col gap-3 items-center justify-center px-4 md:px-14 lg:px-24  `}>
          <motion.div
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.75}}>
            <Typography className='hidden sm:inline' variant='h1' component='div'  sx={{fontFamily: `${isPersonal ? "kodchasan" : "rajdhani"}`, color:grey[100], fontSize:{xs:'4rem'}}}>About<span style={{fontFamily:'kodchasan'}}> Me</span></Typography>
            <Typography className=' sm:hidden' variant='h2' component='div'  sx={{fontFamily: `${isPersonal ? "kodchasan" : "rajdhani"}`, color:grey[100], fontSize:{xs:'4rem'}}}>About<span style={{fontFamily:'kodchasan'}}> Me</span></Typography>
          </motion.div>
          <div className=''>
            {!isProfessional && !isPersonal &&
            <motion.div
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.75, delay:0.25}}>
              <Typography variant='body1' component='div' className='text-center' sx={{fontFamily:'kodchasan', color:grey[100]}}>We&apos;re all just different facets of the same gem.</Typography>
            </motion.div>
            
            }
            {isProfessional &&
              <>
                <motion.div
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.75}}>
                <Typography sx={{fontFamily: 'rajdhani', color:grey[100]}} variant='h6' className='mb-3 text-center' component='div'>Automotive Program Manager Turned Software Engineer: Transforming Problem-Solving

                </Typography>
                </motion.div>

                <motion.div
                className='grow h-[30vh] overflow-y-auto'
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration: 0.75, delay: 0.75}}>
                <Typography sx={{fontFamily: 'rajdhani', color:grey[100], fontSize:{ xs: '.75rem' ,sm:'1.25rem'}, textShadow: '1px 1px #000'}} variant='body1' component='div'>With a foundation in Automotive Program Management, I&apos;ve championed the orchestration of multi-million-dollar programs for industry titans like Ford, GM, and FCA. My proficiency in program management, change management, and system optimization has been honed through navigating the intricacies of the automotive landscape.
                  <br/> <br/>
                However, my journey took an exciting turn when I encountered technological bottlenecks within processes and systems. The frustration of being hindered by limitations in technology and corporate processes became the spark that ignited my journey into the world of software engineering.
                <br/> <br/>
                As I delved into coding, a new world of problem-solving opened up. Learning to code empowered me to approach challenges with a fresh perspective. No longer confined by existing systems, I could prototype solutions independently and bring innovative ideas to life. This transformation in problem-solving not only accelerated efficiency but also bridged the gap between engineering and program management.
                <br/> <br/>
                From driving breakthrough initiatives in the automotive sector to harnessing the power of code, I am now equipped to lead strategically, leveraging both my program management prowess and my newfound ability to innovate through software engineering.
                </Typography>
                </motion.div>
              
              </>
            }
            {isPersonal &&
              <>
              <motion.div
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.75}}>
                <Typography sx={{fontFamily: 'kodchasan', color:grey[100], fontSize: {xs:'1rem'}}} variant='h6' className='mb-3 text-center' component='div'>A Lifelong Learner, Problem Solver, and Quantum Enthusiast</Typography>
              </motion.div>
                <motion.div
                className='grow h-[30vh] overflow-y-auto'
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration: 0.75, delay: 0.75}}>
                <Typography sx={{fontFamily: 'Kodchasan', color:grey[100], fontSize:{ xs: '.75rem' ,sm:'1.25rem'}, textShadow: '1px 1px #000', textAlign: {sm: 'center'}}} variant='body1' component='div'>
                Greetings! I&apos;m a perpetual seeker of wisdom, and surrounding myself by brilliance. Curiosity is my compass, guiding me to the unknown.
                <br/><br/>
                With an unquenchable thirst for knowledge, I gravitate towards the best minds. I believe growth springs from questions, sparking understanding. Engaging with exceptional thinkers fuels my curiosity and drives me to transcend limits.
                <br/><br/>
                Problem-solving is both my vocation and avocation. While my expertise lies in the realm of computer science and project management, I maintain an unwavering passion for the enigmatic domains of Quantum Mechanics, Physics, and Quantum Computers. These fields embody my aspiration to make meaningful contributions to humanity&apos;s progress and the advancement of our understanding. Basketball fuels my competitive spirit, but TV doesn&apos;t hold me; true learning does.
                <br/><br/>
                Amidst cherished family and friends, I rejuvenate. Debates that broaden perspectives enthrall me, often reshaping my outlook; if the concept is logically sound.
                <br/><br/>
                I embrace adaptability and adore culinary creation. Mental challenges fuel me, be it in code or cuisine. As I venture into Quantum Computers, I stand on the brink of innovation, eager to unlock its mysteries.
                <br/><br/>
                Join me in this quest for knowledge, for embracing challenges, and for deciphering the enigmatic world of quantum. Let&apos;s explore existence&apos;s tapestry, one leap at a time.
                <br/><br/>
                Warmly,
                <br/>
                Maliek Davis
                </Typography>
                </motion.div>
              </>
            }
            
          </div>
          <motion.div className='flex flex-row items-center justify-center gap-3 mb-3 mt-3'
            initial={{opacity:0, scale:.25}}
            animate={{ opacity:1, scale: 1 }}
            transition={{ ease: "easeOut", duration: .75, delay:1 }}
            >
            <Button className={`${isOneLine ? "hidden" : "" }`} onClick={()=>{handleOneLiner(); handleBackground('one liner'); setHovered(false);}} sx={{fontFamily: 'rajdhani'}} variant='contained'>One Line</Button>
            <Button className={`${isProfessional ? "hidden" : "" }`} onClick={()=>{handleProfessional(); handleBackground('professional'); setHovered(true)}} sx={{fontFamily: 'rajdhani'}} variant='contained'>Professional</Button>
            <Button className={`${isPersonal ? "hidden" : "" }`} onClick={()=>{handlePersonal(); handleBackground('personal'); console.log(isPersonal); setHovered(true);}} sx={{fontFamily: 'kodchasan', borderColor:grey[50], color:grey[50]}} variant='outlined'>Personal</Button>
          </motion.div>

        </div>      
      </div>    
    </>


  )
}

export default AboutPage