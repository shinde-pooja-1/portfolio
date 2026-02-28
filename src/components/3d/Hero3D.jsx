"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
function ParticleField() {
  const ref = useRef(null);
  const [positions, finalColors] = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Core brand colors
    const primary = new THREE.Color("#8b5cf6");
    const secondary = new THREE.Color("#ffffff");
    for (let i = 0; i < count; i++) {
      const radius = 10 + Math.random() * 8;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.set([x, y, z], i * 3);
      const mixed = Math.random() > 0.5 ? primary : secondary;
      const color = mixed.clone().lerp(new THREE.Color("#2a1b54"), Math.random() * 0.5);
      colors.set([color.r, color.g, color.b], i * 3);
    }
    return [positions, colors];
  }, []);
  useFrame(state => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.03;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });
  return <Points ref={ref} positions={positions} colors={finalColors} stride={3} frustumCulled={false}>
            <PointMaterial transparent vertexColors size={0.06} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
        </Points>;
}
export default function Hero3D() {
  return <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Canvas camera={{
      position: [0, 0, 15],
      fov: 60
    }}>
                <fog attach="fog" args={["#0B0B0F", 10, 25]} />
                <ambientLight intensity={0.5} />
                <ParticleField />
            </Canvas>

            {/* Subtle vignette gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg)_100%)] opacity-80" />
        </div>;
}