/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 three6.gltf 
*/

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import { a } from "@react-spring/three";

import { useGLTF, PerspectiveCamera } from '@react-three/drei'

const Three6 = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) => {
  const islandRef = useRef();






  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF('/three6.gltf');

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
   // Use a ref for rotation speed
   const rotationSpeed = useRef(0);
   // Define a damping factor to control rotation damping
   const dampingFactor = 0.95;


     // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

    // Handle pointer (mouse or touch) up event
    const handlePointerUp = (event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(false);
    }

   // Handle pointer (mouse or touch) move event
   const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
    
      const clientX = event.touches
      ? event.touches[0].clientsX
      : event.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
    
  };

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
     // Add event listeners for pointer and keyboard events
     const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
  

  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
          case normalizedRotation >= 3.1 && normalizedRotation <= 3.6:
            setCurrentStage(5);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  const meshRef1 = useRef();
const meshRef2 = useRef();
const meshRef3 = useRef();
const meshRef4 = useRef();

useFrame(({ clock }) => {
 const time = clock.getElapsedTime();

 // Example of moving up and down by changing the y position
 meshRef1.current.position.y = Math.sin(time) * 0.3; // Adjust the multiplier for speed
 meshRef2.current.position.y = Math.sin(time) * 0.3; // Offset the time to create a different movement pattern
 meshRef3.current.position.y = Math.sin(time) * 0.3; // Offset the time further for a different pattern
 meshRef4.current.position.y = Math.sin(time );
});

  return (
    <group {...props}>


 <pointLight intensity={168.489} decay={2} color="#a568ff" position={[25, 4, -15.4]} rotation={[-Math.PI / 2, 0, -0.067]} />
      


      <pointLight intensity={168.489} decay={2} color="#0000FF" position={[-22, -12, -35.4]} rotation={[-Math.PI / 2, 0, -0.067]} />

      <pointLight intensity={168.489} decay={2} color="#FFFFFF" position={[1, 6, -25.4]} rotation={[-Math.PI / 2, 0, -0.067]} />

      <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={22.895} position={[1.924, 28.989, -25.849]} rotation={[-3.018, 0.039, 3.126]} />


         <a.group ref={islandRef} {...props}>

         <>
    <mesh ref={meshRef1} geometry={nodes.Plane.geometry} material={materials.lambert2} />
    <mesh ref={meshRef2} geometry={nodes.Plane_1.geometry} material={materials.lambert3} />
    <mesh ref={meshRef3} geometry={nodes.Plane_2.geometry} material={materials.lambert5} />
    <mesh ref={meshRef4} geometry={nodes.Plane_12.geometry} material={materials['Material.020']} />
 </>

        <mesh geometry={nodes.Plane_3.geometry} material={materials.mushroom_mat} />
        
        <mesh geometry={nodes.Plane_4.geometry} material={materials.Aurora_Green} />
        <mesh geometry={nodes.Plane_5.geometry} material={materials.Aurora_Blue} />
        <mesh geometry={nodes.Plane_6.geometry} material={materials.Aurora_Violet} />
        <mesh geometry={nodes.Plane_7.geometry} material={materials.FloatingIsland_Base} />
        <mesh geometry={nodes.Plane_8.geometry} material={materials.Cager} />
        <mesh geometry={nodes.Plane_9.geometry} material={materials.Centre_Emitter} />
        <mesh geometry={nodes.Plane_10.geometry} material={materials['White_Willow.001']} />
        <mesh geometry={nodes.Plane_11.geometry} material={materials.FloatingIsland_Top} />

       
        </a.group>
      <mesh geometry={nodes.yas.geometry} material={nodes.yas.material} position={[5.484, 26.206, -0.899]} rotation={[1.82, 0.094, 0.351]} scale={0.398} />
      </group>
  )
}

//useGLTF.preload('/three6.gltf')

export default Three6;