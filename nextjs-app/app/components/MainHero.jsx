"use client"
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { MeshTransmissionMaterial, OrbitControls, useGLTF, useTexture, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useControls } from 'leva'
import gsap from 'gsap'

// Create the wave shader material
const WaveShaderMaterial = shaderMaterial(
    {
      u_time: 0,
      u_resolution: new THREE.Vector2(),
      u_amplitude: 0.1,
      u_frequency: 10.0,
      u_speed: 1.0, // Added speed uniform
    },
    // Vertex shader
    `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    // Fragment shader
    `
      precision mediump float;
      
      varying vec2 v_uv;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_amplitude;
      uniform float u_frequency;
      uniform float u_speed;
  
      float wave(vec2 uv, float frequency, float amplitude, float speed) {
        return sin(uv.x * frequency + u_time * speed) * amplitude;
      }
  
      void main() {
        vec2 uv = v_uv;
        
        // Base colors
        vec3 oceanColor = vec3(1.0, 0.5, 0.0);
        vec3 yellowColor = vec3(0.0, 0.0, 0.0);
        vec3 blackColor = vec3(1.0, 0.3, 0.0);
  
        // Create wave
        float wave1 = wave(uv, u_frequency * 0.5, u_amplitude * 1.0, u_speed * 2.5);
        
        // Create smooth transitions between colors based on y position and wave
        float bottomEdge = smoothstep(0.0, 0.3, uv.y + wave1);
        float topEdge = smoothstep(0.1, 0.5, uv.y + wave1);
        
        // Smoothly blend between colors using the edges
        vec3 bottomColor = mix(blackColor, oceanColor, bottomEdge);
        vec3 finalColor = mix(bottomColor, yellowColor, topEdge);
  
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  )
  
  // Extend the material to make it available in JSX
  extend({ WaveShaderMaterial })


function WaveBackground() {
  const meshRef = useRef()

  
  
  useFrame(({ clock, size }) => {
    if (meshRef.current) {
      meshRef.current.material.u_time = clock.getElapsedTime()
      meshRef.current.material.u_resolution.set(size.width, size.height)
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -20]} >
      <planeGeometry args={[100, 100]} />
      <waveShaderMaterial
       
        u_amplitude={0.1}
        u_frequency={10.0}
        u_speed={0.3}
      />
    </mesh>
  )
}

// Your existing Model component
export function Model() {
  const gltf = useGLTF('/assets/models/fractalGlassModel.glb')
  const normalMap = useTexture('/assets/models/Material_normal.png') 
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
  normalMap.anisotropy = 16

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(0xffffff),
          roughness: 0,
          metalness: 0,
          transmission: 1,     
          thickness: 0.5,       
          transparent: true,
          opacity: 1,
          normalMap: normalMap,
          side: THREE.DoubleSide 
        })
      }
    })
  }, [gltf, normalMap])

  return <primitive object={gltf.scene} />
}

// Your existing Bgmodel component
function Bgmodel() {
  const materialProps2 = useControls({
    roughness:{value:0.5,min:0,max:1,step:0.2},
    transmission: { value: 1, min: 0, max: 1 },
    ior: { value: 1.3, min: 0, max: 3, step: 0.1 },
    clearcoat: { value: 1, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
    thickness: { value: 3.51, min: 0, max: 5, step: 0.05 },
    backsideThickness: { value: 2.72, min: 0, max: 3 },
    // roughness: { value: 0.0, min: 0, max: 1, step: 0.1 },
    reflectivity: { value: 0.4, min: 0, max: 1, step: 0.01 },
    // anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
    // chromaticAberration: { value: 0.67, min: 0, max: 1 },
    // distortion: { value: 1.68, min: 0, max: 4, step: 0.01 },
    // temporalDistortion: { value: 0.03, min: 0, max: 1, step: 0.01 },
    // anisotropicBlur: { value: 4.46, min: 0, max: 5, step: 0.01 },
    // color: "#ffffff",
    // transmission:{value:0.5,min:0,max:10,step:0.01}
  })
  
  const normalMap = useTexture("/assets/models/Material_normal.png")
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
  normalMap.anisotropy = 16
  
  const backgroundModel = useGLTF("/assets/models/fractalGlassModel.glb")
  
  return (
    <group
      scale={2.5}
      position={[0, 2, -15]}
      rotation={[0, 0, 0]}
    >
      <mesh geometry={backgroundModel.nodes.Plane002.geometry}>
        <MeshTransmissionMaterial {...materialProps2} />
      </mesh>
    </group>
  )
}

export default function MainHero() {
    const [lightPosition, setLightPosition] = useState({
        x: 10,
        y: 10,
    });

    const mouseMove = (e) => {
        const targetX = (e.clientX / window.innerWidth) * 20 - 10;
        setLightPosition((prevPos) => ({
            x: prevPos.x + (targetX - prevPos.x) * 0.1, 
            y: 0,
            z: 5,
            duration: 1, 
            ease: "power2.out",
        }));
    };
    useEffect(() => {
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        {/* <directionalLight position={[2, 2, 5]} /> */}
        <directionalLight
                            position={[lightPosition.x, lightPosition.y, -50]}
                            intensity={2}
                        />
        
        {/* Wave shader background - positioned behind everything */}
        <WaveBackground />
        
        {/* Your 3D models */}
        <Bgmodel />
        
        <OrbitControls />
      </Canvas>
    </div>
  )
}