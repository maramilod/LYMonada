import React from 'react';
import { Html } from "@react-three/drei";

const LLoader = () => {
 return (
    <Html>
      {/* Welcome message */}
      <div className="name">
        Hey Welcome In My Home Just <div className="color"> Knock ON It</div> And It Gonna Open To U ...enjoy ^-^
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
          border: 8px solid #000;
          border-radius: 50%;
          animation: rotate 2s linear infinite;
        }
        .ring:nth-child(1) {
          border-color: rgb(242, 39, 39, 1);
        }
        .color {
          color: rgb(242, 39, 39, 1);
        }

        @keyframes rotate {
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

export default LLoader;
