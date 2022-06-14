import './gallery.styles.scss';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import CASE_STUDIES from '../../json-db/case-studies';
import BrandBox from '../../components/brand-box/brand-box.component'
import '../../stylesheets/blog-universal-styles.scss'

const Gallery = () => {
  const { gallery } = useParams();

  // console.log(CASE_STUDIES);
  // console.log(gallery);


  return (
    <div className='gallery-container'>

      {CASE_STUDIES.map((item) => {
        if (item.route === gallery) {
          return (
            <div className='gallery-inner'>
              <img src={item.imageUrl} alt="company logo" className='gallery-logo'/>

              <BrandBox content={item.text} />

              <Carousel fade>
                {item.photos.map((photo) => {
                  return (
                    <Carousel.Item>

                    {(() => {
                      if (photo.imageUrl) {
                        return (
                          <img
                            className="d-block w-100"
                            src={photo.imageUrl}
                            alt="slide"
                          />
                        )
                      } else if (photo.video) {
                        return (
                          <video loop autoPlay muted className="d-block w-100 gallery-video">
                            <source
                              src={photo.video}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        )
                      }
                    })()}

                    </Carousel.Item>
                  )
                })}
              </Carousel>

              <div className='gallery-link-container'>
                <a href='/'><i class="fa-solid fa-circle-chevron-left chevron-btn"></i></a>
                <a href={item.link} target="_blank" className='gallery-link'>{item.title}</a>
                <a href='#blog-top-of-page'><i class="fa-solid fa-circle-chevron-up chevron-btn"></i></a>

              </div>
            </div>
          )
        }
      })}
    </div>
  );
};

export default Gallery;
