import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Clone, useAnimations, useGLTF } from "@react-three/drei";

import eagleScene from "../assets/3d/eagle.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-eagle-844ba0cf144a413ea92c779f18912042
export function Eagle() {
  const eagleRef = useRef();

  const { scene, animations } = useGLTF(eagleScene);


   // Log the names of all animations to the console
//console.log(animations.map(animation => animation.name));

  // Get access to the animations for the eagle
  const { actions } = useAnimations(animations, eagleRef);

  // Play the "motion4" animation when the component mounts
  useEffect(() => {
    actions["motion4"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate eagle-like motion using a sine wave
    eagleRef.current.position.y = Math.sin(clock.elapsedTime) * -0.2 + 2;

    // Check if the eagle reached a certain endpoint relative to the camera
    if (eagleRef.current.position.x > camera.position.x + 30) { eagleRef.current.rotation.y = 0;
      // Change direction to backward and rotate the eagle 180 degrees on the y-axis
      
    } else if (eagleRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the eagle's rotation
     eagleRef.current.rotation.y = Math.PI;
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
   
    //console.log(eagleRef.current.position.y);
  });


  return ( 
    // use the primitive element when you want to directly embed a complex 3D model or scene
    <mesh ref={eagleRef} position={[0, 1, -10]} scale={[0.01, 0.01, 0.01]}>
      <primitive object={scene} />
    </mesh>
  );
}