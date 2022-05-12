import './gallery.styles.scss';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import CASE_STUDIES from '../../json-db/case-studies';

const Gallery = () => {
  const { param } = useParams();

  console.log(CASE_STUDIES);

  return (
    <div className='gallery-container'>

      {CASE_STUDIES.map((item) => {
        if (item.route === param) {
          return (
            <div>

            <h1>{item.title}</h1>
            <Carousel>
              {item.photos.map((photo) => {
                return (

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={photo.imageUrl}
                      alt="slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                )
              })}
            </Carousel>
            </div>
          )
        }
      })}
    </div>
  );
};

export default Gallery;
