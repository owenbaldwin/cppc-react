import './background-video.styles.scss';
import LandingVideo from "./cppc-landing-video.mp4"

const BackgroundVideo = () => {
  return (
    <div>
      <video loop autoPlay muted className='background-video'>
        <source
          src={LandingVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
