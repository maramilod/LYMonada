import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

const Sky = ({ isRotating }) => {
 // Load the GLTF model for the sky
 const sky = useGLTF(skyScene);
 // Reference to the mesh component for the sky
 const skyRef = useRef();

 // Update the sky's rotation on each frame if it's rotating
 useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Rotate the sky
    }
 });

 // Render the sky mesh with the loaded GLTF scene
 return (
    <mesh ref={skyRef}>
      {/* Use the primitive element to directly embed the complex 3D model or scene */}
      <primitive object={sky.scene} />
    </mesh>
 );
}

export default Sky;
