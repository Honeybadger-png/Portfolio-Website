import { Suspense } from "react";
import {Canvas} from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF} from '@react-three/drei';
import Loader from '../Loader/Loader'

const Desk = ()=> {
  const desk = useGLTF('./my_desk_view/desk.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={100} />
      <primitive 
        object={desk.scene} 
        scale={4}
        position={[1,-5,0]}
          
      />
    </mesh>
  )
}



const DeskCanvas = ()=>{
  return (
    <Canvas frameloop="demand" shadows camera={{position:[1,-10,12],fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<Loader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Desk />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


export default DeskCanvas