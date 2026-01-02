import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

const GalleryNavigation = ({ galleries }) => {
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {galleries.map((gallery) => (
        <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>
          {gallery.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default GalleryNavigation;
