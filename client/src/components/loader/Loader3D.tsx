import { Html, useProgress } from "@react-three/drei";

export default function Loader3D(){
    const {progress} = useProgress();
    
        return(
            <Html>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span>{Math.round(progress)}%</span>
                </div>
            </Html>

        )
}