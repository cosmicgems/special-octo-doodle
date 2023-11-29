import React, { useRef } from "react"
import { Inter } from 'next/font/google'
import { HomeComponent } from "../../components/Proposal Components/Home"
import { Challenge } from '../../components/Proposal Components/Challenge'
import { Solution } from '../../components/Proposal Components/Solution'
import { Deliverables } from '../../components/Proposal Components/Deliverables'
import { Quote } from '../../components/Proposal Components/Quote'
import { Esign } from '../../components/Proposal Components/E-Sign'
import { Timeline } from '../../components/Proposal Components/Proposed-Schedule'
import { Footer,  Navbar } from '../../components/Proposal Components'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { theme } from '../../styles/themes';


const lightTheme = createTheme(theme);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const nasserRef = useRef(null);
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const deliverablesRef = useRef(null);
  const timelineRef = useRef(null);
  const quoteRef = useRef(null);
  const eSignRef = useRef(null);
  
  const scrollToSection = (ref:any) => {    
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRefPick = (name:any) => {
    
      let ref
      switch (name) {
          case "Nasser Law":
              ref = nasserRef;
              break;
          case "Challenge":
              ref = challengeRef;
              break;
          case "Solution":
              ref = solutionRef;
              break;
          case "Deliverables":
              ref = deliverablesRef;
              break;
          case "Proposed Schedule":
              ref = timelineRef;
              break;
          case "Quote":
              ref = quoteRef;
              break;
          case "E-Sign":
              ref = eSignRef;
              break;
          default:
              break;
      }
      
      scrollToSection(ref)
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <div
        className="snap-y snap-mandatory overflow-y-auto min-h-screen scroll-smooth"
      >
        

        <Navbar 
        handleRefPick={handleRefPick}
        />

        <div ref={nasserRef} id="Nasser Law" className="snap-start">
          <HomeComponent />        
        </div>

        <div ref={challengeRef} id="Challenge" className="snap-start">
          <Challenge />
        </div>

        <div ref={solutionRef} id="Solution" className="snap-start">
          <Solution />
        </div>

        <div ref={deliverablesRef} id="Deliverables" className="snap-start">
          <Deliverables />
        </div>

        <div ref={timelineRef} id="Proposed Schedule" className="snap-start">
          <Timeline />
        </div>

        <div ref={quoteRef} id="Quote" className="snap-start">
          <Quote />
        </div>

        <div ref={eSignRef} id="E-Sign" className="snap-start">
          <Esign />
        </div>

      </div>
      <Footer />      
    </ThemeProvider>

  )
}
