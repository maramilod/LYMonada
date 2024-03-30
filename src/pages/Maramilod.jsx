import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';

import  MaLoader  from "../components/MaLoader";
import { Link } from "react-router-dom";

import Maram03 from '../../public/Maram03';

import { piano,logo, nosound } from "../assets/icons";
import pianov from "../assets/piano.mp3";

const Maramilod = ()  => {
  const audioRef = useRef(new Audio(pianov));
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
    <Canvas  className={`w-full h-screen bg-transparent `}>
      <Suspense fallback={<MaLoader />}>
        <Environment preset='sunset' />
        <Maram03 />
      </Suspense>  
    </Canvas >
    <div className='absolute bottom-2 left-2'>
      <img
        src={!isPlayingMusic ? piano : nosound}
        alt='jukebox'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className='w-10 h-10 cursor-pointer object-contain'
      />
      </div>
      <div className='absolute bottom-2 left-20'>
      <Link to='../' >
        <img
          src={logo}
          alt='jukebox'
          className='w-7 h-11 cursor-pointer object-contain'
        />
      </Link>
    </div>
  </section>
  );
}
export default Maramilod;
