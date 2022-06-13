import './brand-box.styles.scss';


const BrandBox = ({content}) => {
  return (
    <div className='brand-box-container'>
      <p>{content}</p>
      <div className='brand-box-white-bit'></div>
    </div>
  )
}

export default BrandBox;
