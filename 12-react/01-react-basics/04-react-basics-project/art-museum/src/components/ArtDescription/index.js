import { Link, useParams } from "react-router-dom";
import "./ArtDescription.css";

const ArtDescription = ({ gallery }) => {
  const { galleryId, artId } = useParams();
  const selectedArt = gallery.objects.find(
    (artwork) => String(artwork.id) === artId
  );

  return (
    <>
      <h3>{selectedArt.title}</h3>
      <p>Description: {selectedArt.ArtDescription || "No description"}</p>
      <p>Technique: {selectedArt.technique || "not available"}</p>
      <p>Credit: {selectedArt.creditline}</p>
      <div className="images">
        {selectedArt.images.map((image) => (
          <img src={image.baseimageurl} alt="" />
        ))}
      </div>
      <Link to={`/galleries/${galleryId}`} className="goBack">
        Back to {gallery.name} Gallery
      </Link>
    </>
  );
};

export default ArtDescription;
