import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Carousel, Container} from 'react-bootstrap';
import ReactLoading from 'react-loading';
import {When} from 'react-if';
import {initPhotos} from '../store/photosReducer.js';
import {test} from '../store/photosReducer.js';


export default function Carousels() {
  const photos = useSelector(state => state.photosStore.photos);

  const dispatch = useDispatch();

  useEffect (()=>{
    // dispatch(initPhotos());
    dispatch(test());
  });


  return (
    <>
      <When condition={!photos.length}>
        <ReactLoading type={'bubbles'} color={'grey'} width={150} style={{margin: 'auto'}} />
      </When>
      <When condition={photos.length != 0}>
        <Container >
          <Carousel >
            {photos.map(photo => 
              <Carousel.Item key = {photo.id}>
                <img
                  rounded
                  className="d-block w-100"
                  src={photo.urls.regular}
                  alt={photo.description? photo.description : photo.alt_description}
                  
                />
                <Carousel.Caption>
                  <h3>{photo.description? photo.description : photo.alt_description}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </Container>
      </When>

    </>
  );
}
