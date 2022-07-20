import './blog-post-one.styles.scss';
import '../../stylesheets/blog-universal-styles.scss';
import BLOG_POST_ONE from '../../json-db/blog-post-1';
import Title from '../title/title.component';
import ForegroundVideo from '../foreground-video/foreground-video.component';
import BlogBackBtn from '../blog-back-btn/blog-back-btn.component';
import BrandBox from '../brand-box/brand-box.component';

const BlogPostOne = () => {
  const { logo, text, photos, link_1, link_2, videos } = BLOG_POST_ONE[0];

  return (
    <div className='blog-post-container'>
      <div className='blog-post-title'>
        <Title title="" colour="red" side="left" />
        <img src={logo} alt="Neat" className='blog-post-title-image'/>
      </div>

      <div className='blog-post-vertical-body'>
        <div className='blog-post-vertical-half'>
          <img src={photos[0].imageUrl} alt="neat" className='blog-post-image-mid'/>
          {/*<div className='blog-post-bordered-text'>
            <p>{text[0].paragraph}</p>
          </div>*/}
          <BrandBox content={<p>{text[0].paragraph}</p>} />
          <img src={photos[2].imageUrl} alt="neat" className='blog-post-image-mid'/>

          <div className='blog-post-text'>
            <p>"{text[1].paragraph}"</p>
          </div>

          <img src={photos[3].imageUrl} alt="neat" className='blog-post-image-mid'/>

          <div className='blog-post-one-custom-box'>
            <p>You can now choose 10 refills and save £4.</p>
            <a href={link_1} target='_blank'>CREATE YOUR CUSTOM REFILL BUNDLE</a>
          </div>


        </div>

        <div className='blog-post-vertical-half'>
          <img src={photos[1].imageUrl} alt="neat" className='blog-post-image-mid'/>
          <ForegroundVideo videoSrc={videos[0].videoUrl} height="hundredwidth" />

          <ForegroundVideo videoSrc={videos[1].videoUrl} height="hundredwidth" />

          <h5 className='blog-post-now-in-store'>NOW IN STORE AT <a href={link_1} target='_blank'>BOOTHS</a></h5>

        </div>
      </div>

      <div className='blog-post-quote-container'>
        <p className='blog-post-quote'>"{text[2].paragraph}"</p>
        <p className='blog-post-quote-subtitle'>{text[3].paragraph}</p>
      </div>

      <img src={photos[4].imageUrl} alt="neat" className='blog-post-image-banner'/>

      <div className='blog-post-quote-container'>
        <p className='blog-post-quote'>"{text[4].paragraph}"</p>
        <p className='blog-post-quote-subtitle'>NEAT.</p>
      </div>

      <BlogBackBtn />
    </div>
  );
};

export default BlogPostOne;
