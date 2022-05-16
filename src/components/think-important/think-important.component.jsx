import './think-important.styles.scss';
import THINK_IMPORTANT from '../../json-db/think-important';
import ThinkImportantSection from '../think-important-section/think-important-section.component';
import Title from '../title/title.component';

console.log(THINK_IMPORTANT);

const ThinkImportant = () => {
  return (
    <div>

      <Title title="What we think is important" side="left" colour="red" />
      {THINK_IMPORTANT.map((section) => (
        <ThinkImportantSection section={section} />
      ))}
    </div>
  );
};

export default ThinkImportant;

// <div className='separator-container'>
//         <div className='separator'/>
//       </div>
//       <h1>What we think is important</h1>
