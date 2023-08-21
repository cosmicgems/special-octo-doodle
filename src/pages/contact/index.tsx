import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TextField, TextareaAutosize } from '@mui/material'

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")



  return (
    <div className="mb-12 sm:mt-24" >
      <div className={`flex flex-col gap-3 items-center justify-center px-4 md:px-14 lg:px-24  `}>
      <motion.div
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.75}}>
          <Typography variant='h1' component='div'  sx={{fontFamily:  "rajdhani", fontSize: {xs:'3rem'}}}>Let&apos;s<span style={{fontFamily:'kodchasan'}}> Connect</span></Typography>
        </motion.div>
        
        <div >
          <form className=''>
            <motion.div
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.75, delay: 0.75}}
              >
              <TextField className='mb-4' fullWidth label="Name" variant='outlined' value={name} onChange={(e)=>setName(e.target.value)} />              
            </motion.div>
            <motion.div
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.75, delay: 0.95}}
              >
              <TextField className='mb-4' fullWidth label="Email" variant='outlined' value={email} onChange={(e)=>setEmail(e.target.value)} />              
            </motion.div>
            <motion.div
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.75, delay: 1.15}}
              >
              <TextField multiline rows={4} className='mb-4' fullWidth label="Message" variant='outlined' value={message} onChange={(e)=>setMessage(e.target.value)} />              
            </motion.div>
            <motion.div
              className='px-[33%]' style={{width:'100%'}}
              initial={{opacity:0, scale:.25}}
              animate={{ opacity:1, scale: 1 }}
              transition={{ ease: "easeOut", duration: .75, delay:1.35}}
            >
              <Button sx={{width:'100%', fontFamily: 'rajdhani'}} variant='contained' type='submit'>Send</Button>               
            </motion.div>
          </form>
        </div>

      </div>      
    </div>
  )
}

export default ContactPage