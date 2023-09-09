import { Inter } from 'next/font/google'
import { useStateContext } from '../../Context/StateContext'
import VideoBackgroundHorizontal from '../components/Home Page/VideoBackgroundHorizontal'
import VideoBackgroundVertical from '../components/Home Page/VideoBackgroundVertical'
import CollageBackground from '../components/Home Page/CollageBackground'
import MaliekDavis from '../components/Home Page/MaliekDavis'
import PassionateTechnologist from '../components/Home Page/PassionateTechnologist'
import HomeButtons from '../components/Home Page/HomeButtons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const {horizontal, vertical, maliek, hovered,} = useStateContext();

  return (
    <>
      {hovered && horizontal ?
        <> <VideoBackgroundHorizontal /> </>  : null
      }

      {hovered && vertical ?
        <> <VideoBackgroundVertical /> </>  : null
      }
      {hovered && maliek ?
        <> <CollageBackground/> </>: ''
      }

    <main
      className={` flex  flex-col items-center justify-center  mb-5  px-4 md:px-14 lg:px-24 lg:mt-24 h-full   ${inter.className}`}
      style={{fontFamily: 'rajdhani'}}
    >
      

        <MaliekDavis />

        <PassionateTechnologist />

        <HomeButtons />

    </main>
    </>
  )
}
