import ReactDOM from 'react-dom'
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, Suspense, ErrorBoundary } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function AssetLoader(props) {
  const scene = useLoader(GLTFLoader, props.path);
  console.log(scene);

  return (
    null
    // <primitive object={gltf.scene}></primitive>
  )
}

export default AssetLoader;