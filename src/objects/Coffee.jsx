import { useTexture } from '@react-three/drei'
import { forwardRef } from 'react'

export default forwardRef(function Coffee({ coffeeVisible }, ref) {

    const coffeeTexture = useTexture('./textures/coffee.jpg')

    return (
        <mesh ref={ref} >
            <circleGeometry />
            <meshBasicMaterial
                map={coffeeTexture}
                visible={coffeeVisible}
            />
        </mesh>
    )
})