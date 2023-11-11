import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import Card from "react-bootstrap/Card";

const Favorites = () => {
  const { photos } = useContext(DataContext);

  const likedPhotos = photos.filter((photo) => photo.liked);

  return (
    <div>
      <h1 className="text-center p-3">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {likedPhotos.map((photo) => (
          <Card key={photo.id} style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: '14rem'}}
              variant='top'
              src={photo.src.medium}
              alt={photo.alt}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
