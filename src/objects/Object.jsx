import { forwardRef } from 'react'
import * as THREE from 'three'

export default forwardRef(function Object({ object, scale, positionX, positionZ, texture, color }, ref) {

    return (
        <mesh
            ref={ref}
            geometry={object.geometry}
            rotation={object.rotation}
            scale={scale}
            position-x={positionX}
            position-z={positionZ}
        >
            <meshStandardMaterial
                map={texture}
                metalness={0.7}
                roughness={0.4}
                color={color}
                side={THREE.DoubleSide}
            />
        </mesh>
    )
})