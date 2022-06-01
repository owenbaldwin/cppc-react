import './blog-post-four.styles.scss';
import '../../stylesheets/blog-universal-styles.scss';

import BLOG_POST_FOUR from '../../json-db/blog-post-4';
import Title from '../title/title.component';
import BlogBackBtn from '../blog-back-btn/blog-back-btn.component';

const BlogPostFour = () => {
  const { title, text, photos } = BLOG_POST_FOUR[0];

  return (
    <div className='blog-post-four-container'>
      <Title title={title} colour="yellow" side="right" />

      <div className='blog-post-vertical-body'>
        <div className='blog-post-vertical-half'>
          <img src={photos[0].imageUrl} alt={title} className='blog-post-image-mid'/>
          <img src={photos[1].imageUrl} alt={title} className='blog-post-image-mid'/>
          <div className='blog-post-text'>
            <p>{text[1].paragraph}</p>
          </div>
          <img src={photos[5].imageUrl} alt={title} className='blog-post-image-mid'/>
        </div>

        <div className='blog-post-vertical-half'>
          <div className='blog-post-bordered-text'>
            <p>{text[0].paragraph}</p>
          </div>
          <img src={photos[2].imageUrl} alt={title} className='blog-post-image-mid'/>
          <img src={photos[3].imageUrl} alt={title} className='blog-post-image-mid'/>
          <div className='blog-post-bordered-text'>
            <p>{text[2].paragraph}</p>
            <p>{text[3].paragraph}</p>
          </div>
        </div>
      </div>
      <BlogBackBtn />
    </div>
  );
};

export default BlogPostFour;



// <div className='blog-post-four-small-image-container'>
//   <img src={photos[3].imageUrl} alt={title} className='blog-post-four-image-small'/>
//   <img src={photos[4].imageUrl} alt={title} className='blog-post-four-image-small'/>
// </div>
