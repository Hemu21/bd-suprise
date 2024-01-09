import { Environment, useGLTF } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Page17() {
  const gltf = useGLTF("/models/page17/lamborghini.glb")
  return (
    <div className="h-screen w-full relative">
      <Canvas  >
        <OrbitControls />
        <ambientLight />
        <mesh>
          <group>
            <Environment background files={"/models/page17/winter_lake_01_4k.hdr"} />
            <group position={[10,-4,-5]}>
              <primitive object={gltf.scene} />
            </group>
          </group>
        </mesh>
      </Canvas>

      <div className='absolute bottom-3 right-3 '>
        <button onClick={() => window.location.href = "/our-journey/page19"} className='rounded-full pb-3 h-10 w-10 bg-cyan-300 text-white text-3xl'>{">"}</button>
      </div>
    </div>


  )
}