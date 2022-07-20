import './blog-post-three.styles.scss';
import '../../stylesheets/blog-universal-styles.scss';

import Title from '../title/title.component';
import BLOG_POST_THREE from '../../json-db/blog-post-3'
import ForegroundVideo from '../foreground-video/foreground-video.component';
import BlogBackBtn from '../blog-back-btn/blog-back-btn.component';
import BrandBox from '../brand-box/brand-box.component';

const BlogPostThree = () => {
  const { title, overlayTitle, text, photos, link, videos } = BLOG_POST_THREE[0];

  return (
    <div className='blog-post-three-container'>
      <Title title={title} colour='blue' side='left' />
      <div className='blog-post-three-banner' style={{backgroundImage: `url(${photos[0].imageUrl})`}}>
        <h1>{overlayTitle}</h1>
      </div>

      <div className='blog-post-three-subtitle'>
        <h4>{text[0].paragraph}</h4>
        <h2>{text[1].paragraph}</h2>
      </div>

      <div className='blog-post-vertical-body'>
        <div className='blog-post-vertical-half'>
          {/*<div className='blog-post-bordered-text'>
            <p>{text[2].paragraph}</p>
          </div>*/}
          <BrandBox content={<p>{text[2].paragraph}</p>} />
          <div className='blog-post-text'>
            <p>{text[3].paragraph}</p>
          </div>
          <img src={photos[3].imageUrl} alt={title} className='blog-post-image-mid'/>
          <ForegroundVideo videoSrc={videos[0].videoUrl} height="hundredwidth" />
          <img src={photos[4].imageUrl} alt={title} className='blog-post-image-mid'/>
        </div>

        <div className='blog-post-vertical-half'>
          <img src={photos[1].imageUrl} alt={title} className='blog-post-image-mid'/>
          <img src={photos[2].imageUrl} alt={title} className='blog-post-image-mid'/>
          {/*<div className='blog-post-bordered-text'>
            <p>{text[4].paragraph}</p>
            <p>{text[5].paragraph}</p>
          </div>*/}
          <BrandBox content={
            <div>
              <p>{text[4].paragraph}</p>
              <p>{text[5].paragraph}</p>
            </div>
          } />
          <div className='blog-post-text'>
            <p>{text[6].paragraph}</p>
          </div>
          {/*<div className='blog-post-bordered-text'>
            <p>{text[7].paragraph}</p>
            <a href={link} target='_blank'>Discover more</a>
          </div>*/}
          <BrandBox content={
            <div className='brandbox-styling'>
              <p>{text[7].paragraph}</p>
              <a href={link} target='_blank'>Discover more</a>
            </div>
          } />
        </div>
      </div>

      <div className='blog-post-three-video-container'>
        <video loop autoPlay muted className='blog-post-three-video'>
          <source
            src={videos[1].videoUrl}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className='blog-post-three-text-large'>
          <p>{text[8].paragraph}</p>
          <p>{text[9].paragraph}</p>
        </div>
      </div>

      <BlogBackBtn />
    </div>
  );
};

export default BlogPostThree;
