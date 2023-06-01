import { useTexture } from '@react-three/drei'
import { forwardRef } from 'react'

export default forwardRef(function CupShadow({ visible, scale, rotationX, position, shadowOpacity }, ref) {

    const shadowTexture = useTexture('./textures/shadow.png')

    return (
        <mesh
            ref={ref}
            position={position}
            rotation-x={rotationX}
            scale={scale}
        >
            <circleGeometry />
            <meshBasicMaterial
                map={shadowTexture}
                transparent
                opacity={shadowOpacity}
                visible={visible}
            />
        </mesh>
    )
})