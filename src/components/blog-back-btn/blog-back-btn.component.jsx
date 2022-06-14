import './blog-back-btn.styles.scss';

const BlogBackBtn = () => {
  return (
    <div className='blog-back-btn-container'>
      <a href='/'><i class="fa-solid fa-circle-chevron-left chevron-btn"></i></a>
      <a href='#blog-top-of-page'><i class="fa-solid fa-circle-chevron-up chevron-btn"></i></a>
    </div>
  );
};

export default BlogBackBtn;
