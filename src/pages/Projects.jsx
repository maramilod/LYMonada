import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import Sky from '../models/Sky';
import  YASLoader  from "../components/YASLoader";

//import './App.css';

import Home from '../../public/Home';
import { Link } from "react-router-dom";


import { violin, bmute, ylog } from "../assets/icons";
import voice from "../assets/voice.mp3";

const Projects = ()  => {
  const audioRef = useRef(new Audio(voice));
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
      <Suspense fallback={<YASLoader />}> 
        <Environment preset='sunset' />
        <Home/>
      </Suspense>  
    </Canvas >
    <div className='absolute bottom-2 left-2'>
      <img
        src={!isPlayingMusic ? violin : bmute}
        alt='jukebox'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className='w-10 h-10 cursor-pointer object-contain'
      />
      </div>
      <div className='absolute bottom-2 left-20'>
      <Link to='../' >
        <img
          src={ylog}
          alt='jukebox'
          className='w-71 h-10 cursor-pointer object-contain'
        />
      </Link>
    </div>
  </section>
  );
}
export default Projects;
