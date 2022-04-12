import bkImg from "../images/sparklin_pink_grapefruit.png";
import { Link } from "react-router-dom";

const containerCss = {
  backgroundImage: `url(${bkImg})`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover'
}

function SparklinPink() {
  return (
    <div style={containerCss} className="h-full flex justify-center align-middle relative overflow-hidden">
      <Link to="/EasyCocktails" className="block w-full h-full" />
    </div>
  );
}

export default SparklinPink;
