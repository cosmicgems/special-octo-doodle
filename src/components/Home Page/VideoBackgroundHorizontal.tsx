import React, { useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import { useStateContext } from '../../../Context/StateContext';

const VideoBackgroundHorizontal = () => {
  const videoRef = useRef(null);  
  const { isAboutHoriBg, 
          isAboutVertBg, 
          isWorkHoriBg, 
          isWorkVertBg,
        } = useStateContext();
  
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

  return (
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
              </>
  )
}

export default VideoBackgroundHorizontal