import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { motion } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center md:justify-center h-[80vh] sm:h-max  px-4 md:px-14 lg:px-24 lg:mt-24   ${inter.className}`}
      style={{fontFamily: 'rajdhani'}}
    >
      <motion.div 
      className='mb-3 '
      initial={{opacity:0, y:-100}}
      animate={{opacity:1, y:0}}
      transition={{duration: 0.75}}
      >
        <h1 style={{fontFamily: 'rajdhani'}}>
          Hello, I&apos;m <motion.span  style={{fontFamily: 'kodchasan', fontWeight:700}}>Maliek Davis</motion.span>.
        </h1>
      </motion.div>
      <motion.div 
      className='mb-3 lg:px-24'
      initial={{opacity:0, y:-100}}
      animate={{opacity:1, y:0}}
      transition={{duration: 0.75, delay:0.25}}
      >
        <h3 className=' md:px-24' >
        Explore my portfolio — a journey of a self-taught technologist passionate about leveraging computer science to enhance lives through innovation.
        </h3>
      </motion.div>
      <motion.div 
      className='flex flex-row items-center justify-center gap-3'
      initial={{opacity:0, scale:.25}}
      animate={{ opacity:1, scale: 1 }}
      transition={{ ease: "easeOut", duration: .75, delay:1 }}
      >
        <Link href="/work"><Button variant='contained' sx={{fontFamily: 'rajdhani'}}>My Work</Button></Link>
        <Link href="/about"><Button variant='outlined' sx={{fontFamily: 'kodchasan'}}>About Me</Button></Link>
      </motion.div>
    </main>
  )
}
