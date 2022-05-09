import './think-important-section.styles.scss';

const ThinkImportantSection = ({section}) => {
  const { imageUrl, title, stamp, text, id} =  section;
  return (
    <div className='think-important-section-container' key={id} style={{backgroundImage: `url(${imageUrl})`}}>
      <div className='section-content'>
        <div className='section-title'>
          {(() => {
            if (stamp!== "") {
              return (
              <img src={stamp} alt="approval stamp" className='section-stamp'/>
              )
            }
          })()}
          <h2>{title}</h2>
        </div>
        <div className='section-text'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ThinkImportantSection;
