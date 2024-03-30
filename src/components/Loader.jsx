import React from 'react';
import { Html } from "@react-three/drei";

const Loader = () => {
 return (
    <Html><span class="name"> LYMonada </span>
   <div class="container">
   <div class="container2">
         <div class="ring"></div>
         <div class="ring"></div>
         <div class="ring"></div>
        
         </div> 
      </div>
     
      <style jsx>{`
      .name {
        color:#ffffff;
        margin-left: -32px;

    }
   .container{
    display: flex;

    margin-top:-35vh;
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
   .ring:nth-child(2) {
       border-right-width: 8px;
       border-color: rgb(0, 166, 225, 1);
       animation: rotate2 2s linear infinite;
    }
    .ring:nth-child(3) {
      border-top-width: 8px;
      border-color: rgb(242, 39, 39, 1);
      animation: rotate3 2s linear infinite;
   }
  @keyframes rotate3 {
      0%
      {
          transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
      }
      100%
      {
          transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
      }
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
   @keyframes rotate2 {
       0%
       {
           transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
       }
       100%
       {
           transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
       }
   } `}</style>
 </Html>
 );
};

export default Loader;
