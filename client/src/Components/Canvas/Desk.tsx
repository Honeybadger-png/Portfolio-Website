import {Canvas} from "@react-three/fiber"
import { Suspense } from "react"
const Desk = ()=>{
  return (
    <mesh>

    </mesh>
  )
}

const DeskCanvas = ()=>{

  return (
    <Canvas>
      <Suspense>
        <Desk>

        </Desk>
      </Suspense>
    </Canvas>
  )
}