import { Html } from '@react-three/drei'
import React from 'react'

export default function Overlay() {
  return (
    <Html>
      <section className="-translate-x-[50%] -translate-y-[35%] w-[200px] h-screen">
        <h1 className="text-center text-cyan-300">This is a 3D website.</h1>
        <h1 className="text-center text-cyan-300">You can play with objects</h1>
        <h1 className="mt-[360px] text-center text-cyan-300">To START OUR JOURNEY</h1>
        <div className='flex justify-center'>
          <button onClick={()=>window.location.href="/our-journey/page2"} className='bg-cyan-300 text-center  text-white cursor-pointer rounded-lg h-8 w-28 '>Click Here</button>
        </div>
      </section>
    </Html>
  )
}
