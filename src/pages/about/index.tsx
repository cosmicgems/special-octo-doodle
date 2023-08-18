import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { motion } from 'framer-motion'


const AboutPage = () => {

  const [isProfessional, setIsProfessional] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const [isOneLine, setIsOneLine] = useState(true);



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

  return (
    <div className={` ${ isProfessional ? "" : isPersonal ? "" : "mt-24" } `}>
      <div className={`flex flex-col gap-3 items-center justify-center px-4 md:px-14 lg:px-24  `}>
        <motion.div
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.75}}>
          <h1  style={{fontFamily: `${isPersonal ? "kodchasan" : "rajdhani"}`}}>About<span style={{fontFamily:'kodchasan'}}> Me</span></h1>
        </motion.div>
        <div className=''>
          {!isProfessional && !isPersonal &&
          <motion.div
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.75, delay:0.25}}>
            <Typography variant='body1' component='div' className='text-center' sx={{fontFamily:'kodchasan'}}>We&apos;re all just different facets of the same gem.</Typography>
          </motion.div>
          
          }
          {isProfessional &&
            <>
              <motion.div
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.75}}>
              <Typography sx={{fontFamily: 'rajdhani'}} variant='h6' className='mb-3 text-center' component='div'>Automotive Program Manager Turned Software Engineer: Transforming Problem-Solving

              </Typography>
              </motion.div>

              <motion.div
              className='grow'
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.75, delay: 0.75}}>
              <Typography sx={{fontFamily: 'rajdhani'}} variant='body1' component='div'>With a foundation in Automotive Program Management, I&apos;ve championed the orchestration of multi-million-dollar programs for industry titans like Ford, GM, and FCA. My proficiency in program management, change management, and system optimization has been honed through navigating the intricacies of the automotive landscape.
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
              <Typography sx={{fontFamily: 'kodchasan'}} variant='h6' className='mb-3 text-center' component='div'>A Lifelong Learner, Problem Solver, and Quantum Enthusiast</Typography>
            </motion.div>
              <motion.div
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.75, delay: 0.75}}>
              <Typography sx={{fontFamily: 'Kodchasan'}} variant='body1' component='div'>
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
          <Button className={`${isOneLine ? "hidden" : "" }`} onClick={handleOneLiner} sx={{fontFamily: 'rajdhani'}} variant='contained'>One Line</Button>
          <Button className={`${isProfessional ? "hidden" : "" }`} onClick={handleProfessional} sx={{fontFamily: 'rajdhani'}} variant='contained'>Professional</Button>
          <Button className={`${isPersonal ? "hidden" : "" }`} onClick={handlePersonal} sx={{fontFamily: 'kodchasan'}} variant='outlined'>Personal</Button>
        </motion.div>

      </div>      
    </div>

  )
}

export default AboutPage