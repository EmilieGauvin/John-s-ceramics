import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import Coffee from './Coffee'
import CupShadow from './CupShadow'

export default function Cup(props) {

    const [coffeeVisible, setCoffeeVisible] = useState(false)
    const [shadowOpacity, setShadowOpacity] = useState(0)

    const { nodes } = useGLTF('./models/cup.glb')
    const scroll = useScroll()
    const { width } = useThree((state) => state.viewport)
    const camera = useThree((state) => state.camera)

    const cup = useRef()
    const coffee = useRef()
    const cupShadow = useRef()

    useFrame(() => {
        const r0 = scroll.range(0, 1 / 5)
        const r1 = scroll.range(0 / 5, 3 / 5)
        const r3 = scroll.range(2 / 5, 1 / 5)
        const c3 = scroll.curve(1 / 5, 4 / 5)
        const r7 = camera.aspect > props.aspectLimit ?
            scroll.range(9 / 10, 1 / 10)
            : scroll.range(9 / 10 - 1 / 40, 1 / 10 + 1 / 40)
        const c7 = scroll.curve(39 / 40, 1 / 40)
        const v3 = scroll.visible(3 / 5, 2 / 5)
        const r4 = scroll.range(3 / 5, 1 / 5)
        const c4 = scroll.curve(4 / 5, 1 / 5)
        const v5 = scroll.visible(9 / 10, 1 / 10)
        const r5 = scroll.range(9 / 10 + 3 / 40, 1 / 40)
        
        cup.current.position.x = camera.aspect > props.aspectLimit ?
            - width / 6 * c3 + (width / 4) * r7
            : - width / 6 * c3
        cup.current.position.y = camera.aspect > props.aspectLimit ?
            - (5 - 1) * r7 - 1 * r3 - 0.3 * c4
            : 0.5 * r7 - 1 * r3 - 0.3 * c4
        cup.current.position.z = camera.aspect > props.aspectLimit ?
            5 * (1 - r0) + camera.position.z * r7
            : 5 * (1 - r0) + (0.8) * r7 + 1 * c4

        cup.current.rotation.x = camera.aspect > props.aspectLimit ?
            Math.PI * 0.3 * (1 - r0) + Math.PI * 0.15 * (1 - r7) - Math.PI * 0.15 * c3
            : Math.PI * 0.3 * (1 - r0) + Math.PI * 0.15 * (1 - r7) - Math.PI * 0.15 * c3 + Math.PI * 0.5 * r7
        cup.current.rotation.y = (Math.PI * 2) * r1
        cup.current.rotation.z = - Math.PI / 2 - Math.PI * 0.2 * c3

        if (v3 != coffeeVisible) setCoffeeVisible(v3)
        if (coffeeVisible) {
            coffee.current.position.x = cup.current.position.x
            coffee.current.position.y = camera.aspect > props.aspectLimit ?
                -0.2 + cup.current.position.y + 0.5 * (-1 + r4)
                : -0.1 + cup.current.position.y + 0.25 * (-1 + r4) + 0.1 * r7
            coffee.current.position.z = cup.current.position.z
            coffee.current.rotation.x = camera.aspect > props.aspectLimit ?
                cup.current.rotation.x - Math.PI * 0.5 - Math.PI * 0.035 * c7
                : cup.current.rotation.x - Math.PI * 0.5
            coffee.current.scale.x = camera.aspect > props.aspectLimit ?
                1 - 0.5 * (1 - r4)
                : (1 - 0.5 * (1 - r4)) * 0.5
            coffee.current.scale.y = coffee.current.scale.x
            coffee.current.scale.z = coffee.current.scale.x
        }

        if (v5) 
        {
            setShadowOpacity(r5)
            cupShadow.current.position.x = cup.current.position.x
            camera.aspect > props.aspectLimit ?
            cupShadow.current.position.z = cup.current.position.z
            : cupShadow.current.position.y = cup.current.position.y
        }
    })

    return <>
        <mesh
            ref={cup}
            geometry={nodes.cup.geometry}
            rotation={nodes.cup.rotation}
            position-y={-0.5}
            scale={props.scale}
        >
            <meshStandardMaterial
                map={props.texture}
                metalness={0.7}
                roughness={0.4}
                envMapIntensity={0.5}
            />
        </mesh>

        <Coffee ref={coffee} coffeeVisible={coffeeVisible} />

        <CupShadow
        scale = {camera.aspect > props.aspectLimit ? 1.6 : 0.9}
            ref={cupShadow}
            visible={shadowOpacity === 0 ? false : true}
            shadowOpacity={shadowOpacity*0.85}
            rotationX={camera.aspect > props.aspectLimit ? -Math.PI * 0.5 : 0}
            position={
                camera.aspect > props.aspectLimit ? [0, -6 + 0.1, camera.position.z] : [0, 0.1, 0.7]}
        />

    </>

}