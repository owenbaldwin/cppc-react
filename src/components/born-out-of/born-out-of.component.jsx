import './born-out-of.styles.scss';
import BORN_OUT_OF_TEXT from '../../json-db/born-out-of';

const BornOutOf = () => {
  return (
    <div className='born-out-of-outer'>
      <div className='born-out-of-inner'>
        <div className='separator-container'>
          <div className='separator'/>
        </div>
        <h1>Born out of...</h1>
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
