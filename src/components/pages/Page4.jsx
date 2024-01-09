import { Environment, useGLTF } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


export default function Page4() {
  const gltf = useGLTF("/models/page4/china.glb")
  return (
    <div className="h-screen w-full relative">
      <Canvas  >
        <OrbitControls />
        <ambientLight />
        <mesh>
          <group>
            <Environment background path={"/models/page4"} />
            <group position={[6,-4,-2]} rotation={[0,4.25,0]}>
              <primitive object={gltf.scene} />
            </group>
          </group>
        </mesh>
      </Canvas>

      <div className='absolute bottom-3 right-3 '>
        <button onClick={() => window.location.href = "/our-journey/page6"} className='rounded-full pb-3 h-10 w-10 bg-cyan-300 text-white text-3xl'>{">"}</button>
      </div>
    </div>

  )
}