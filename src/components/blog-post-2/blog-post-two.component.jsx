import './blog-post-two.styles.scss';
import BLOG_POST_TWO from '../../json-db/blog-post-2';
import Title from '../title/title.component';
import BlogBackBtn from '../blog-back-btn/blog-back-btn.component';


const BlogPostTwo = () => {
  const { logo, text, photos, link_1, linkname_1, link_2, linkname_2 } = BLOG_POST_TWO[0];

  return (
    <div className='blog-post-two-container'>
      <div className='blog-post-two-title'>
        <Title title="" colour="green" side="left" />
        <img src={logo} alt="CarbonQuota" className='blog-post-two-title-image'/>
      </div>
      <img src={photos[0].imageUrl} alt="CarbonQuota" className='blog-post-two-image-banner'/>

      <div className='blog-post-two-body'>
        <div className='blog-post-two-half'>
          <div className='blog-post-two-bordered-text'>
            <p> <a href={link_1} target='_blank'>{linkname_1}</a> {text[0].paragraph}</p>
          </div>
          <img src={photos[2].imageUrl} alt="CarbonQuota" className='blog-post-two-image-mid'/>
          <img src={photos[3].imageUrl} alt="CarbonQuota" className='blog-post-two-image-mid'/>
          <div className='blog-post-two-small-image-container'>
            <img src={photos[4].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
            <img src={photos[5].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
          </div>
        </div>

        <div className='blog-post-two-half'>
          <img src={photos[1].imageUrl} alt="CarbonQuota" className='blog-post-two-image-mid'/>
          <div className='blog-post-two-bordered-text'>
            <p> <a href={link_2} target='_blank'>{linkname_2}</a> {text[1].paragraph}</p>
          </div>
          <div className='blog-post-two-text'>
            <p>"{text[2].paragraph}"</p>
          </div>
          <div className='blog-post-two-bordered-text'>
            <p>{text[3].paragraph}</p>
          </div>
        </div>
      </div>

      <div className='blog-post-two-three-images'>
          <img src={photos[3].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
          <img src={photos[6].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
          <img src={photos[7].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
      </div>

      <div className='blog-post-two-quote-container'>
        <p className='blog-post-two-quote'>{text[4].paragraph}</p>
        <p className='blog-post-two-dominic'>{text[5].paragraph}</p>
        <p className='blog-post-two-founder'>{text[6].paragraph}</p>
      </div>

      <img src={photos[8].imageUrl} alt="CarbonQuota" className='blog-post-two-image-banner'/>
      <BlogBackBtn />
    </div>
  );
};

export default BlogPostTwo;
