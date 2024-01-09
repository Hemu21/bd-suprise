import "../App.css"
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Gltf, OrbitControls} from "@react-three/drei";
import { NavLink } from "react-router-dom";


const App = () => {
  return (
    <>
      <div className="h-screen w-screen relative">
        <Canvas>
          <ambientLight  />
          <OrbitControls autoRotate={true} autoRotateSpeed={0.35} enableZoom={false} />
          <Gltf src="/home/free_-_skybox_firework_sky.glb" receiveShadow castShadow />
        </Canvas>
      </div>
      <div className="absolute top-1/4 -translate-x-1/2 translate-y-1/2 left-1/2">
        <h1 className="text-orange-500 font-bold sm:text-6xl  text-2xl text-center ">HAPPY BIRTHDAY BANGARAM</h1>
      </div>
      <div className="absolute sm:top-3/4 top-2/4 lg:top-1/2 -translate-x-1/2 translate-y-1/2 left-1/2">
        <NavLink to={"/our-journey"} className="bg-cyan-400 hover:bg-sky-700 rounded-full pt-5 font-bold pb-5 pr-9 pl-9"> START </NavLink>
      </div>
    </>
  );
};

export default App;