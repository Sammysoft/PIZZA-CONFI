/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 public/PizzaBox.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/PizzaBox.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[-0.168, 0, 0]} rotation={[0, 0, 0.489]} scale={0.016}>
          <primitive object={nodes.Base} />
          <group name="Box_12in">
            <skinnedMesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials.CardboardInterior} skeleton={nodes.Plane002.skeleton} />
            <skinnedMesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={materials.CardBoardExterior} skeleton={nodes.Plane002_1.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/PizzaBox.glb')
