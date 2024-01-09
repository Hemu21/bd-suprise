import { Html, useProgress } from '@react-three/drei'
import React from 'react'
import { RingLoader } from 'react-spinners'


export default function LoadingSuprise() {
  const {progress} = useProgress()  
  return (
      <div className="w-full h-full">
        <div className="flex flex-col justify-center items-center pt-[25%] -translate-y-1/4">
            <p className=" text-2xl text-white">YOUR SUPRISE IS {progress}% LOADED</p>
            <RingLoader color="green" size={250} />
        </div>
      </div>
  )
}
