import './what-we-do.styles.scss';
import WHAT_WE_DO from '../../json-db/what-we-do';

console.log(WHAT_WE_DO[0].aspects);

const WhatWeDo = () => {
  return (
    <div className='wwd-inner'>
      <div className='separator-container'>
        <div className='separator'/>
      </div>
      <div className='wwd-title'>
        <h1>What we do</h1>
      </div>
      <div className='wwd-item-list'>
        {WHAT_WE_DO[0].aspects.map((item) => {
          return (
            <div key={item.id} className='wwd-item'>
              <img src={item.imageUrl} alt="item diagram" className='wwd-item-image'/>
              <h4>{item.title}</h4>
            </div>
          )
        })}
      </div>
      <div className='wwd-diagram-container'>
        <img src={WHAT_WE_DO[1].imageUrl} alt="item diagram" className='wwd-diagram'/>
      </div>
    </div>
  );
};


export default WhatWeDo;
