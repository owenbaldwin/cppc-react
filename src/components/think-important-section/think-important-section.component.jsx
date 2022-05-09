import './think-important-section.styles.scss';

const ThinkImportantSection = ({content}) => {
  const { imageUrl, title, stamp, text } =  content;
  return (
    <div className='think-important-section-container' style={{backgroundImage: `url(${imageUrl})`}}>
      <div className='section-content'>
        <img src={stamp} alt="approval stamp" className='section-stamp'/>
        <h2>{title}</h2>
        <div className='section-text'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ThinkImportantSection;
