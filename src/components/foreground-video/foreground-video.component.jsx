import './foreground-video.styles.scss';

const ForegroundVideo = ({videoSrc}) => {
  return (
    <div>
      <video loop autoPlay muted className='foreground-video'>
        <source
          src={videoSrc}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ForegroundVideo;
