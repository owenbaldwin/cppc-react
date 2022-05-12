import './case-study.styles.scss';
import CASE_STUDIES from '../../json-db/case-studies';
import CaseStudyCard from '../case-study-card/case-study-card.component';
import Title from '../title/title.component';


const CaseStudy = () => {
  return (
    <div className="cs-inner">
      <Title title="Case studies" colour="salmon" side="right" />
      {CASE_STUDIES.map((item) => (
        <CaseStudyCard content={item} key={item.id} />
      ))}
    </div>
  );
};

export default CaseStudy;
