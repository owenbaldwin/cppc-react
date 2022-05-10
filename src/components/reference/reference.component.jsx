import './reference.styles.scss';
import REFERENCES from '../../json-db/references';

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
    </div>
  );
};

export default Reference;
