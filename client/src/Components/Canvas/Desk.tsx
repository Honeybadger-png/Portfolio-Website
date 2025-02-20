import { Suspense,useEffect,useState } from "react";
import {Canvas} from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF} from '@react-three/drei';


const Desk = ()=> {
  const desk = useGLTF('./my_desk_view/Desk.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={100} />
      <primitive 
        object={desk.scene} 
        scale={4}
        position={[1,-5,-10]}  />
    </mesh>
  )
}



const DeskCanvas = ()=>{
  return (
    <Canvas frameloop="demand" shadows camera={{position:[-0.1,1,1],fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense>
        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Desk />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


export default DeskCanvas