import { useScroll, useGLTF, useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import Object from './Object'

export default function Objects({ aspectLimit, texture }) {

    const scroll = useScroll()
    const { height } = useThree((state) => state.viewport)
    const camera = useThree((state) => state.camera)

    const boxBlue = useRef()
    const boxOrange = useRef()
    const boxPurple = useRef()
    const boxRed = useRef()
    const boxYellow = useRef()
    const boxGreen = useRef()

    const model1 = useGLTF('./models/object1.glb')
    const model2 = useGLTF('./models/object2.glb')
    const model3 = useGLTF('./models/object3.glb')
    const model4 = useGLTF('./models/object4.glb')
    const model5 = useGLTF('./models/object5.glb')
    const model6 = useGLTF('./models/object6.glb')

    useFrame(() => {
        const r2a = scroll.range(0 / 5, 2 / 5)
        const r2b = scroll.range(0 / 5, 3 / 5)
        const r2c = scroll.range(0 / 5, 4 / 5)

        boxBlue.current.rotation.x = Math.PI * 0.2 * r2a
        boxOrange.current.rotation.x = Math.PI * 0.2 * r2b
        boxPurple.current.rotation.x = Math.PI * 0.2 * r2c
        boxRed.current.rotation.x = Math.PI * 0.3 * r2a
        boxYellow.current.rotation.x = Math.PI * 0.2 * r2b
        boxGreen.current.rotation.x = Math.PI * 0.2 * r2c

        boxBlue.current.rotation.z = -Math.PI * 0.2 * r2a
        boxOrange.current.rotation.z = Math.PI * 0.2 * r2b
        boxPurple.current.rotation.z = Math.PI * 0.2 * r2c
        boxRed.current.rotation.z = -Math.PI * 0.2 * r2a
        boxYellow.current.rotation.z = -Math.PI * 0.2 * r2b
        boxGreen.current.rotation.z = Math.PI * 0.2 * r2c

        boxBlue.current.rotation.y = Math.PI * r2a
        boxOrange.current.rotation.y = -Math.PI * r2b
        boxPurple.current.rotation.y = -Math.PI * r2c
        boxRed.current.rotation.y = Math.PI * r2a
        boxYellow.current.rotation.y = -Math.PI * r2b
        boxGreen.current.rotation.y = Math.PI * r2c

        boxBlue.current.position.y = -height - 3 + 2 * (height + 3) * r2a
        boxOrange.current.position.y = -height - 5 + 2 * (height + 15) * r2b
        boxPurple.current.position.y = -height - 1 + 2 * (height + 1) * r2c
        boxRed.current.position.y = -height - 4 + 2 * (height + 4) * r2a
        boxYellow.current.position.y = -height - 5 + 2 * (height + 5) * r2b
        boxGreen.current.position.y = -height - 6 + 2 * (height + 6) * r2c

    })

    return (
        <>
            <Object
                object={model1.nodes.object1}
                ref={boxBlue}
                scale={camera.aspect > aspectLimit ? 0.8 : 0.4}
                positionZ={3}
                positionX={camera.aspect > aspectLimit ? -2 : -0.7}
                color={'#fffbc2'}
                texture={texture}
            />

            <Object
                object={model2.nodes.object2}
                ref={boxOrange}
                scale={camera.aspect > aspectLimit ? 0.8 : 0.4}
                positionZ={-3}
                positionX={camera.aspect > aspectLimit ? 7 : 1.2}
                color={'#ffb1dd'}
                texture={texture}
            />

            <Object
                object={model3.nodes.object3}
                ref={boxPurple}
                scale={camera.aspect > aspectLimit ? 0.8 : 0.4}
                positionZ={-2}
                positionX={camera.aspect > aspectLimit ? -5 : -1.5}
                color={'#ffb1dd'}
                texture={texture}
            />

            <Object ref={boxRed}
                object={model4.nodes.object4}
                scale={camera.aspect > aspectLimit ? 0.8 : 0.4}
                positionZ={-5}
                positionX={camera.aspect > aspectLimit ? 2 : 1}
                color={'#174b30'}
                texture={texture}
            />

            <Object
                object={model5.nodes.object5}
                ref={boxYellow}
                scale={camera.aspect > aspectLimit ? 0.8 : 0.4}
                positionZ={-4}
                positionX={camera.aspect > aspectLimit ? 3 : 0.5}
                color={'#de656a'}
                texture={texture}
            />

            <Object
                object={model6.nodes.object6}
                ref={boxGreen}
                scale={camera.aspect > aspectLimit ? 0.8 : 0.4}
                positionZ={-1.5}
                positionX={camera.aspect > aspectLimit ? 5 : 0.5}
                color={'#fffbc2'}
                texture={texture}
            />
        </>
    )
}