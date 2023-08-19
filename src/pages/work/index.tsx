import React from 'react'
import ProjectCard from '../../components/work/ProjectCard'
import { motion } from "framer-motion"
import { useState } from 'react'
import { projects } from '../../assets/projects'
import { useStateContext } from '../../../Context/StateContext'

const WorkPage = () => {
  
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState(false);
  
  const {   orientation, isPearlBox, setIsPearlBox, isCredit, setIsCredit, isCosmic, setIsCosmic, isWorkDefault, setIsWorkDefault} = useStateContext();

  

  return (
    <>
    <div className="video-container">

      {hovered ?
            <video autoPlay muted loop className="background-video ">
              <source src={`${isWorkDefault ? "" : isPearlBox ?  "/backgrounds/vertical_code.mp4" : isCredit ?  "/backgrounds/horizontal_octopus.mp4" : isCosmic ?  "/backgrounds/vertical_octopus.mp4" : "" }`} type="video/mp4" />
              Your browser does not support the video tag.
            </video> : null
      }

    </div>
      <main className='flex flex-col gap-3 items-center justify-center mb-12' style={{fontFamily:'rajdhani'}}>
        <motion.div 
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.75}}
        className=''>
          <h1>My Work</h1>
        </motion.div>

        <div className='sm:hidden'>
          {projects.map((project:any, i) => {
            return <motion.div
              className='mb-3'
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
              animate={{ opacity:1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
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