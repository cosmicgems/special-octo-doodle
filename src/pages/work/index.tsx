import React from 'react'
import ProjectCard from '../../components/work/ProjectCard'
import { motion } from "framer-motion"
import { useState } from 'react'
import { projects } from '../../assets/projects'
import { useStateContext } from '../../../Context/StateContext'
import { Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

const WorkPage = () => {
  
  const [hovered, setHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [color, setColor] = useState(false);
  
  const {   orientation, isPearlBox, setIsPearlBox, isCredit, setIsCredit, isCosmic, setIsCosmic, vertical, horizontal, isWorkDefault, setIsWorkDefault} = useStateContext();

    
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
    }
  }


  return (
    <>
    <div className="video-container">

      {hovered ?
        <>
            <motion.video
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 0.75}} autoPlay muted loop className="background-video ">
              <source src={`${isWorkDefault ? "" : isPearlBox ?  "/backgrounds/work_page_pearl.mp4" : isCredit ?  "/backgrounds/work_page_credit.mp4" : isCosmic ?  "/backgrounds/work_page_cosmic.mp4" : "" }`} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 0.75}} className="overlay"></motion.div> </>: null
      }
      {vertical || horizontal && !hovered ?
        <>
            <motion.video
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 0.75}} autoPlay muted loop className="background-video ">
              <source src={`${vertical ? "/backgrounds/vertical_code.mp4" : horizontal ? "/backgrounds/horizontal_code.mp4" : ""}`} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 0.75}} className="overlay"></motion.div> </>: null
      }

    </div>
      <main className='flex flex-col gap-3 items-center justify-center mb-12 sm:mb-6' style={{fontFamily:'rajdhani'}}>
        
      {isPearlBox && hovered ?
        <motion.div 
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.75}}
        className=''>
          <Typography className='font-bold' variant="h1" component='div' sx={{color: grey[50], fontFamily: 'rajdhani', opacity: 0}}>My Work</Typography>
        </motion.div> : null
        }
        {isCredit && hovered ?
          <motion.div 
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.75}}
          className=''>
            <Typography className='font-bold' variant="h1" component='div' sx={{color: grey[50], fontFamily: 'rajdhani', opacity: 0}}>My Work</Typography>
          </motion.div> : null
        }
        {isCosmic && hovered ?
          <motion.div 
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.75}}
          className=''>
            <Typography className='font-bold' variant="h1" component='div'  sx={{color: blue[300], textShadow: '2px 2px #000', fontFamily: 'rajdhani', opacity: 0}}>My Work</Typography>
          </motion.div> : null
        }
        {!color && !hovered ?
          <motion.div 
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.75}}
          className=''>
            <Typography className='' variant="h1" component='div'  sx={{fontFamily: 'rajdhani', fontSize: {xs:'4rem'}, color:grey[50]}}>My <span style={{fontFamily: 'kodchasan'}}>Work</span></Typography>
          </motion.div> : null
        }

        <div className='sm:hidden h-[70vh] overflow-y-scroll '>
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
        <div className='hidden sm:flex sm:flex-row gap-3 sm:gap-24 justify-center items-center' style={{overflowX: 'auto', width: '100%'}}>
          {projects.map((project:any, i) => {
            return <motion.div
              className='mb-3'
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
                setHovered(false); 
                setColor(false); 
                setHoveredProject(null);}}  
            >
              <ProjectCard project={project} />
            </motion.div>
            
            
          })}
        </div>
      </main>    
    </>

  )
}

export default WorkPage