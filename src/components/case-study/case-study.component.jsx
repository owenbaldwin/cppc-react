import './case-study.styles.scss';
import CASE_STUDIES from '../../json-db/case-studies';

const CaseStudy = () => {
  return (
    <div className="cs-inner">
      {CASE_STUDIES.map((item) => {
        return (
          <div key={item.id} className="cs-item-container">

            {/*ADD LINK TO IMG TO GO TO GALLERY*/}
            <img src={item.imageUrl} alt="company logo" className='cs-item-image'/>
            <div className='cs-item-text'>
              <p>{item.text}</p>
            </div>
            <div className='cs-item-link'>
              <a href={item.link} target="_blank">{item.title}</a>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default CaseStudy;
