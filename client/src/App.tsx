import { useEffect, useState } from 'react'
import { Outlet} from 'react-router-dom'
import Navbar from './Components/Navigation/Navbar'
import Loader from './Components/Loader/Loader'
import { preloadImages } from './utils/preLoadImages'


const imagesToLoad = [
  "/projects/models/images/asus_rog_pugio_2.png",
  "/projects/models/images/laptop_render.png",
  "/projects/models/images/Stanley_Quencher_02.png",
  "/projects/web/Microservice/docker.png",
  "/projects/web/MyLibrary/my-library-home-page.png",
  "/projects/web/parsley/Parsley-resized.png",
  "/logo/skills_logo/blender.png",
  "/logo/skills_logo/css.png",
  "/logo/skills_logo/figma.png",
  "/logo/skills_logo/html.png",
  "/logo/skills_logo/next.png",
  "/logo/skills_logo/react.png",
  "/logo/skills_logo/tailwind.png",
  "/logo/skills_logo/unity.png",
]


export default function App() {
  const [ready, setReady] = useState(false);
  const[imageProgress,setImageProgress] = useState(0);

  useEffect(()=> {
    preloadImages(imagesToLoad).then(()=> setImageProgress(100));
  },[])

  const progress = Math.round((imageProgress))

  useEffect(()=> {
    if(progress >= 100) {
      const delay = setTimeout(()=> setReady(true), 300);
      return () => clearTimeout(delay);
    }
  },[progress])

  if(!ready) return <Loader progress={progress} />

  return (
    <>
    <div>
      <Navbar/>
      <Outlet />
    </div>
    </>
    
  )
}

