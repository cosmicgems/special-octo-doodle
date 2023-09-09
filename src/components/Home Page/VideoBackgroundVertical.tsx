import { CardMedia } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion"
import { useStateContext } from '../../../Context/StateContext';

const VideoBackgroundVertical = () => {
    const { 
            isAboutVertBg,
            isWorkVertBg,
          } = useStateContext();

  return (
    <>
    <CardMedia
    component="div"
    className="video-container"
    image={`${isWorkVertBg ? '/backgrounds/vertical_code.gif' : isAboutVertBg ? '/backgrounds/vertical_octopus.gif' : ''}`} />
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration: 0.75}} className="overlay"></motion.div>
          </>
  )
}

export default VideoBackgroundVertical