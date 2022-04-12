import bkImg from "../images/easy-cocktails.png";

const containerCss = {
  backgroundImage: `url(${bkImg})`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover'
}

function EasyCocktails() {
  return (
    <div style={containerCss} className="h-full flex justify-center align-middle relative overflow-hidden">
      {/* <img src={bkImg} alt="" /> */}
    </div>
  );
}

export default EasyCocktails;
