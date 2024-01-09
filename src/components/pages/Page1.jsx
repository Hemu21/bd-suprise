
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Page1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/page1/solar_system/scene.gltf')
  const { actions} = useAnimations(animations, group)
  useEffect(()=>{
    actions["Animation"].play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0,0,-81]} scale={0.1} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="05_ceres_1" position={[540.614, 101.173, 0]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.ceres} />
              </group>
              <group name="03_earth_3" position={[367.997, 0, 0]}>
                <group name="moon_2" position={[19.065, 0, 0]}>
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Moon} />
                </group>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Earth} />
              </group>
              <group name="11_eris_4" position={[1800.054, 0, 0]}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.eris} />
              </group>
              <group name="12_haumea_5" position={[1765.895, 938.943, 0]}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.haumea} />
              </group>
              <group name="06_jupiter_6" position={[830.956, 0, 0]}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.jupiter} />
              </group>
              <group name="10_makemake_7" position={[1661.777, 921.138, 0]}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.makemake} />
              </group>
              <group name="04_mars_8" position={[449.583, 0, 0]}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.mars} />
              </group>
              <group name="01_mercury_9" position={[174.356, 0, 0]}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.mercury} />
              </group>
              <group name="09_neptune_10" position={[1712.732, 0, 0]}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.neptune} />
              </group>
              <group name="07_saturn_13" position={[1202.783, 0, 0]}>
                <group name="saturn_ring_12" position={[0.001, 0, 0.001]} rotation={[0, -1.057, 0]}>
                  <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.saturn_ring} />
                </group>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.saturn} />
              </group>
              <group name="00_sun_14">
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.material} />
              </group>
              <group name="08_uranus_15" position={[1506.37, 0, 0]}>
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.uranus} />
              </group>
              <group name="02_venus_16" position={[262.429, 0, -0.001]}>
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.venus} />
              </group>
              <group name="01_mecury_orbit_17" scale={10} />
              <group name="02_venus_orbit_18" scale={10} />
              <group name="09_neptune_orbit_19" scale={10} />
              <group name="03_earth_orbit_20" scale={10} />
              <group name="04_mars_orbit_21" scale={10} />
              <group name="05_ceres_orbit_22" scale={10} />
              <group name="06_jupiter_orbit_24" scale={10} />
              <group name="07_saturn_orbit_25" scale={10} />
              <group name="08_uranus_orbit_26" scale={10} />
              <group name="10_makemake_orbit_27" scale={10} />
              <group name="11_eris_orbit_29" scale={10} />
              <group name="12_haumea_orbit_30" scale={10} />
              <group name="asteroid_field_32">
                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials['asteroid.002']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/page1/solar_system/scene.gltf')

