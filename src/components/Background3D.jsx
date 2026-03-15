import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedMoon() {
  const moonRef = useRef();
  
  useFrame((state) => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.001; // Slow rotation
      moonRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2; // Gentle hover
    }
  });

  return (
    <Sphere ref={moonRef} args={[2.5, 64, 64]} position={[0, 0, 0]}>
      {/* We will add the texture later, for now we use a distorted crater-like material */}
      <MeshDistortMaterial
        color="#808080"
        attach="material"
        distort={0.15}
        speed={1}
        roughness={0.8}
        metalness={0.2}
      />
    </Sphere>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        
        {/* Animated Moon in the center implicitly */}
        <AnimatedMoon />
        
        {/* Floating background particles/stars */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
