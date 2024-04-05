import React from 'react';
import { Html } from "@react-three/drei";

const MaLoader = () => {
 return (
    <Html>
      {/* Welcome message */}
      <div className="name">
        Hey Welcome In My Home <div className="color"> Catch The Cat </div>And It Gonna Open To U ...enjoy ^-^
      </div>

      {/* Container for the rotating rings */}
      <div className="container">
        <div className="container2">
          {/* Three rotating rings */}
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>
      </div>

      {/* Styles for the component */}
      <style jsx>{`
        .name {
          color: #ffffff;
          text-align: center;
          width: 202px;
        }
        .container {
          display: flex;
          margin-top: -55vh;
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
          animation: rotate 2s linear infinite;
        }
        .ring:nth-child(1) {
          border-bottom: 8px solid rgb(0, 166, 225, 1);
        }
        .color {
          color: rgb(0, 166, 225, 1);
        }

        @keyframes rotate {
          0% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
          }
        }
      `}</style>
    </Html>
 );
};

export default MaLoader;
