import React, { useRef, useEffect} from 'react'
import ProjectCard from '../../components/work/ProjectCard'
import { motion } from "framer-motion"
import { useState } from 'react'
import { projects } from '../../assets/projects'
import { useStateContext } from '../../../Context/StateContext'
import { CardMedia, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import Layout from '../../components/Layout'

const WorkPage = () => {
  
  const [hovered, setHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [color, setColor] = useState(false);
  
  const {   orientation, isPearlBox, setIsPearlBox, isCredit, setIsCredit, isCosmic, setIsCosmic, isTshirt, setIsTshirt, isIphone, setIsIphone, isEcommerce, setIsEcommerce, vertical, horizontal, isWorkDefault, setIsWorkDefault} = useStateContext();


    
  const handleBackground = (theme:string) => {
    if(theme === 'Pearl Box'){
      setIsPearlBox(true);
      setIsCredit(false);
      setIsCosmic(false);
      setIsWorkDefault(false);
    } else if(theme === 'Credit Zen'){
      setIsCredit(true);
      setIsPearlBox(false);
      setIsCosmic(false);
      setIsWorkDefault(false);
    } else if (theme === 'Cosmic Gems') {
      setIsCredit(false);
      setIsPearlBox(false);
      setIsCosmic(true);
      setIsWorkDefault(false);
    } else if (theme === 'ThreeJS T-Shirt Studio') {
      setIsCredit(false);
      setIsPearlBox(false);
      setIsCosmic(false);
      setIsWorkDefault(false);
      setIsIphone(false);
      setIsEcommerce(false);
      setIsTshirt(true);
    } else if (theme === 'Apple iPhone Clone') {
      setIsCredit(false);
      setIsPearlBox(false);
      setIsCosmic(false);
      setIsWorkDefault(false);
      setIsEcommerce(false);
      setIsTshirt(false);
      setIsIphone(true);
    } else if (theme === 'Pearl Shop : E-Commerce') {
      setIsCredit(false);
      setIsPearlBox(false);
      setIsCosmic(false);
      setIsWorkDefault(false);
      setIsIphone(false);
      setIsTshirt(false);
      setIsEcommerce(true);
    } else if (theme === '' ){
      setIsCredit(false);
      setIsPearlBox(false);
      setIsCosmic(false);
      setIsWorkDefault(false);
      setIsIphone(false);
      setIsTshirt(false);
      setIsEcommerce(false);
    }
  }

  const scrollContainerRef = useRef(null);

  // Create a ref for the scroll container

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Add an event listener to handle scroll snap on scroll end
    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      const projectCards = scrollContainer.querySelectorAll('.scrollable-item');

      let nearestCard = null;
      let minDistance = Infinity;

      // Find the nearest project card based on scroll position
      projectCards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const distance = Math.abs(cardRect.left - scrollLeft);

        if (distance < minDistance) {
          minDistance = distance;
          nearestCard = card;
        }
      });

      // Snap to the nearest project card
      if (nearestCard) {
        scrollContainer.scrollTo({
          left: nearestCard.offsetLeft,
          behavior: 'smooth',
        });
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };

  }, []);


  return (
    <Layout>
    <div className='flex justify-center items-center'>
        {isPearlBox || isCosmic || isCredit || isTshirt || isIphone || isEcommerce && hovered ?
          <motion.div 
          className='mt-20'>
            <Typography className='font-bold' variant="h1" component='div' sx={{color: grey[50], fontSize: {xs:'4rem'}, fontFamily: 'rajdhani', opacity: 0}}>My Work</Typography>
          </motion.div> 
            :
          !color && !hovered ?
          <motion.div 
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.75}}
            className='mt-20'>
              <Typography className='' variant="h1" component='div'  sx={{fontFamily: 'rajdhani', fontSize: {xs:'4rem'}, color:grey[50]}}>My <span style={{fontFamily: 'kodchasan'}}>Work</span></Typography>
            </motion.div> 
            :
            null
          }      
    </div>


      <div className='sm:flex sm:flex-col h-[70vh] sm:justify-center sm:items-center mt-6 sm:mt-3 overflow-x-auto sm:overflow-x-hidden overflow-y-auto  scrollable-container'>
      
          

        {hovered ?
          <>
          <div className="video-container">
              <motion.video
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 0.75}} autoPlay muted loop className="background-video ">
                <source src={`${isWorkDefault ? "" : isPearlBox ?  "/backgrounds/work_page_pearl.mp4" : isCredit ?  "/backgrounds/work_page_credit.mp4" : isCosmic ?  "/backgrounds/work_page_cosmic.mp4" : isIphone ? "/backgrounds/iphone.mp4" : isEcommerce ? "/backgrounds/e-commerce.mp4" : isTshirt ? "/backgrounds/tshirt-studio.mp4" : "" }`} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
                </div>
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 0.75}} className="overlay"></motion.div> 
                </>: null
        }
        { horizontal && !hovered ?
          <>
          <div className="video-container">
              <motion.video
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 0.75}} autoPlay muted loop className="background-video ">
                <source src={`${ horizontal ? "/backgrounds/horizontal_code.mp4" : ""}`} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
                </div>
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 0.75}} className="overlay"></motion.div>
                </>:
            vertical && !hovered ? (
              
          <>
          <CardMedia
          component="div"
          className="video-container"
          image="/backgrounds/vertical_code.gif" />
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 0.75}} className="overlay"></motion.div>
                </>
            ) : null
        }

        
        <main className='flex flex-col  w-screen  h-content pb-24 sm:pb-6 sm:px-6' style={{ fontFamily: 'rajdhani',    }}>

                    {/* mobile project card mapping */}

          <div className='sm:hidden flex  px-10   items-center gap-24 ' style={{}}>
            {projects.map((project: any, i) => {
              if (i === 0) {
                return (
                  <motion.div
                    
                  onTouchEnd={()=> {
                    if(hovered){
                      handleBackground("")
                      setHovered(false); 
                      setColor(false); 
                      setHoveredProject(null);
                      return
                    }
                    handleBackground(project.title);
                    setHoveredProject(project.title);
                    setHovered(true); 
                    setColor(true);  
                  }}
                    className='scrollable-item'
                    id={project.id}
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.25 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                )
              } else if( i === projects.length - 1){
                return (
                  <motion.div
                    className='scrollable-item pr-10'
                    onTouchEnd={()=> {
                      if(hovered){
                        handleBackground("")
                        setHovered(false); 
                        setColor(false); 
                        setHoveredProject(null);
                        return
                      }
                      handleBackground(project.title);
                      setHoveredProject(project.title);
                      setHovered(true); 
                      setColor(true);  
                    }}
                    id={project.id}
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.25 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                )
              } else{
              return (
                <motion.div
                onTouchEnd={()=> {
                  if(hovered){
                    handleBackground("")
                    setHovered(false); 
                    setColor(false); 
                    setHoveredProject(null);
                    return
                  }
                  handleBackground(project.title);
                  setHoveredProject(project.title);
                  setHovered(true); 
                  setColor(true);  
                }}
                  className=' scrollable-item'
                  id={project.id}
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.25 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              )              
              }

            })}
          </div>

                    {/* Desktop top project car mapping */}

          <div className='hidden sm:flex sm:flex-row gap-3 sm:gap-24 justify-center items-center w-[10%] ' style={{ paddingInlineStart: '100vw',  overflowX: 'auto'}}>
              {projects.map((project:any, i) => {
                return <motion.div
                  className='mb-3 pr-6'
                  key={project.id}
                  initial={{opacity:0, scale:.25}}
                  animate={{
                    opacity: hovered && hoveredProject === project.title ? 1 : 0.25,
                    scale:  1}}
                  transition={{ ease: "easeOut", duration: 1 }} 
                  onMouseEnter={() => {
                    handleBackground(project.title);
                    setHoveredProject(project.title);
                    setHovered(true); 
                    setColor(true);  
                  }}
                  onHoverEnd={() => {
                    handleBackground("")
                    setHovered(false); 
                    setColor(false); 
                    setHoveredProject(null);}}  
                >
                  <ProjectCard project={project} />
                </motion.div>
                
                
              })}
            </div>
              
        </main>    
      </div>    
    </Layout>


  )
}

export default WorkPage