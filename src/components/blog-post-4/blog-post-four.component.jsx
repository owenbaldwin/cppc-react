import './blog-post-four.styles.scss';
import BLOG_POST_FOUR from '../../json-db/blog-post-4';
import Title from '../title/title.component';
import BlogBackBtn from '../blog-back-btn/blog-back-btn.component';

const BlogPostFour = () => {
  const { title, text, photos } = BLOG_POST_FOUR[0];

  return (
    <div className='blog-post-four-container'>
      <Title title={title} colour="yellow" side="right" />
      <div className='blog-post-four-halves'>
        <img src={photos[0].imageUrl} alt={title} className='blog-post-four-image-mid'/>
        <div className='blog-post-four-bordered-text'>
          <p>{text[0].paragraph}</p>
        </div>
      </div>
      <div className='blog-post-four-halves'>
        <img src={photos[1].imageUrl} alt={title} className='blog-post-four-image-mid'/>
        <img src={photos[2].imageUrl} alt={title} className='blog-post-four-image-mid'/>
      </div>
      <div className='blog-post-four-halves'>
        <div className='blog-post-four-text'>
          <p>{text[1].paragraph}</p>
        </div>
        <div className='blog-post-four-small-image-container'>
          <img src={photos[3].imageUrl} alt={title} className='blog-post-four-image-small'/>
          <img src={photos[4].imageUrl} alt={title} className='blog-post-four-image-small'/>
        </div>
      </div>
      <div className='blog-post-four-halves'>
        <img src={photos[5].imageUrl} alt={title} className='blog-post-four-image-mid'/>
        <div className='blog-post-four-bordered-text'>
          <p>{text[2].paragraph}</p>
          <p>{text[3].paragraph}</p>
        </div>
      </div>
      <BlogBackBtn />
    </div>
  );
};

export default BlogPostFour;
