import { Float, useScroll, useTexture, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import Cup from './objects/Cup'
import Table from './objects/Table'
import CoffeeMaker from './objects/CoffeeMaker'
import Objects from './objects/Objects'

import './style.css'

export default function Composition() {

    const aspectLimit = 3 / 2
    const { width, height } = useThree((state) => state.viewport)
    const camera = useThree((state) => state.camera)
    const texture = useTexture('./textures/textureCeramic.png')
    const scroll = useScroll()
    const table = useRef()

    useFrame(() => {
        const r7 = scroll.range(9 / 10, 1 / 10)

        camera.aspect > aspectLimit ?
            camera.rotation.x = -Math.PI * 0.5 * r7
            : table.current.position.y = -6 + r7 * 6
    })

    return (
        <>
            <Suspense fallback={null}>

                <Cup scale={camera.aspect > aspectLimit ? 0.7 : 0.35} texture={texture} aspectLimit={aspectLimit} />

                <Float floatIntensity={1} floatingRange={[-0.1, 0.1]} speed={1} rotationIntensity={1} >

                    <Objects
                        texture={texture}
                        aspectLimit={aspectLimit}
                    />

                    <CoffeeMaker
                        scale={camera.aspect > aspectLimit ? 1.7 : 0.85}
                        color='brown'
                        aspectLimit={aspectLimit}
                    />

                </Float>

                <Table
                    ref={table}
                    scale={1.2}
                    rotationX={camera.aspect > aspectLimit ? -Math.PI * 0.5 : 0}
                    position={camera.aspect > aspectLimit ? [0, -6, camera.position.z] : [0, -6, 0]}
                    width={width}
                    height={height}
                    color='green'
                    fontSize={camera.aspect > aspectLimit ? 0.2 : 0.1}
                    maxWidth={camera.aspect > aspectLimit ? width * 0.3 : width * 0.7}
                    positionTextX={camera.aspect > aspectLimit ? -1.8 : 0}
                    positionTextY={camera.aspect > aspectLimit ? 0 : 1}
                    positionTextZ={0.5}
                />

            </Suspense>
        </>
    )
}

useGLTF.preload('./models/coffeeMaker.glb')
useGLTF.preload('./models/object1.glb')
useGLTF.preload('./models/object2.glb')
useGLTF.preload('./models/object3.glb')
useGLTF.preload('./models/object4.glb')
useGLTF.preload('./models/object5.glb')
useGLTF.preload('./models/object6.glb')
useGLTF.preload('./models/cup.glb')
