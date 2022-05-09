import { Outlet } from "react-router-dom";
import BackgroundVideo from "../../components/background-video/background-video.component";
import ForegroundVideo from "../../components/foreground-video/foreground-video.component";

import VideoTwo from '../../assets/cppc-video-2.mp4';

import './home.styles.scss';
import BornOutOf from "../../components/born-out-of/born-out-of.component";
import ThinkImportant from "../../components/think-important/think-important.component";



const Home = () => {
  return (
    <div className="home-container">


      <div className='landing-page'>
        <BackgroundVideo />
      </div>

      <div className='born-out-of-container'>
        <ForegroundVideo videoSrc={VideoTwo} />
        <BornOutOf />
      </div>

      <div className='important-sections'>
        <ThinkImportant />
      </div>

      <div className='what-we-do'>
        <h1>What we do</h1>
        <h2>image1</h2>
        <h2>image2</h2>
      </div>

      <div className='why-we-do-it'>
        <h1>How we do it</h1>
        <p>Four compnents for text</p>
        <h2>video</h2>
      </div>

      <div className='case-studies'>
        <p>SIX Components</p>
        <p>3 quote components</p>
      </div>

      <div className='contact'>
        <h1>Contact box</h1>
      </div>

      <div className='footer'>
        <h2>footer</h2>
      </div>
      <Outlet />

    </div>
  )
}


export default Home;
