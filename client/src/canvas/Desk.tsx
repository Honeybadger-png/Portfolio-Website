import { Suspense } from "react";
import {Canvas} from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF} from '@react-three/drei';
import Loader3D from "../Components/Loader/Loader3D";

const Desk = ()=> {
  const desk = useGLTF('./my_desk_view/desk.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={2}  position={[1,5,4]} groundColor="black" />
      <pointLight intensity={10} position={[-2,1,0]}/>
      <spotLight position={[0,0,-4]} intensity={10} castShadow angle={Math.PI/3} />
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
      <Suspense fallback={<Loader3D/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Desk />
        <Preload all/>
      </Suspense>
    </Canvas>
  )
}


export default DeskCanvas