//import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber"

import Loader  from "../components/Loader"
import  Three6 from '../../public/Three6';
import Sky from '../models/Sky';
import {Eagle} from "../models";
import HomeInfo from '../components/HomeInfo';

import { voice, nosound } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

 const [currentStage, setCurrentStage] = useState(1);
  // when this set to false means it 's not moving anymore
 const [isRotating, setIsRotating] = useState(false);
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

 const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.6, 0.6, 0.5];
        //   قرب    ارتفاع   عرض
      screenPosition = [2, 2, -22.4];
    } else {
      screenScale = [0.7, 0.6, 0.5];
      screenPosition = [2, 2, -25.4];
    }
    return [screenScale, screenPosition];
  };

  
  const [islandScale, islandPosition] = adjustIslandForScreenSize(); 

  return (
    <section className='w-full h-screen relative'>
  <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } `}
        //select the closest and furthest distance allowed
        camera={{ near: 1, far: 1000 }}
      >
        <ambientLight />
        <Suspense fallback={<Loader />}>
          <Sky
          isRotating={isRotating}
          />
          <Three6
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          position={islandPosition}
          rotation={[-12, 47.077, 0]}
          scale={islandScale}
          setCurrentStage={setCurrentStage}
          />
          <Eagle />
        </Suspense>
      </Canvas>
      
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? voice : nosound}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home