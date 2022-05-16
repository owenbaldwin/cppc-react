import './blog-post-six.styles.scss';
import BLOG_POST_SIX from '../../json-db/blog-post-6';
import ForegroundVideo from '../foreground-video/foreground-video.component';
import BlogBackBtn from '../blog-back-btn/blog-back-btn.component';
import Title from '../title/title.component';

const BlogPostSix = () => {
  const { title, text, photos, logos, video } = BLOG_POST_SIX[0];

  return (
    <div className='blog-post-six-container'>
      <Title title={title} side="right" colour="green" />
      <div className='blog-post-six-logo-container'>
        <img src={logos[0].logo} alt={title} className='blog-post-six-logo'/>
        <img src={logos[1].logo} alt={title} className='blog-post-six-logo'/>
      </div>
      <div className='blog-post-six-video-container'>
        <ForegroundVideo videoSrc={video} />
        <div className='blog-post-six-text'>
          <p>{text[0].paragraph}</p>
        </div>
      </div>
      <div className='blog-post-six-image-container'>
        {photos.map((photo) => {
          return (
            <img src={photo.imageUrl} alt={title} className='blog-post-six-image'/>
          )
        })}
      </div>
      <div className='blog-post-six-text'>
        <p>{text[1].paragraph} <a href='https://www.globalrecyclingday.com/' target='_blank'>Global Recycling Day</a> {text[2].paragraph}</p>
      </div>
      <BlogBackBtn />
    </div>
  );
};

export default BlogPostSix;
