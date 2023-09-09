import React from 'react'
import ProjectCard from '../../components/work/ProjectCard'
import { motion } from "framer-motion"
import { useState } from 'react'
import { projects } from '../../assets/projects'
import { useStateContext } from '../../../Context/StateContext'
import { CardMedia, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

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


  return (
    <div className='flex flex-col h-full justify-center items-center mt-3 overflow-y-auto'>
    

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
          vertical &&!hovered ? (
            
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

      
      <main className='flex flex-col gap-3 items-center justify-center' style={{fontFamily:'rajdhani', overflowX: 'hidden'}}>
        
      {isPearlBox || isCosmic || isCredit || isTshirt || isIphone || isEcommerce && hovered ?
        <motion.div 
        className='mt-2'>
          <Typography className='font-bold' variant="h1" component='div' sx={{color: grey[50], fontSize: {xs:'4rem'}, fontFamily: 'rajdhani', opacity: 0}}>My Work</Typography>
        </motion.div> 
          :
        !color && !hovered ?
        <motion.div 
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.75}}
          className=''>
            <Typography className='' variant="h1" component='div'  sx={{fontFamily: 'rajdhani', fontSize: {xs:'4rem'}, color:grey[50]}}>My <span style={{fontFamily: 'kodchasan'}}>Work</span></Typography>
          </motion.div> 
          :
          null
        }


        <div className='sm:hidden '>
          {projects.map((project:any, i) => {
            return <motion.div
              className='mb-12'
              key={project.id}
              initial={{opacity:0, scale:.25}}
              animate={{ opacity:1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
            
            
          })}
        </div>
          
            <div className='hidden sm:flex sm:flex-row gap-3 sm:gap-24 justify-center items-center w-[10%]' style={{ paddingInlineStart: '100vw',  overflowX: 'auto'}}>
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

  )
}

export default WorkPage