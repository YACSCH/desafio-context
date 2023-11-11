import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import Card from "react-bootstrap/Card";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(DataContext);

  const toggleLiked = (photo) => {
    const updatedPhotos = [...photos]; 
    const photoIndex = updatedPhotos.findIndex((p) => p.id === photo.id); 

    if (photoIndex !== -1) {
      updatedPhotos[photoIndex] = { ...photo, liked: !photo.liked }; 
      setPhotos(updatedPhotos); 
    }
  };

  return (
    <>
      <div className="gallery grid-columns-5 p-4">
        {photos.map((photo) => (
          <Card key={photo.id}>
            <Card.Img
              style={{ height: "14rem" }}
              variant="top"
              src={photo.src.original}
            />
            <button className="btn-heart" onClick={() => toggleLiked(photo)}>
              <IconHeart filled={photo.liked} />
            </button>

            <Card.Text className="card-text"> {photo.alt}</Card.Text>
          </Card>
        ))}
      </div>
    </>
  );
};
export default Gallery;
