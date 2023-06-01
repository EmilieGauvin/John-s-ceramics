import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <>
        <Loader
            containerStyles={{ backgroundColor: '#f8eae3' }}
            innerStyles={{ backgroundColor: 'white' }}
            barStyles={{ backgroundColor: '#571c0a' }}
            dataStyles={{ color: '#571c0a' }}
            dataInterpolation={(p) => `${p.toFixed(0)}%`} // Text
        />
        <Canvas
            flat
            camera={{
                fov: 40,
                near: 0.1,
                far: 200,
                position: [0, 0, 6],
                rotation: [0, 0, 0]
            }}
        >
            <Experience />
        </Canvas>

    </>
)