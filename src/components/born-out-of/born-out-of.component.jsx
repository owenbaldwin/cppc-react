import './born-out-of.styles.scss';
import BORN_OUT_OF_TEXT from '../../json-db/born-out-of';
import Title from '../title/title.component';
import BrandBox from '../brand-box/brand-box.component';

const BornOutOf = () => {
  return (
    <div className='born-out-of-outer'>
      <div className='born-out-of-inner'>
        <Title title="Born out of..." colour="blue" side="right" />

        <div className='brand-box-container'>
          {BORN_OUT_OF_TEXT.map((object) => {
            return <p key={object.id}>{object.text}</p>
          }) }
          <div className='brand-box-white-bit'></div>

        </div>
      </div>
    </div>
  );
};

export default BornOutOf;
