import { Outlet } from "react-router-dom";
import BackgroundVideo from "../../components/background-video/background-video.component";
import ForegroundVideo from "../../components/foreground-video/foreground-video.component";

import VideoTwo from '../../assets/cppc-video-2.mp4';
import VideoThree from '../../assets/cppc-video-3.mp4';


import './home.styles.scss';
import BornOutOf from "../../components/born-out-of/born-out-of.component";
import ThinkImportant from "../../components/think-important/think-important.component";
import WhatWeDo from "../../components/what-we-do/what-we-do.component";
import HowWeDoIt from "../../components/how-we-do-it/how-we-do-it.component";
import CaseStudy from "../../components/case-study/case-study.component";
import Reference from "../../components/reference/reference.component";
import Contact from "../../components/contact/contact.component";
import Title from "../../components/title/title.component";



const Home = () => {
  return (
    <div className="home-container">

      <div className='landing-page'>
        <BackgroundVideo />
      </div>


      <div className='born-out-of-container'>
        <ForegroundVideo videoSrc={VideoTwo} height='hundredvh'/>
        <BornOutOf />
      </div>

      <div className='important-sections'>
        <ThinkImportant />
      </div>

      <div className='what-we-do'>
        <WhatWeDo />
      </div>

      <div className='how-we-do-it-container'>
        <Title title="How we do it" colour="yellow" side="left" />
        <div className='how-we-do-it-bottom'>
          <HowWeDoIt />
          <ForegroundVideo videoSrc={VideoThree} height='hundredvh' />
        </div>
      </div>
{/*
      <div className='case-studies-container'>
        <CaseStudy />
      </div>

      <div className="references-container">
        <Reference />
      </div>

      <div className='contact-container' id="ctc">
        <Contact />
      </div>

  */}

      <Outlet />

    </div>
  )
}


export default Home;


// <div className='sidebar'>
//         <ul>
//           <li><a>hi</a></li>
//           <li><a>hi</a></li>
//           <li><a>hi</a></li>

//         </ul>
//       </div>
