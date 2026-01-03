import { Link, useParams } from "react-router-dom";
import "./ArtImageTile.css";

const ArtImageTile = ({ art }) => {
  const firstArt = art.images[0].baseimageurl;
  const { galleryId } = useParams();

  return (
    <Link to={`/galleries/${galleryId}/art/${art.id}`} className="art-tile">
      <img src={firstArt} alt="" />
    </Link>
  );
};

export default ArtImageTile;
