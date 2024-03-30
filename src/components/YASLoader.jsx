import React from 'react';
import { Html } from "@react-three/drei";

const Loader = () => {
 return (
    <Html><div class="name">Hey Welcome In My Home <div className="color"> Stomp Your Feet </div>And It Gonna Open To U ...enjoy ^-^</div>
   <div class="container">
   <div class="container2">
         <div class="ring"></div>
         <div class="ring"></div>
         <div class="ring"></div>
        
         </div> 
         
      </div>
     
      <style jsx>{`
  .name {
    color: #ffffff;
    margin-left: -95px; /* Removed to center the text */
    width: 202px; /* Ensures the span spans the full width of the container */
    text-align: center; /* Centers the text horizontally */
 
   }
   .container{
    display: flex;

    margin-top:-55vh;
    width: 200%;
    height: 100hv;
margin-left: -95px;
   }
   .container2{
   position: relative;
   display: flex;
  }
    .ring { 
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) rgb(0 11 27 / 0%);
      position: absolute;

        width: 200px;
        height: 200px;
        border: 0px solid #000;;
        border-radius: 50%;
    }
    .ring:nth-child(1) {
      border-bottom-width: 8px;
      border-color: rgb( 65,225, 0, 1);
      animation: rotate 2s linear infinite;
   }
   .color {
    color: rgb( 65,225, 0, 1);
   }

   @keyframes rotate {
       0%
       {
           transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
       }
       100%
       {
           transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
       }
   }

   } `}</style>
 </Html>
 );
};

export default Loader;
