import "./Greenhouse.css";
import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";

import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ClimateStats from "./ClimateStats";
import LightSwitch from "./LightSwitch";

function Greenhouse() {
  const { themeName } = useTheme();
  const [selectedImage, setSelectedImage] = useState(dayImage);

  useEffect(() => {
    let imageToSet = null;
    switch (themeName) {
      case "night":
        imageToSet = nightImage;
        break;
      default:
        imageToSet = dayImage;
        break;
    }
    setSelectedImage(imageToSet);
  }, [themeName]);

  return (
    <section>
      <img className="greenhouse-img" src={selectedImage} alt="greenhouse" />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
