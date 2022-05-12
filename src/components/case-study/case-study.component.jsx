import './case-study.styles.scss';
import CASE_STUDIES from '../../json-db/case-studies';
import CaseStudyCard from '../case-study-card/case-study-card.component';


const CaseStudy = () => {
  return (
    <div className="cs-inner">
      {CASE_STUDIES.map((item) => (
        <CaseStudyCard content={item} key={item.id} />
      ))}
    </div>
  );
};

export default CaseStudy;
