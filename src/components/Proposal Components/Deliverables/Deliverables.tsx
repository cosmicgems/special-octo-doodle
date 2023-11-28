import { deliverables } from '../../../assets/deliverableAssets';
import React, { useRef, useState, useEffect } from 'react'
import { Deliverable } from '.'
import { Typography } from '@mui/material'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Button from '@mui/material/Button';
import { theme } from '../../../styles/themes';

const DeliverableItemComponent = () => {
  

//   const targetRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scrollContainer = targetRef.current;

//     if(scrollContainer) {
//       // Add an event listener to handle scroll snap on scroll end
//       const handleScroll = () => {
//       const scrollLeft = scrollContainer.scrollLeft;
//       const containerWidth = scrollContainer.clientWidth;
//       const featuredCards = Array.from(scrollContainer.querySelectorAll('.scrollable-item')) as HTMLElement[];
      

//       if (featuredCards.length > 0) {
//         let nearestCard: HTMLElement | null = null;
//         let minDistance = Infinity;
//       console.log(featuredCards, "here");
    
//         // Find the nearest project card based on scroll position
//       featuredCards.forEach((card) => {
//           const cardRect = card.getBoundingClientRect();
//           const distance = Math.abs(cardRect.left - scrollLeft);

//           if (distance < minDistance) {
//           minDistance = distance;
//           nearestCard = card;
//           }
//       });

//       // Snap to the nearest project card
//       if (nearestCard) {
//           scrollContainer.scrollTo({
//           left: nearestCard.offsetLeft ,
//           behavior: 'smooth',
//           });
//       }
//       };

//       if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll);
//       }

//       return () => {
//       if (scrollContainer) {
//           scrollContainer.removeEventListener('scroll', handleScroll);
//       }
//       };      
//     }

      
//     }


// }, []);
    
const deliverablesRef = useRef<HTMLDivElement>(null);

const handleHeroNav = (direction:string) => {
  if (deliverablesRef.current) {
    if (direction === 'left') {
      deliverablesRef.current.scrollLeft -= 400;
    }
    if (direction === 'right') {
      deliverablesRef.current.scrollLeft += 400;
    }
  }
};

  return (
    <div className='deliverables-component min-h-screen'>

      <div className='py-3 flex flex-col md:flex-row justify-center items-center min-h-screen gap-3'>

      <div className='px-3 md:w-1/5 md:hidden md:justify-center md:items-center'>
        <Typography variant='h4' className='gradient-text'>
          Deliverables
        </Typography>        
      </div>
      <div className='hidden quote-card-component rounded-r md:min-h-[15vh] px-3 md:w-1/5 md:flex md:justify-end md:items-center'>
        <Typography variant='h4' className='gradient-text'>
          Deliverables
        </Typography>        
      </div>

        <div ref={deliverablesRef} className='snap-mandatory w-full md:w-4/5 flex overflow-x-auto md:overflow-x-hidden py-3 gap-12 px-6 md:gap-20 md:px-16 snap-x items-center'>
          <div className='hidden md:flex absolute items-center justify-center left-[20%]'>
              <Button className=' ' sx={{}}   onClick={() => handleHeroNav('left')}>
                <ArrowCircleLeftRoundedIcon  sx={{fontSize: "3.5rem", color: theme.palette?.primary?.main}} />
              </Button>
          </div>
          <div className='w-[24vw]'/>
          {
            deliverables.map(({name, detail, feature}, i) => {
              return (
                <div key={i + ": " + name} className='flex items-center snap-center'>
                  <Deliverable name={name} detail={detail} feature={feature} />
                </div>
              )
            })
          }
          <div className='w-[24vw]'/>
          <div className='hidden md:flex absolute items-center  right-0'>
              <Button className='' sx={{}}   onClick={() => handleHeroNav('right')}>
                <ArrowCircleRightRoundedIcon  sx={{fontSize: "3.5rem", color: theme.palette?.primary?.main}} />
              </Button>
          </div> 
        </div>

      </div>

    </div>
  )
}

export default DeliverableItemComponent