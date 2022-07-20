import './how-we-do-it.styles.scss';
import HOW_WE_DO_IT from '../../json-db/how-we-do-it';
import BrandBoxSmall from '../brand-box-small/brand-box-small.component';
import BrandBox from '../brand-box/brand-box.component';

const HowWeDoIt = () => {
  return (
    <div className='hwdi-inner'>
      {HOW_WE_DO_IT.map((item) => {
        return (
          <div className='hwdi-item-container'>
            <div className='hwdi-item-top'>
              <div className='hwdi-item-id'>
                <h4>{item.id}</h4>
            <div className='brand-box-white-bit'></div>

              </div>
              {/*<BrandBoxSmall content={<h4>{item.id}</h4>} />*/}
              <div className='hwdi-item-title'>
                <h6>option</h6>
                <h4>{item.title}</h4>
              </div>
            </div>
            <div className='hwdi-item-text'>
              <p>{item.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default HowWeDoIt;
