import React from 'react'
import ProjectCard from '../../components/work/ProjectCard'
import { motion } from "framer-motion"
import { useState } from 'react'
import { projects } from '../../assets/projects'

const WorkPage = () => {

  return (
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
  )
}

export default WorkPage