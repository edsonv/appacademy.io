import { Route, useParams } from "react-router-dom";
import ArtDescription from "../ArtDescription";
import ArtImageTile from "../ArtImageTile";
import "./GalleryView.css";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const selectedGallery = galleries.find(
    (gallery) => String(gallery.id) === galleryId
  );
  const art = selectedGallery.objects;

  return (
    <>
      <h2>{selectedGallery.name}</h2>
      <Route path="/galleries/:galleryId" exact>
        <div className="arts">
          {art.map((artwork) => (
            <ArtImageTile art={artwork} key={artwork.id} />
          ))}
        </div>
      </Route>
      <Route path="/galleries/:galleryId/art/:artId">
        <ArtDescription gallery={selectedGallery} />
      </Route>
    </>
  );
};

export default GalleryView;
