// src/App.jsx
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const group = useRef();
  const { scene, animations } = useGLTF('/assets/untitled.gltf');
  const mixer = useRef();

  useEffect(() => {
    // Set the initial rotation of the model
    scene.rotation.y = Math.PI / 1.5;  // Rotate 45 degrees on the Y-axis
  scene.rotation.x = Math.PI / 9;  // Rotate 22.5 degrees on the X-axis
  scene.rotation.z = Math.PI / 12;  // Rotate 15 degrees on the Z-axis
    scene.scale.set(1, 1, 1); 

    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.setLoop(THREE.LoopOnce); // Set the loop mode to LoopOnce
        action.clampWhenFinished = true; // Ensure the animation stops at the last frame
        action.play();
      });
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive ref={group} object={scene} />;
};

const App = () => {
  return (
    <div className="w-20 h-20">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
 
export default App;
