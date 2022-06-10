import './foreground-video.styles.scss';

const ForegroundVideo = ({videoSrc, height}) => {
  return (

    <video loop autoPlay muted className={`foreground-video ${height}`}>
      <source
        src={videoSrc}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

  );
};

export default ForegroundVideo;
