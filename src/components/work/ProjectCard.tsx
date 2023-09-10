import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, CardActionArea, CardActions, Stack } from '@mui/material';
import {blue, red} from '@mui/material/colors'
import Link from 'next/link';
import { useState } from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({project: { title, image, gif, subHeader, description, descriptionMobile, url, techStack},}) => {
  
  const [isDescription, setIsDescription] = useState(true)
  const [isGif, setIsGif] = useState(false)
  const [isTechStack, setIsTechStack] = useState(false)

  function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
  ) {
    return (
      <Box justifyContent='center' alignItems='center' sx={{ position: 'relative', display: 'inline-flex', width:'100%' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  const handleIsTechStack = () => {
    setIsTechStack(true);
    setIsGif(false);
    setIsDescription(false);
  }
  
  const handleIsDescription = () => {
    setIsTechStack(false);
    setIsGif(false);
    setIsDescription(true);
  }
  
  const handleIsDemo = () => {
    setIsTechStack(false);
    setIsGif(true);
    setIsDescription(false);
  }

  return (
    <motion.div >
      <Card 
          // onTouchEnd={()=> {
          //   console.log(title); }}  
            className='' sx={{ width: {xs:345, sm:450}, minHeight: {xs:400 ,sm:575} }}>
        <CardActionArea>
          <CardMedia
          // onTouchEnd={()=> {
          //   console.log(title); }}
            component="img"
            src={image}
            alt={`${title} home page screenshot`}
          />
          <CardContent>
            <Link href={url} >
              <Typography className='text-center' gutterBottom variant="h5" component="div" sx={{width: "100%", fontFamily:'kodchasan'}}>
                {title}
              </Typography>          
            </Link>
            {isDescription &&
              <>
                <div className='hidden md:block ' >
                  <Typography  variant="body2" color="text" sx={{fontFamily:'rajdhani',}}>
                        {descriptionMobile}
                  </Typography>
                </div>
                <div className='sm:hidden  '>
                  <Typography  variant="body2" color="text.secondary" sx={{fontFamily:'rajdhani'}}>
                        {descriptionMobile}
                  </Typography>
                </div>            
              </>
            }
            {isTechStack &&
              
              <Stack sx={{paddingBlockStart:'2vh'}} spacing={2} direction="row" justifyContent="center"  alignItems='center'>
                {techStack.map((tech, i) => {
                  const {name, percentage, css} = tech;
                  return <Box key={i}>
                        <Typography variant='body1' component='div' className='font-bold' sx={css}>{name}</Typography>
                    <Stack  sx={css}>
                        <CircularProgressWithLabel value={percentage} sx={css} />      
                    </Stack>
                  </Box>
                })}
              </Stack>
            
            }
            {isGif &&
                          <video autoPlay muted loop
                          className="w-full h-auto" 
                          style={{ maxWidth: "100%", height: "auto" }}>
                          <source src={gif} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
            }


          </CardContent>
        </CardActionArea>
        <CardActions className='justify-center items-center gap-3'>
          <Button onClick={handleIsDescription} className={` ${isDescription ? "hidden": ""}`} size="small" color="primary" variant='contained' 
          sx={{
            bgcolor: red[900] ,fontFamily:'rajdhani'
          }}>
            Info
          </Button>
          <Button onClick={handleIsDemo} className={` ${isGif ? "hidden": ""}`} size="small" color="primary" variant='contained' 
          sx={{
            bgcolor: red[900] ,fontFamily:'rajdhani'
          }}>
            Demo
          </Button>
          <Button onClick={handleIsTechStack} className={` ${isTechStack ? "hidden": ""}`} size="small" color="primary" variant='contained' 
          sx={{
            bgcolor: blue[900] ,fontFamily:'rajdhani'
          }}>
            Tech Stack
          </Button>
        </CardActions>
      </Card>      
    </motion.div>

  )
}

export default ProjectCard