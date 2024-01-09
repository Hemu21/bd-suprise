import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Overlay from './Overlay'
import { Page1 } from '../pages/Page1'

export default function Journey() {
  return (
      <div className="h-screen w-full">
        <Canvas >
          <OrbitControls />
          <ambientLight />
          <Stars radius={100} depth={50} count={5000} factor={6} saturation={0} fade speed={3} />
          <mesh>
            <Page1 />
          </mesh>
          <Overlay />
        </Canvas>
      </div>
  )
}
