
import {Html, useProgress} from '@react-three/drei'

const Loader = ()=> {
    const {progress} = useProgress();

    return(
        <Html>    
            <div>
                <p className='text-neon-pink font-bold'>{progress.toFixed(2)}%</p>
            </div>
        </Html>
    )
}

export default Loader