'use client'
import React ,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import {Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei';
import CanvasLoader from './Loader';

const Ball = (props: { icon: string; }) => {
    const [decal] = useTexture([props.icon]);

    return (
        <Float autoInvalidate speed={2.75} rotationIntensity={1} floatIntensity={2}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} />
          <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1,2]}/>
            <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            />
            <Decal
              position={[0, 0, 1]}
              rotation={[2*Math.PI,0,6.25]}
              map={decal}
            />
          </mesh>
        </Float>
    )
}

const BallCanvas = ({icon}:{icon:string}) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball icon={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas