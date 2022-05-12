import './case-study-card.styles.scss';
import { useNavigate } from 'react-router-dom';


const CaseStudyCard = ({content}) => {

  const { imageUrl, title, route, id, text, link } = content;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);


  return (
    <div key={id} className="cs-item-container">

      {/*ADD LINK TO IMG TO GO TO GALLERY*/}
      <div onClick={onNavigateHandler} className='cs-item-to-gallery'>
        <img src={imageUrl} alt="company logo" className='cs-item-image'/>
      </div>
      <div className='cs-item-text'>
        <p>{text}</p>
      </div>
      <div onClick={onNavigateHandler} className='cs-item-to-gallery'>
        <p>Learn more</p>
      </div>
      <div className='cs-item-link'>
        <a href={link} target="_blank">{title}</a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
