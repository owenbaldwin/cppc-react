import './blog-post-two.styles.scss';
import '../../stylesheets/blog-universal-styles.scss';

import BLOG_POST_TWO from '../../json-db/blog-post-2';
import Title from '../title/title.component';
import BlogBackBtn from '../blog-back-btn/blog-back-btn.component';
import BrandBox from '../brand-box/brand-box.component';


const BlogPostTwo = () => {
  const { logo, text, photos, link_1, linkname_1, link_2, linkname_2 } = BLOG_POST_TWO[0];

  return (
    <div className='blog-post-two-container'>
      <div className='blog-post-two-title'>
        <Title title="" colour="green" side="left" />
        <img src={logo} alt="CarbonQuota" className='blog-post-two-title-image'/>
      </div>
      <img src={photos[0].imageUrl} alt="CarbonQuota" className='blog-post-two-image-banner'/>

      <div className='blog-post-vertical-body'>
        <div className='blog-post-vertical-half'>
          {/*<div className='blog-post-bordered-text'>
            <p> <a href={link_1} target='_blank'>{linkname_1}</a> {text[0].paragraph}</p>
          </div>*/}
          <BrandBox content={<p> <a href={link_1} target='_blank'>{linkname_1}</a> {text[0].paragraph}</p>} />
          <img src={photos[2].imageUrl} alt="CarbonQuota" className='blog-post-image-mid'/>
          <img src={photos[3].imageUrl} alt="CarbonQuota" className='blog-post-image-mid'/>
          <div className='blog-post-two-small-image-container'>
            <img src={photos[4].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
            <img src={photos[5].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
          </div>
        </div>

        <div className='blog-post-vertical-half'>
          <img src={photos[1].imageUrl} alt="CarbonQuota" className='blog-post-image-mid'/>
          {/*<div className='blog-post-bordered-text'>
            <p> <a href={link_2} target='_blank'>{linkname_2}</a> {text[1].paragraph}</p>
          </div>*/}
          <BrandBox content={<p> <a href={link_2} target='_blank'>{linkname_2}</a> {text[1].paragraph}</p>} />
          <div className='blog-post-text'>
            <p>"{text[2].paragraph}"</p>
          </div>
          {/*<div className='blog-post-bordered-text'>
            <p>{text[3].paragraph}</p>
          </div>*/}
          <BrandBox content={<p>{text[3].paragraph}</p>} />
        </div>
      </div>

      <div className='blog-post-two-three-images'>
          <img src={photos[3].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
          <img src={photos[6].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
          <img src={photos[7].imageUrl} alt="CarbonQuota" className='blog-post-two-image-small'/>
      </div>

      <div className='blog-post-two-quote-container'>
        <p className='blog-post-two-quote'>"{text[4].paragraph}"</p>
        <p className='blog-post-two-quote-subtitle'>{text[5].paragraph}</p>
        <p className='blog-post-two-quote-subtitle'>{text[6].paragraph}</p>
      </div>

      <img src={photos[8].imageUrl} alt="CarbonQuota" className='blog-post-two-image-banner'/>
      <BlogBackBtn />
    </div>
  );
};

export default BlogPostTwo;
