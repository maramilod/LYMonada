import React from 'react';
import { Html } from "@react-three/drei";

const Loader = () => {
 return (
    <Html>
      {/* Display name */}
      <span className="name">LYMonada</span>

      {/* Container for the rotating rings */}
      <div className="container">
        <div className="container2">
          {/* Three rotating rings with different colors and animations */}
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>
      </div>

      {/* Styles for the component */}
      <style jsx>{`
        .name {
          color: #ffffff;
          margin-left: -32px;
        }
        .container {
          display: flex;
          margin-top: -35vh;
          width: 200%;
          height: 100vh;
          margin-left: -95px;
        }
        .container2 {
          position: relative;
          display: flex;
        }
        .ring {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }
        .ring:nth-child(1) {
          border-bottom: 8px solid rgb(65, 225, 0, 1);
          animation: rotate 2s linear infinite;
        }
        .ring:nth-child(2) {
          border-right: 8px solid rgb(0, 166, 225, 1);
          animation: rotate2 2s linear infinite;
        }
        .ring:nth-child(3) {
          border-top: 8px solid rgb(242, 39, 39, 1);
          animation: rotate3 2s linear infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
          }
        }
        @keyframes rotate2 {
          0% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
          }
        }
        @keyframes rotate3 {
          0% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
          }
        }
      `}</style>
    </Html>
 );
};

export default Loader;
