import './born-out-of.styles.scss';
import BORN_OUT_OF_TEXT from '../../json-db/born-out-of';
import Title from '../title/title.component';

const BornOutOf = () => {
  return (
    <div className='born-out-of-outer'>
      <div className='born-out-of-inner'>
        <Title title="Born out of..." colour="blue" side="right" />

        <div className='born-out-of-text'>
          {BORN_OUT_OF_TEXT.map((object) => {
            return <p key={object.id}>{object.text}</p>
          }) }
        </div>
      </div>
    </div>
  );
};

export default BornOutOf;
