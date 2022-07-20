import './blog-post-five.styles.scss';
import BLOG_POST_FIVE from '../../json-db/blog-post-5';
import Title from '../title/title.component';
import BlogBackBtn from '../blog-back-btn/blog-back-btn.component';

const BlogPostFive = () => {
  const { title, text, photos, logo } = BLOG_POST_FIVE[0];

  return (
    <div className='blog-post-five-container'>
      <Title title={title} side="left" colour="burgundy" />
      <div className='blog-post-five-half'>
        <img src={photos[0].imageUrl} alt={title} className='blog-post-five-image-large'/>
        <div className='blog-post-five-half-right'>
          <img src={logo} alt={title} className='blog-post-five-logo'/>
          <div className='blog-post-five-bordered-text'>
            <p>{text[0].paragraph}</p>
            <div className='brand-box-white-bit'></div>

          </div>
          <div className='blog-post-five-text'>
            <p>{text[1].paragraph}</p>
          </div>
        </div>
      </div>
      <div className='blog-post-five-half'>
          <img src={photos[1].imageUrl} alt={title} className='blog-post-five-image-large'/>
        <div className='blog-post-five-half-right'>
          <div className='blog-post-five-image-small-container'>
            <img src={photos[2].imageUrl} alt={title} className='blog-post-five-image-small'/>
            <img src={photos[3].imageUrl} alt={title} className='blog-post-five-image-small'/>
          </div>
          <div className='blog-post-five-bordered-text'>
            <p>{text[2].paragraph}</p>
            <p>{text[3].paragraph}</p>
            <p>Go to <a href='https://exploreroam.com/' target='_blank'>exploreroam.com</a> {text[4].paragraph}</p>
          </div>
        </div>
      </div>
      <BlogBackBtn />
    </div>
  );
};

export default BlogPostFive;
