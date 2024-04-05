import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Clone, useAnimations, useGLTF } from "@react-three/drei";

import eagleScene from "../assets/3d/eagle.glb";

export function Eagle() {
 const eagleRef = useRef();

 // Load the GLTF model and animations
 const { scene, animations } = useGLTF(eagleScene);

 // Access the animations for the eagle
 const { actions } = useAnimations(animations, eagleRef);

 // Play the "motion4" animation when the component mounts
 useEffect(() => {
    actions["motion4"].play();
 }, []);

 // Update the eagle's position and rotation on each frame
 useFrame(({ clock, camera }) => {
    // Simulate eagle-like motion using a sine wave for the Y position
    eagleRef.current.position.y = Math.sin(clock.elapsedTime) * -0.2 + 2;

    // Check if the eagle has reached a certain endpoint relative to the camera
    if (eagleRef.current.position.x > camera.position.x + 30) {
      eagleRef.current.rotation.y = 0; // Change direction to backward
    } else if (eagleRef.current.position.x < camera.position.x - 10) {
      eagleRef.current.rotation.y = Math.PI; // Change direction to forward
    }

    // Update the X and Z positions based on the direction
    if (eagleRef.current.rotation.y === 0) {
      // Moving forward
      eagleRef.current.position.x -= 0.01;
      eagleRef.current.position.z += 0.01;
    } else {
      // Moving backward
      eagleRef.current.position.x += 0.01;
      eagleRef.current.position.z -= 0.01;
    }
 });

 // Render the eagle model
 return (
    <mesh ref={eagleRef} position={[0, 1, -10]} scale={[0.01, 0.01, 0.01]}>
      <primitive object={scene} />
    </mesh>
 );
}
