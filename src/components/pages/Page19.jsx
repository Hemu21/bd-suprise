import { Environment, useGLTF } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Page19() {
  const gltf = useGLTF("/models/page18/lift.glb")
  return (
    <div className="h-screen w-full relative">
      <Canvas  >
        <OrbitControls />
        <ambientLight />
        <mesh>
          <group>
            <Environment background files={"/models/page18/wobbly_bridge_4k.hdr"} />
            <group position={[-1,-4,1]} rotation={[0,5,0]}>
              <primitive object={gltf.scene} />
            </group>
          </group>
        </mesh>
      </Canvas>
      <div className='absolute bottom-3 right-3 '>
        <button onClick={() => window.location.href = "/our-journey"} className='rounded-full pb-3 h-10 w-10 bg-cyan-300 text-white text-3xl'>{">"}</button>
      </div>
    </div>


  )
}