import Title from "../title/title.component";
import "./blog-post-7.styles.scss";
import BLOG_POST_SEVEN from '../../json-db/blog-post-7';
import BlogBackBtn from "../blog-back-btn/blog-back-btn.component";

const BlogPostSeven = () => {
  const { title, text, photos } = BLOG_POST_SEVEN[0];
  // console.log(BLOG_POST_SEVEN);
  console.log({photos});

  return (
    <div className="blog-post-seven-container">
      <Title title={title} side="left" colour="salmon" />
      <div className="blog-post-seven-image-outer">
        <div className="blog-post-seven-image-inner">
          <img src={photos[0].imageUrl} alt={photos[0].imageTitle} className='blog-post-seven-image'/>
          <h6>{photos[0].imageTitle}</h6>
        </div>
        <div className="blog-post-seven-image-inner">
          <img src={photos[1].imageUrl} alt={photos[1].imageTitle} className='blog-post-seven-image'/>
          <h6>{photos[1].imageTitle}</h6>
        </div>
      </div>
      <div className="blog-post-seven-text">
        <p>{text[0].paragraph}</p>
      </div>

      <div className="blog-post-seven-image-outer">
        <div className="blog-post-seven-image-inner">
          <img src={photos[2].imageUrl} alt={photos[2].imageTitle} className='blog-post-seven-image'/>
          <h6>{photos[2].imageTitle}</h6>
        </div>
        <div className="blog-post-seven-image-inner">
          <img src={photos[3].imageUrl} alt={photos[3].imageTitle} className='blog-post-seven-image'/>
          <h6>{photos[3].imageTitle}</h6>
        </div>
      </div>
      <div className="blog-post-seven-text">
        <p>{text[1].paragraph}</p>
      </div>

      <div className="blog-post-seven-image-outer">
        <div className="blog-post-seven-image-inner">
          <img src={photos[4].imageUrl} alt={photos[4].imageTitle} className='blog-post-seven-image'/>
          <h6>{photos[4].imageTitle}</h6>
        </div>
      </div>
      <BlogBackBtn />
    </div>
  );
};

export default BlogPostSeven;
