import './brand-box-small.styles.scss';

const BrandBoxSmall = ({content}) => {
  return (
    <div className='brand-box-small-container'>
      {content}
      <div className='brand-box-small-white-bit'></div>
    </div>
  )
}

export default BrandBoxSmall;
