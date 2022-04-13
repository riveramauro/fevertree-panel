import bkImg from "../images/sparklin_lime.png";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";

function SparklinPink() {
  return (
    <Slide backgroundImage={bkImg}>
      <Link to="/EasyCocktails" className="block w-full h-full" />
    </Slide>
  );
}

export default SparklinPink;
