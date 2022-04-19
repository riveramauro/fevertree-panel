import { useState } from "react";
import { VideoModal } from "../components/VideoModal";

import '../App.css';

import map from "../images/map.svg";
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


import QuinineVideo from "../videos/Ingredients/Quinine_Congo.mp4";
import BitterVideo from "../videos/Ingredients/BitterOrange_Mexico.mp4";
import ElderVideo from "../videos/Ingredients/ElderFlower_England.mp4";
import GingerVideo from "../videos/Ingredients/Ginger_x3_Nigeria-IvoryCoast-Cochin.mp4";
import KolaVideo from "../videos/Ingredients/Kola_Nut_Pimento_Berries_Vanilla.mp4";
import LemonVideo from "../videos/Ingredients/Lemon_Sicily.mp4";
import PinkVideo from "../videos/Ingredients/PinkGrapefruit_Florida.mp4";
import RosemaryVideo from "../videos/Ingredients/Rosemary_Spain.mp4";
import TahitianVideo from "../videos/Ingredients/TahtitianLime_Yuzu.mp4";
import ThymeVideo from "../videos/Ingredients/LemonThyme_Provence.mp4";

const Ingredients = [
  {
    link: '',
    name: 'Bitter Orange',
    image: bitterOrange,
    css: {
      width: '112px',
      top: '330px',
      left: '173px'
    },
    video: BitterVideo,
  },
  {
    link: '',
    name: 'Tahitian Lime',
    image: tahitianLime,
    css: {
      width: '105px',
      top: '495px',
      left: '173px'
    },
    video: TahitianVideo,
  },
  {
    link: '',
    name: 'Pink Grapefruit',
    image: pinkGrapefruit,
    css: {
      width: '127px',
      top: '327px',
      left: '383px'
    },
    video: PinkVideo,
  },
  {
    link: '',
    name: 'Kola Nut',
    image: kolaNut,
    css: {
      width: '70px',
      top: '768px',
      left: '433px'
    },
    video: KolaVideo,
  },
  {
    link: '',
    name: 'Pimento Berry',
    image: pimentoBerry,
    css: {
      width: '124px',
      top: '593px',
      left: '378px'
    },
    video: KolaVideo,
  },
  {
    link: '',
    name: 'Elderflower',
    image: elderflower,
    css: {
      width: '102px',
      top: '47px',
      left: '855px'
    },
    video: ElderVideo,
  },
  {
    link: '',
    name: 'Rosemary',
    image: rosemary,
    css: {
      width: '102px',
      top: '258px',
      left: '758px'
    },
    video: RosemaryVideo,
  },
  {
    link: '',
    name: 'Spicy Lemon',
    image: lemon,
    css: {
      width: '78px',
      top: '338px',
      left: '678px'
    },
    video: LemonVideo,
  },
  {
    link: '',
    name: 'Fresh Green Ginger',
    image: greenGinger,
    css: {
      width: '151px',
      top: '463px',
      left: '703px'
    },
    video: GingerVideo,
  },
  {
    link: '',
    name: 'Quinine',
    image: quinine,
    css: {
      width: '159px',
      top: '733px',
      left: '820px'
    },
    video: QuinineVideo,
  },
  {
    link: '',
    name: 'Lemon Thyme',
    image: lemonThyme,
    css: {
      width: '115px',
      top: '230px',
      left: '1104px'
    },
    video: ThymeVideo,
  },
  {
    link: '',
    name: 'Earthy Ginger',
    image: earthyGinger,
    css: {
      width: '110px',
      top: '458px',
      left: '974px'
    },
    video: GingerVideo,
  },
  {
    link: '',
    name: 'Vanilla',
    image: vanilla,
    css: {
      width: '133px',
      top: '745px',
      left: '1120px'
    },
    video: KolaVideo,
  },
  {
    link: '',
    name: 'Warm & Spicy Ginger',
    image: spicyGinger,
    css: {
      width: '164px',
      top: '325px',
      left: '1194px'
    },
    video: GingerVideo,
  },
  {
    link: '',
    name: 'Yuzo',
    image: yuzo,
    css: {
      width: '127px',
      top: '411px',
      left: '1604px'
    },
    video: TahitianVideo
  },
]

function Home() {
  
  const [viewModal, setViewModal] = useState(false)
  const [modalVideo, setModalVideo] = useState('')

  const updateVisibility = (visibility) => {
    setViewModal(visibility);
  }
  
  return (
    <div className="h-full flex justify-center align-middle relative">
      <img src={map} alt="Map" style={{width: '1640px'}} />
      {Ingredients.map((ingredient) => (
        <div
          key={ingredient.name}
          className="absolute cursor-pointer"
          style={ingredient.css}
          onClick={() => {
            setViewModal(true);
            setModalVideo(ingredient.video);
          }}
          >
          <img src={ingredient.image} alt="" />
        </div>
      ))}
      <VideoModal visible={viewModal} video={modalVideo} updateVisibility={updateVisibility} />
    </div>
  );
}

export default Home;
