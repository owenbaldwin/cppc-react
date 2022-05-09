import { Outlet } from "react-router-dom";
import BackgroundVideo from "../../components/background-video/background-video.component";


const Home = () => {
  return (
    <div>


      <div className='landing-page'>
        <BackgroundVideo />
      </div>

      <div className='born-out-of'>
        <h1>Video</h1>
        <h1>Born out of...</h1>
        <p>TEEEEEEEXT</p>
      </div>

      <div className='important-sections'>
        <h1>What we think is important</h1>
        <h2>Four Components</h2>
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
