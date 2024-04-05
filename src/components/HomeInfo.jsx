import React from 'react';
import { Link } from "react-router-dom";
import { facebook, linkedin, github } from "../assets/icons";

// Function to render social icons
const renderSocialIcons = () => (
 <div className="social-icons">
    <Link to='/lujain'>
      <img src={facebook} alt='facebook' className='w-8 h-8 cursor-pointer' />
    </Link>
    <Link to='/lujain'>
      <img src={github} alt='github' className='w-8 h-8 cursor-pointer' />
    </Link>
    <Link to='/lujain'>
      <img src={linkedin} alt='linkedin' className='w-8 h-8 cursor-pointer' />
    </Link>
 </div>
);

// Function to render the main content based on the current stage
const HomeInfo = ({ currentStage }) => {
 // Determine the content to display based on the current stage
 let content;
 switch (currentStage) {
    case 4:
      content = (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Hi, I'm <span className='font-semibold mx-2 text-white'>Lujain</span> 👋
            <br />
            A Software Engineer from Libya 🇭🇷
          </p>
          {renderSocialIcons()}
          <div className='neo-brutalism-white neo-btn'>
            <Link to='/lujain'>
              See more
            </Link>
          </div>
        </div>
      );
      break;
    case 5:
      content = (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Hi, I'm <span className='font-semibold mx-2 text-white'>Maram</span> 👋
            <br />
            A Software Engineer from Libya 🇭🇷
          </p>
          {renderSocialIcons()}
          <div className='neo-brutalism-white neo-btn'>
            <Link to='/maramilod'>
              See more
            </Link>
          </div>
        </div>
      );
      break;
    case 3:
      content = (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Hi, I'm <span className='font-semibold mx-2 text-white'>Yasmen</span> 👋
            <br />
            A Software Engineer from Libya 🇭🇷
          </p>
          {renderSocialIcons()}
          <div className='neo-brutalism-white neo-btn'>
            <Link to='/yas'>
              See more
            </Link>
          </div>
        </div>
      );
      break;
    default:
      content = null;
 }

 return content;
};

export default HomeInfo;
