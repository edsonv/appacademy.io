import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();

  const selectedGallery = galleries.find(
    (gallery) => String(gallery.id) === galleryId
  );
  return <h2>{selectedGallery.name}</h2>;
};

export default GalleryView;
