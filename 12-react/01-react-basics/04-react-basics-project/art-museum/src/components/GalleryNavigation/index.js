import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

const GalleryNavigation = ({ galleries }) => {
  return (
    <nav>
      <div>
        <h1>Galleries</h1>
      </div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <div className="links">
        {galleries.map((gallery) => (
          <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>
            {gallery.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default GalleryNavigation;
