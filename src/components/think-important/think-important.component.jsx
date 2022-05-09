import './think-important.styles.scss';
import THINK_IMPORTANT from '../../json-db/think-important';
import ThinkImportantSection from '../think-important-section/think-important-section.component';


const ThinkImportant = () => {
  return (
    <div>
      <h1>What we think is important</h1>
      {THINK_IMPORTANT.map((section) => {
        <ThinkImportantSection key={section.id} content={section} />
      })}
    </div>
  );
};

export default ThinkImportant;
