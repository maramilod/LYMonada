import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import Three6 from '../../public/Three6';
import Sky from '../models/Sky';
import { Eagle } from "../models";
import HomeInfo from '../components/HomeInfo';

import { voice, nosound } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

const Home = () => {
 // Reference to the audio element for background music
 const audioRef = useRef(new Audio(sakura));
 audioRef.current.volume = 0.4; // Set volume for the audio
 audioRef.current.loop = true; // Enable looping of the audio

 // State to track the current stage of the application
 const [currentStage, setCurrentStage] = useState(1);
 // State to track if the island is rotating
 const [isRotating, setIsRotating] = useState(false);
 // State to control the playback of the background music
 const [isPlayingMusic, setIsPlayingMusic] = useState(true);

 // Effect to play or pause the background music based on isPlayingMusic state
 useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
 }, [isPlayingMusic]);

 // Function to adjust the island's scale and position based on the screen size
 const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.6, 0.6, 0.5]; // Scale for smaller screens
      screenPosition = [2, 2, -22.4]; // Position for smaller screens
    } else {
      screenScale = [0.7, 0.6, 0.5]; // Scale for larger screens
      screenPosition = [2, 2, -25.4]; // Position for larger screens
    }
    return [screenScale, screenPosition];
 };

 // Adjust island scale and position based on screen size
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
        camera={{ near: 1, far: 1000 }}
      >
        <ambientLight />
        <Suspense fallback={<Loader />}>
          <Sky isRotating={isRotating} />
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
 );
}

export default Home;
