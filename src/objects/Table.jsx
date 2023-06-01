import { Text, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { forwardRef } from 'react'

export default forwardRef(function Table({ scale, position, rotationX, width, height, fontSize, maxWidth, positionTextX, positionTextY, positionTextZ }, ref) {

    const woodTexture = useTexture('./textures/woodTexture2.png')
    woodTexture.repeat.x = 1
    woodTexture.repeat.y = 1
    woodTexture.rotation = Math.PI * 0.5
    woodTexture.wrapS = THREE.RepeatWrapping
    woodTexture.wrapT = THREE.RepeatWrapping

    return (
        <mesh ref={ref} scale={scale} position={position} rotation-x={rotationX}>
            <planeGeometry args={[width, height]} />
            <meshStandardMaterial map={woodTexture} envMapIntensity={0.1} />

            <Text
                fontSize={fontSize}
                maxWidth={maxWidth}
                position-x={positionTextX}
                position-y={positionTextY}
                position-z={positionTextZ}
            >
                In my studio, I experiment with a variety of techniques and materials,
                from hand-building to wheel-throwing, and from traditional glazes to unconventional finishes.
                I'm always looking for new ways to create unique textures, colors, and shapes
                that defy convention and challenge the viewer's expectations.

                <meshBasicMaterial color='white' />
            </Text>

        </mesh>
    )
})