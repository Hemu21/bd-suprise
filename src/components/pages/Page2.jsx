import { Environment, useGLTF } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


export function Page2() {
  const gltf = useGLTF("/models/page2/bike_ride.glb")
  return (
    <div className="h-screen w-full relative">
      <Canvas  >
        <OrbitControls />
        <ambientLight />
        <mesh>
          <group>
            <Environment background path={"/models/page2"} />
            <group position={[0,-4,0]} rotation={[0,0.25,0]}>
              <primitive object={gltf.scene} />
            </group>
          </group>
        </mesh>
      </Canvas>
      <div className='absolute bottom-3 right-3 '>
        <button  onClick={()=>window.location.href="/our-journey/page3"} className='rounded-full pb-3 h-10 w-10 bg-cyan-300 text-white text-3xl'>{">"}</button>
      </div>
    </div>
    
  )
}
