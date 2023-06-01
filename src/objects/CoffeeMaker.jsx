import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'

export default function CoffeeMaker({ aspectLimit, scale }) {

    const model = useGLTF('./models/coffeeMaker.glb')
    const animations = useAnimations(model.animations, model.scene)
    const [coffeeAnimation, setCoffeeAnimation] = useState(false)

    const scroll = useScroll()

    const { width, height } = useThree((state) => state.viewport)
    const camera = useThree((state) => state.camera)

    const coffeeMaker = useRef()

    useFrame(() => {
        const r3 = scroll.range(2 / 5, 1 / 5)
        const c3 = scroll.curve(2 / 5, 3 / 5)
        const r5 = scroll.range(4 / 5, 1 / 5)
        const v2 = scroll.visible(3 / 5, 1 / 5)

        if (v2 != coffeeAnimation) setCoffeeAnimation(v2)

        coffeeMaker.current.position.x = camera.aspect > aspectLimit ?
            - width / 6 * c3 + 1
            : - width / 6 * c3 + 0.5
        coffeeMaker.current.position.y = camera.aspect > aspectLimit ?
            2 * height - (2 * height - 0.7) * r3 + 2 * r5
            : 2 * height - (2 * height - 0.3) * r3 + 2 * r5
        coffeeMaker.current.position.z = -3 * r5
        coffeeMaker.current.rotation.x = (Math.PI / 2) * r5
        coffeeMaker.current.rotation.z = camera.aspect > aspectLimit ?
            Math.PI / 3 * c3
            : Math.PI / 2.7 * c3
    })

    useEffect(() => {
        const pouring = animations.actions.pouring
        pouring.clampWhenFinished = true;
        pouring.loop = THREE.LoopOnce;
        if (coffeeAnimation === true) pouring.reset().play()
    }, [coffeeAnimation])

    return <primitive object={model.scene} ref={coffeeMaker} scale={scale} />

}