import React, { useRef, useState } from 'react'
import { 
  Typography, 
  Box, 
  Button, 
  Paper, 
} from '@mui/material'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { StepConnectorProps } from '@mui/material/StepConnector';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/system';
import { proposedSchedule } from '../../../assets/proposedScheduleAsset';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { theme } from '../../../styles/themes';

interface CustomStepConnectorProps extends StepConnectorProps {
  // Add the width property to extend the StepConnectorProps
  width?: number;
}

const CustomizedStepConnector = styled(StepConnector, {
  shouldForwardProp: (prop) => prop !== 'width',
})<CustomStepConnectorProps>(
  ({ width }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#EAEAF0',
      },
    },
    width: width ? `${width}px` : '2px', // Set a default width or use the provided width
  })
);

const Timeline = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleNextFull = (index:number) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if ( index >= 2) {
      handleHeroNav("continue");
    }
  };

  const handleBackFull = (index:number) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if ( index >= 2) {
      handleHeroNav("back");
    }
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
    
  const scheduleRef = useRef<HTMLDivElement>(null);

  const handleHeroNav = (direction:string) => {
    if (scheduleRef.current) {
      if (direction === 'left') {
        scheduleRef.current.scrollLeft -= 600;
      }
      if (direction === 'back') {
        scheduleRef.current.scrollLeft -= 400;
      }
      if (direction === 'right') {
        scheduleRef.current.scrollLeft += 600;
      }
      if (direction === 'continue') {
        scheduleRef.current.scrollLeft += 400;
      }
    }
  };

  return (
    <div className='timeline-component min-h-screen w-full'>

      <div className='flex flex-col justify-center items-center   pt-16 '>

        <div className='flex flex-col gap-2'>
          <Typography variant='h4' sx={{color: theme.palette?.primary?.light}} className='gradient-text text-center' component="div">
            Project Flow
          </Typography>
          <Typography variant='caption' sx={{color: theme.palette?.primary?.light}} className='text-center' component="div">
            Continuous Deployment Recommended
          </Typography>
          <Typography variant='caption' sx={{color: theme.palette?.primary?.light}} className=' text-center' component="div">
            Base Website : 2 Weeks
          </Typography>
          <Typography variant='caption' sx={{color: theme.palette?.primary?.light}} className=' text-center' component="div">
            Blog, CMS, Client Portal, SEO : 8 Weeks
          </Typography>
          <Typography variant='caption' sx={{color: theme.palette?.primary?.light}} className=' text-center' component="div">
            SEO Continuous Improvement : 3-6 Months
          </Typography>
        </div>

        <Box className="flex md:hidden pt-6 pb-12" sx={{ maxWidth: 400 }}>
          <Stepper className='gap-1' activeStep={activeStep} orientation="vertical">
            {proposedSchedule.map((step, index) => (
              <Step key={step.name}>
                <StepLabel
                  optional={
                    index === proposedSchedule.length - 1 ? (
                      <Typography variant="caption" sx={{color: theme.palette.primary.light}}>Last step</Typography>
                    ) : null
                  }
                >
                  <Typography  sx={{color: theme.palette.primary.light, fontFamily: "Playfair Display"}}>{step.name}</Typography> 
                </StepLabel>
                <StepContent className=''>
                  <Typography  sx={{color: theme.palette.primary.light}}>{step.detail}</Typography>
                  {
                    step.features ?
                    <>
                      {
                        step.features.map((f, i) => (
                          <div key={i + ": " + f.name} className='pl-6 pt-3 '>
                            <Typography  sx={{color: theme.palette.primary.light}}>
                              {f.name}
                            </Typography>
                            <div className='pl-9'>
                              <Typography variant='caption' sx={{color: theme.palette.primary.light}}>
                                {f.detail}
                              </Typography>
                            </div>

                          </div>
                        ))
                      }
                    </>
                    : 
                    null
                  }
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1, backgroundColor: theme.palette.primary.light, color: theme.palette.primary.main }}
                      >
                        {index === proposedSchedule.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        variant='outlined'
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1, borderColor: theme.palette.primary.light, color: theme.palette.primary.light }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === proposedSchedule.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
{/* <div className='md:hidden challenge-overlay absolute w-screen h-full z-0 ' /> */}
        <Box ref={scheduleRef} className="md:flex hidden overflow-x-hidden w-[100%] py-6  h-[70vh]" sx={{ }}>
          <div className='hidden lg:flex absolute items-center h-[65vh]'>
              <Button className='' sx={{}}   onClick={() => handleHeroNav('left')}>
                <ArrowCircleLeftRoundedIcon  sx={{fontSize: "3.5rem", color: theme.palette?.primary?.light}} />
              </Button>
          </div>
          
          <Stepper  connector={<CustomizedStepConnector width={100} />} className='px-20' activeStep={activeStep} >
            {proposedSchedule.map((step, index) => (
              // <div>
                
              // </div>
              <Step key={step.name} className='min-w-[15vw] max-w-[35vw] ' >
                <StepLabel 
                sx={{color:theme.palette?.primary?.light,}}
                
                  optional={
                    index === proposedSchedule.length - 1 ? (
                      <Typography sx={{color:theme.palette?.primary?.light,}} variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  <Typography variant='body1' className='font-bold' sx={{color: theme.palette?.primary?.light, fontFamily: "Playfair Display"}}>
                    {step.name}
                  </Typography>
                </StepLabel>
                <StepContent className=' overflow-y-auto max-h-[65vh]'>
                  <Typography sx={{color: theme.palette?.primary?.light,}}>{step.detail}</Typography>
                  {
                    step.features ?
                    <>
                      {
                        step.features.map((f, i) => (
                          <div key={i + ": " + f.name} className='pl-6 pt-3 '>
                            <Typography sx={{color: theme.palette?.primary?.light,}}>
                              {f.name}
                            </Typography>
                            <div className='pl-9'>
                              <Typography variant='caption' sx={{color: theme.palette?.primary?.light,}}>
                                {f.detail}
                              </Typography>
                            </div>

                          </div>
                        ))
                      }
                    </>
                    : 
                    null
                  }
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={()=> { handleNextFull(index) }}
                        sx={{ mt: 1, mr: 1, bgcolor: theme.palette?.primary?.light, color:theme.palette?.primary?.main }}
                      >
                        {index === proposedSchedule.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                      variant='outlined'
                        disabled={index === 0}
                        onClick={()=> {handleBackFull(index)}}
                        sx={{ mt: 1, mr: 1, color: theme.palette?.primary?.light, borderColor: theme.palette?.primary?.light, }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === proposedSchedule.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        <div className='hidden lg:flex absolute right-0 items-center h-[65vh]'>
            <Button className='' sx={{}}   onClick={() => handleHeroNav('right')}>
              <ArrowCircleRightRoundedIcon sx={{fontSize: "3.5rem", color: theme.palette?.primary?.light}} />
            </Button>
        </div>
        </Box>



      </div>
    
      
    </div>
  )
}

export default Timeline