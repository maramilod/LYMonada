import { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import { Environment} from '@react-three/drei';

import  LLoader  from "../components/LLoader";
import Lujain_room from '../../public/Lujain_home';

import { violin, lmute ,llog} from "../assets/icons";
import gu from "../assets/gu.mp3";



//import { useThree, useFrame } from '@react-three/fiber';
//import { Html } from '@react-three/drei';
//import { BoxGeometry, MeshBasicMaterial } from 'three';
// function ClickableMesh() {
//   const { raycaster, camera, scene, mouse } = useThree();
 
//   // Function to change camera position
//   const changeCameraPosition = () => {
//     camera.position.set(-6.848, 31.208, -1.574);
//     camera.rotation.set(0.013, -0.727, 0.009);
//     camera.far.set(100);
//     camera.fov.set(22.895);
//     camera.near.set(0.1);
//     camera.scale.set(0.472);
//     camera.updateProjectionMatrix();
//   };
 
//   useFrame(() => {
//      // Update the raycaster with the current mouse position
//      raycaster.setFromCamera(mouse, camera);
 
//      // Calculate objects intersecting the picking ray
//      const intersects = raycaster.intersectObjects(scene.children, true);
 
//      // Check if the specific mesh is intersected
//      if (intersects.length > 0) {
//        const intersectedObject = intersects[0].object;
//        if (intersectedObject.name === "home") {
//          console.log('Home mesh clicked');
//          changeCameraPosition(); // Call the function to change camera position
//        }
//      }
//   });
 
//   return null;
//  }


/*



 function ClickableMesh() {
  const { raycaster, camera, scene, mouse, gl } = useThree();
 
  const changeCameraPosition = () => {
        camera.position.set(-6.848, 31.208, -1.574);
        camera.rotation.set(0.013, -0.727, 0.009);
        camera.far.set(1000);
        camera.fov.set(22.895);
        camera.near.set(0.1);
        camera.scale.set(0.472);
        camera.updateProjectionMatrix();
      };
 
  useEffect(() => {
     const handleClick = (event) => {
       raycaster.setFromCamera(mouse, camera);
 
       const intersects = raycaster.intersectObjects(scene.children, true);
 
       if (intersects.length > 0) {
         const intersectedObject = intersects[0].object;
         if (intersectedObject.name === "home") {
           console.log('screen mesh clicked');
           changeCameraPosition();
         }
       }
     };
      gl.domElement.addEventListener('click', handleClick);
 
     return () => {
       gl.domElement.removeEventListener('click', handleClick);
     };
  }, [raycaster, camera, scene, mouse, gl]);
 
  return null;
 }







 

 function Screen1() {
  const { raycaster, camera, scene, mouse, gl } = useThree();
 
  const changeCameraPosition = () => {
     camera.position.set(-4.318, 31.243, -3.695);
     camera.rotation.set(-0.103, -1.144, -0.094);
     camera.far.set(100);
     camera.scale.set(0.472);
     camera.updateProjectionMatrix();
  };
 
  useEffect(() => {
     const handleClick = (event) => {
       raycaster.setFromCamera(mouse, camera);
       const intersects = raycaster.intersectObjects(scene.children, true);
       if (intersects.length > 0) {
         const intersectedObject = intersects[0].object;
         if (intersectedObject.name === "Plane") {
           console.log('screen111 mesh clicked');
           changeCameraPosition();
         }
       }
     };
 
     gl.domElement.addEventListener('click', handleClick);
 
     return () => {
       gl.domElement.removeEventListener('click', handleClick);
     };
  }, [raycaster, camera, scene, mouse, gl]);
 
  // return (
  //   <group name="PlaneGroup" position={[-3.706, 31.215, -3.967]} rotation={[0, 0, 1.139]}>
  //   <mesh name="Plane" position={[-3.706, 31.215, -3.967]} rotation={[0, 0, 1.139]} scale={0.07}>
  //      <boxGeometry args={[1, 1, 1]} />
  //      <meshBasicMaterial color={0x00fff} />
  //   </mesh>
  //   <Html scaleFactor={3} position={[0, 0, 0]}>
  //      <div className="content">
  //        <h1>Hello, welcome to my room! Take some pizza.</h1>
  //      </div>
  //   </Html>
  //  </group>
   
  // );


 }
 
 







//  function Screen2() {
//   const { raycaster, camera, scene, mouse } = useThree();
 
//   // Function to change camera position
//   const changeCameraPosition = () => {
//     camera.position.set();
//     camera.rotation.set();
//     camera.far.set(100);
//     camera.scale.set(0.472);
//      camera.updateProjectionMatrix();
//   };
 
//   useFrame(() => {
//      // Update the raycaster with the current mouse position
//      raycaster.setFromCamera(mouse, camera);
 
//      // Calculate objects intersecting the picking ray
//      const intersects = raycaster.intersectObjects(scene.children, true);
 
//      // Check if the specific mesh is intersected
//      if (intersects.length > 0) {
//        const intersectedObject = intersects[0].object;
//        if (intersectedObject.name === "") {
//          console.log('screen mesh clicked');
//          changeCameraPosition(); // Call the function to change camera position
//        }
//      }
//   });
 
//   return null;
//  }




//this the computer screen

 function Screen2() {
  const { raycaster, camera, scene, mouse, gl } = useThree();
 
  // Function to change camera position
  const changeCameraPosition = () => {
     camera.position.set(-4.897, 31.23, -4.163);
     camera.rotation.set(-0.109, -0.403, -0.043);
     camera.far.set(100);
     camera.scale.set(0.472);
     camera.updateProjectionMatrix();
  };
 
  useEffect(() => {
     const handleClick = (event) => {
      
       raycaster.setFromCamera(mouse, camera);
 
       
       const intersects = raycaster.intersectObjects(scene.children, true);
 
     
       if (intersects.length > 0) {
         const intersectedObject = intersects[0].object;
         if (intersectedObject.name === "Plane001") {
           console.log('screen2 mesh clicked');
           changeCameraPosition();
         }
       }
     };
 
    
     gl.domElement.addEventListener('click', handleClick);
 
  
     return () => {
       gl.domElement.removeEventListener('click', handleClick);
     };
  }, [raycaster, camera, scene, mouse, gl]);
 
  return null;
 }















//
function Screen3() {
 const { raycaster, camera, scene, mouse, gl } = useThree();

 // Function to change camera position
 const changeCameraPosition = () => {
    camera.position.set(-5.518, 30.948, -3.893);
    camera.rotation.set(-0.167, -0.759, -0.116);
    camera.far.set(100);
    camera.scale.set(0.472);
    camera.updateProjectionMatrix();
 };

 useEffect(() => {
    const handleClick = (event) => {
      // Update the raycaster with the current mouse position
      raycaster.setFromCamera(mouse, camera);

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(scene.children, true);

      // Check if the specific mesh is intersected
      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        if (intersectedObject.name === "laptop001") {
          console.log('laptop mesh clicked');
          changeCameraPosition(); // Call the function to change camera position
        }
      }
    };

    // Add the click event listener
    gl.domElement.addEventListener('click', handleClick);

    // Cleanup the event listener on component unmount
    return () => {
      gl.domElement.removeEventListener('click', handleClick);
    };
 }, [raycaster, camera, scene, mouse, gl]);

 return null;
}



 camera={{ position: [30.378, -1.611, 78.232], far: 1000, fov:23.500, near: 0.1, rotation: [0.236, 0.411, -0.096] }}
*/







const Lujain = ()  => {
  const audioRef = useRef(new Audio(gu));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
 //this function run evry time the isplaingmusic value change
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  
  return (
  <section className='w-full h-screen relative'>
  
    <Canvas  id="number" width="64" height="64">
      <Suspense fallback={<LLoader />}>
        <Lujain_room/>
        <ambientLight intensity={0.100} />
        <Environment preset='sunset' />
      </Suspense>  
    </Canvas >
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? violin : lmute}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
      <div className='absolute bottom-3 left-20'>
        <Link to='../' >
        <img
          src={llog}
          alt='jukebox'
          className='w-71 h-8 cursor-pointer object-contain'
        />
        </Link>
      </div>
    </section>
    );
  }
export default Lujain;
