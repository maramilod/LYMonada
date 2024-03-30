import { Link } from "react-router-dom";
import { facebook, linkedin } from "../assets/icons";
import { github } from "../assets/icons";


const HomeInfo = ({ currentStage }) => {
  if (currentStage === 4)
    return (
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Hi, I'm  <span className='font-semibold mx-2 text-white'>Lujain</span>
        👋
        <br />
        A Software Engineer from Libya 🇭🇷
        </p>
        <div class="social-icons"><Link to='/lujain' >
 <img src={facebook} alt='jukebox' className='w-8 h-8 cursor-pointer' /> </Link><Link to='/lujain' >
 <img src={github} alt='jukebox' className='w-8 h-8 cursor-pointer' /> </Link><Link to='/lujain' >
 <img src={linkedin} alt='jukebox' className='w-8 h-8 cursor-pointer' /> </Link>
</div>

    
        <div className='neo-brutalism-white neo-btn'>
       
        <Link to='/lujain' >

          See more
        
        </Link>
        </div>
      </div>
    );

  if (currentStage === 5) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Hi, I'm  <span className='font-semibold mx-2 text-white'>Maram</span>
        👋
        <br />
        A Software Engineer from Libya 🇭🇷
        </p>
        <div class="social-icons"><Link to='/lujain' >
 <img src={facebook} alt='jukebox' className='w-8 h-8 cursor-pointer' /> </Link><Link to='/lujain' >
 <img src={github} alt='jukebox' className='w-8 h-8 cursor-pointer' /> </Link><Link to='/lujain' >
 <img src={linkedin} alt='jukebox' className='w-8 h-8 cursor-pointer' /> </Link>
</div>

        <div className='neo-brutalism-white neo-btn'>
        <Link to='/maramilod' >

          See more
        
        </Link>
        </div>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Hi, I'm  <span className='font-semibold mx-2 text-white'>Yasmen</span>
        👋
        <br />
        A Software Engineer from Libya 🇭🇷
        </p>        <div class="social-icons"><Link to='/lujain' >
 <img src={facebook} alt='jukebox' className='w-8 h-8 cursor-pointer' /> </Link><Link to='/lujain' >
 <img src={github} alt='jukebox' className='w-8 h-8 cursor-pointer' /> </Link><Link to='/lujain' >
 <img src={linkedin} alt='jukebox' className='w-8 h-8 cursor-pointer' /> </Link>
</div>


        <div className='neo-brutalism-white neo-btn'>
        <Link to='/yas' >
          See more
        
        </Link>
      
        </div>
      </div>
    );
  }


  return null;
};

export default HomeInfo;
/*import { Html } from '@react-three/drei';

const HomeInfo = ({ currentStage }) => {
 let content;

 if (currentStage === 1) {
    content = (
      <Html>
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Hi, I'm <span className='font-semibold mx-2 text-white'>Lujain</span> 👋
            <br />
            A Software Engineer from Libya 🇭🇷
          </p>
          <div className='neo-brutalism-white neo-btn'>
            See more
          
          </div>
        </div>
      </Html>
    );
 } else if (currentStage === 2) {
    content = (
      <Html>
        {/* Similar content for stage 2 }
        </Html>
        );
     } else if (currentStage === 3) {
        content = (
          <Html>
            {/* Similar content for stage 3 }
          </Html>
        );
     }
    
     return content;
    };
   
    
    export default HomeInfo; */