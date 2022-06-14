import './reference.styles.scss';
import REFERENCES from '../../json-db/references';
import HomeUpBtn from '../home-up-btn/home-up-btn.component';

const Reference = () => {
  return (
    <div className='references-inner'>
      {REFERENCES.map((ref) => {
        return (
          <div className='reference'>
            <p><em>"{ref.text}"</em></p>
            <h3>{ref.name}</h3>
          </div>
        )
      })}
      <HomeUpBtn />
    </div>
  );
};

export default Reference;
