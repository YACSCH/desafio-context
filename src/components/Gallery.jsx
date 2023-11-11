import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import Card from "react-bootstrap/Card";
import IconHeart from "./IconHeart";

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
      <div className="gallery grid-columns-5 p-4">
        {photos.map((photo) => (
          <Card key={ photo.id } >
            <Card.Body>
              <Card.Img
                src={ photo.src.original }
                style={{ width: "100%", height: "200px" }}
              />
               <button onClick={() => toggleLiked(photo.id)}>
                <IconHeart filled={photo.liked} />
              </button>
             
              <Card.Text> { photo.alt }</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};
export default Gallery;
