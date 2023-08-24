import React from "react";
import {
  OrbitControls,
  Center,
  Environment,
  center,
  ContactShadows,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import PizzaBox from "./PizzaBox";
const Expe = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 10 }}
      // dpr={[1, 2]}
      // gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
      // enablePan={false}
      // enableZoom={true}
      // minPolarAngle={Math.PI / 2.2}
      // maxPolarAngle={Math.PI / 2.2}
      />
      <PizzaBox />
      <Environment preset="city" />
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <ambientLight intensity={0} />
    </Canvas>
  );
};

export default Expe;
