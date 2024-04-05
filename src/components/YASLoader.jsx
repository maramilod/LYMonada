import React from 'react';
import { Html } from "@react-three/drei";

const Loader = () => {
 return (
    <Html>
      {/* Welcome message */}
      <div className="name">
        Hey Welcome In My Home <div className="color"> Stomp Your Feet </div>And It Gonna Open To U ...enjoy ^-^
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
          border-bottom: 8px solid rgb(65, 225, 0, 1);
        }
        .color {
          color: rgb(65, 225, 0, 1);
        }

        @keyframes rotate {
          0% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
          }
        }
      `}</style>
    </Html>
 );
};

export default Loader;
