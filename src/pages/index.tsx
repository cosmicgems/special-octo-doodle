import { Inter } from 'next/font/google'
import { useStateContext } from '../../Context/StateContext'
import VideoBackgroundHorizontal from '../components/Home Page/VideoBackgroundHorizontal'
import VideoBackgroundVertical from '../components/Home Page/VideoBackgroundVertical'
import CollageBackground from '../components/Home Page/CollageBackground'
import MaliekDavis from '../components/Home Page/MaliekDavis'
import PassionateTechnologist from '../components/Home Page/PassionateTechnologist'
import HomeButtons from '../components/Home Page/HomeButtons'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const {horizontal, vertical, maliek, hovered,} = useStateContext();

  return (
    <Layout>
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
      className={` flex  flex-col items-center justify-center  mt-8  px-4 md:px-14 lg:px-24 lg:mt-24 h-full   ${inter.className}`}
      style={{fontFamily: 'rajdhani'}}
    >
      

        <MaliekDavis />

        <PassionateTechnologist />

        <HomeButtons />

    </main>
    </Layout>
  )
}
