import { Suspense,useEffect,useState } from "react";
import {Canvas} from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF} from '@react-three/drei';


const Desk = ()=> {
  const desk = useGLTF('./my_desk_view/Desk.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
        object={desk.scene} 
        scale={2}
        position={[0,-3,5]}  />
    </mesh>
  )
}



const DeskCanvas = ()=>{
  return (
    <Canvas frameloop="demand" shadows camera={{position:[0,0,0],fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense>
        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Desk />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


export default DeskCanvas