import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Ball() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#e3c4a4"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
}