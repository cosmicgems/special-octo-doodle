import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CircularProgress, TextField, TextareaAutosize } from '@mui/material'
import Alert from '@mui/material/Alert';

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState<boolean>(false);
  const [sender, setSender] = useState<string>("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submitting

    const formData = {
      name,
      email,
      message,
      phone,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setSender(formData.name)
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
      } else {
        console.error('Form submission failed');
        return
      }

      setTimeout(()=> {
        setSent(false);
        setSender("");
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false); // Finished submitting
    }
  };

  return (
    <div className=" mt-20 pt-12 sm:pt-6 sm:mt-24 w-screen" >
      <div className={`flex flex-col gap-3 items-center justify-center px-4 md:px-0 lg:px-24  h-full overflow-y-auto`}>
        {
          sent ?
            <Alert variant="outlined" severity="success">
              {sender}, your message was successfully sent! I will be in touch shortly. I look forward to connecting with you! &#x263a; &#xfe0f; 
            </Alert>
          :
          <>
            <motion.div
              className='sm:mb-6'
              initial={{opacity:0, y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.75}}>
                <Typography variant='h1' component='div'  sx={{fontFamily:  "rajdhani", fontSize: {xs:'3rem'}}}>Let&apos;s<span style={{fontFamily:'kodchasan'}}> Connect</span></Typography>
              </motion.div>
              
              <div className='sm:w-1/4' >
                <form onSubmit={handleSubmit} className='flex flex-col gap-6 '>
                  <motion.div
                  className='w-[100%]'
                    initial={{opacity:0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.75, delay: 0.75}}
                    >
                    <TextField className='mb-4' fullWidth label="Name"  variant='outlined' value={name} onChange={(e)=>setName(e.target.value)} />              
                  </motion.div>
                  <motion.div
                    initial={{opacity:0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.75, delay: 0.95}}
                    >
                    <TextField className='mb-4' fullWidth label="Phone" type='text' variant='outlined' value={phone} onChange={(e)=>setPhone(e.target.value)} />              
                  </motion.div>
                  <motion.div
                    initial={{opacity:0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.75, delay: 1.15}}
                    >
                    <TextField className='mb-4' fullWidth label="Email" type='email' variant='outlined' value={email} onChange={(e)=>setEmail(e.target.value)} />              
                  </motion.div>
                  <motion.div
                    initial={{opacity:0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.75, delay: 1.35}}
                    >
                    <TextField multiline rows={4} className='mb-4' fullWidth label="Message" variant='outlined' value={message} onChange={(e)=>setMessage(e.target.value)} />              
                  </motion.div>
                  {isSubmitting ? (
                    <>
                    <div 
                          className='px-[33%] w-[100%]'>
                      <Button sx={{width:'100%', fontFamily: 'rajdhani'}} variant='contained' type='submit'><CircularProgress sx={{ }} /></Button>
                    </div>
                    
                                    
                    </>

                      ) : (
                        <motion.div
                          className='px-[33%]'
                          style={{ width: '100%' }}
                          initial={{ opacity: 0, scale: 0.25 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ ease: 'easeOut', duration: 0.75, delay: 1.35 }}
                        >
                          <Button
                            sx={{ width: '100%', fontFamily: 'rajdhani' }}
                            variant='contained'
                            type='submit'
                          >
                            Send
                          </Button>
                        </motion.div>
                  )}
                  
                </form>
              </div>          
          </>

        }


      </div>      
    </div>
  )
}

export default ContactPage