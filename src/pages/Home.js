import map from "../images/map.svg";
import '../App.css';
import bitterOrange from '../images/bitter-orange.svg';
import greenGinger from '../images/green-ginger.svg';
import kolaNut from '../images/kola-nut.svg';
import lemon from '../images/lemon.svg';
import pimentoBerry from '../images/pimento-berry.svg';
import quinine from '../images/quinine.svg';
import rosemary from '../images/rosmary.svg';
import tahitianLime from '../images/tahitian-lime.svg';
import vanilla from '../images/vanilla.svg';
import yuzo from '../images/yuzo.svg';
import pinkGrapefruit from '../images/pink-grapefruit.svg';
import spicyGinger from '../images/spicy-ginger.svg';
import elderflower from '../images/elderflower.svg';
import lemonThyme from '../images/lemon-thyme.svg';
import earthyGinger from '../images/earthy-ginger.svg';

const Ingredients = [
  {
    link: '',
    name: 'Bitter Orange',
    image: bitterOrange,
    css: {
      width: '112px',
      top: '330px',
      left: '173px'
    }
  },
  {
    link: '',
    name: 'Tahitian Lime',
    image: tahitianLime,
    css: {
      width: '105px',
      top: '495px',
      left: '173px'
    }
  },
  {
    link: '',
    name: 'Pink Grapefruit',
    image: pinkGrapefruit,
    css: {
      width: '127px',
      top: '327px',
      left: '383px'
    }
  },
  {
    link: '',
    name: 'Pimento Berry',
    image: pimentoBerry,
    css: {
      width: '124px',
      top: '593px',
      left: '378px'
    }
  },
  {
    link: '',
    name: 'Elderflower',
    image: elderflower,
    css: {
      width: '102px',
      top: '47px',
      left: '855px'
    }
  },
  {
    link: '',
    name: 'Rosemary',
    image: rosemary,
    css: {
      width: '102px',
      top: '258px',
      left: '758px'
    }
  },
  {
    link: '',
    name: 'Spicy Lemon',
    image: lemon,
    css: {
      width: '78px',
      top: '338px',
      left: '678px'
    }
  },
  {
    link: '',
    name: 'Fresh Green Ginger',
    image: greenGinger,
    css: {
      width: '151px',
      top: '463px',
      left: '703px'
    }
  },
  {
    link: '',
    name: 'Quinine',
    image: quinine,
    css: {
      width: '159px',
      top: '733px',
      left: '820px'
    }
  },
  {
    link: '',
    name: 'Lemon Thyme',
    image: lemonThyme,
    css: {
      width: '115px',
      top: '230px',
      left: '1104px'
    }
  },
  {
    link: '',
    name: 'Earthy Ginger',
    image: earthyGinger,
    css: {
      width: '110px',
      top: '458px',
      left: '974px'
    }
  },
  {
    link: '',
    name: 'Vanilla',
    image: vanilla,
    css: {
      width: '133px',
      top: '745px',
      left: '1120px'
    }
  },
  {
    link: '',
    name: 'Warm & Spicy Ginger',
    image: spicyGinger,
    css: {
      width: '164px',
      top: '325px',
      left: '1194px'
    }
  },
  {
    link: '',
    name: 'Yuzo',
    image: yuzo,
    css: {
      width: '127px',
      top: '411px',
      left: '1604px'
    }
  },
]

function Home() {
  return (
    <div className="h-full flex justify-center align-middle relative">
      <img src={map} alt="Map" style={{width: '1640px'}} />
      {Ingredients.map((ingredient) => (
        <a
          key={ingredient.name}
          className="absolute"
          style={ingredient.css}
          href="https://reactjs.org">
          <img src={ingredient.image} alt="" />
        </a>
      ))}
        
    </div>
  );
}

export default Home;
