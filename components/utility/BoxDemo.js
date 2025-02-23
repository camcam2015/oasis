import ReactDOM from 'react-dom'
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, Suspense, ErrorBoundary } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Canvas, useLoader, useFrame } from 'react-three-fiber'

export const BoxDemo = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
  
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }