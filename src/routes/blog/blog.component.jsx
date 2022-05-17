import './blog.styles.scss';
import BlogPostSeven from '../../components/blog-post-7/blog-post-7.component';
import BlogPostSix from '../../components/blog-post-6/blog-post-six.component';
import BlogPostFive from '../../components/blog-post-5/blog-post-five.component';
import BlogPostFour from '../../components/blog-post-4/blog-post-four.component';

const Blog = () => {
  return (
    <div className='blog-container'>
      <BlogPostSeven />
      <BlogPostSix />
      <BlogPostFive />
      <BlogPostFour />
    </div>
  );
};

export default Blog;
