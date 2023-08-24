import React from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, center } from "@react-three/drei";

import Model from "./Model";
import Box from "./Box";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const index = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          {/* <Model /> */}
          <Box />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default index;
