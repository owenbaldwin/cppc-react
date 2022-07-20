import './case-studies-page.styles.scss';
import CaseStudy from "../../components/case-study/case-study.component";

const CaseStudiesPage = () => {
  return (
    <div className="case-studies-page-container">
      <div className='case-studies-container'>
        <CaseStudy />
      </div>
    </div>
  )
}

export default CaseStudiesPage;
