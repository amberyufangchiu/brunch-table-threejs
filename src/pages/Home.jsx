import React, {Suspense} from 'react';
import '../styles/home.scss'
import { AcaiBowl, Coffee, Pancake } from '../components/Model';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, AccumulativeShadows, RandomizedLight, } from "@react-three/drei";

function Home() {
  return (
    <div className='main'>
        <div className='ball'>
          <Canvas shadows dpr={[1, 2]}  camera={{ position: [4, 4, 5], fov: 50 }}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.7} />
            <directionalLight position={[-1, 2, 6]} />
            <Suspense fallback={null}>
                <AcaiBowl scale={0.5}  position={[1, 1, 1]}/>
                <Pancake scale={7} position={[1, 0.6, 3]}/>
                <Coffee scale={8} position={[3, 0.8, 1]}/>
                <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="red" scale={20} position={[0, -0.005, 0]}>
                  <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
                </AccumulativeShadows>
            </Suspense>
          </Canvas>
        </div>
    </div>
  );
}

export default Home;