import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

import Card from 'react-bootstrap/Card';
import IconHeart from './IconHeart';

const Gallery = () => {
  const { photos, setPhotos } = useContext(DataContext);

 
    const toggleLiked = (photoId) => {
      
      const updatedPhotos = photos.map((photo) => {
        if (photo.id === photoId) {
          return { ...photo, liked: !photo.liked };
        }
        return photo;
      });
  
   
      setPhotos(updatedPhotos);
    };

  return (
    <>
      <div className='gallery grid-columns-5 p-4'>
        {photos.map((photo) => (
          <Card key={ photo.id } >
              <Card.Img style={{ height: '14rem'}}
               variant="top"  
                src={ photo.src.original }
                
              />
               <button className='btn-heart' 
               onClick={() => toggleLiked(photo.id)}>
                <IconHeart filled={photo.liked} />
              </button>
             
              <Card.Text className='card-text' > { photo.alt }</Card.Text>
            
          </Card>
        ))}
      </div>
    </>
  );
};
export default Gallery;
