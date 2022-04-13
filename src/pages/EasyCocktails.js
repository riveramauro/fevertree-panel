import { useState } from "react";
import Slide from "../components/Slide";
import VideoModal from "../components/VideoModal";

import bkImg from "../images/easy-cocktails.png";

import limeVideo from "../videos/EasyCocktails/3WaysToLime&Yuzu_FINAL.mp4";
import grapefruitVideo from "../videos/EasyCocktails/3WaysToSPG_FINAL.mp4";
import easyVideo from "../videos/EasyCocktails/Easy123.mp4";

function EasyCocktails() {
  const [viewModal, setViewModal] = useState(false)
  const [modalVideo, setModalVideo] = useState('')

  const updateVisibility = (visibility) => {
    setViewModal(visibility);
  }

  return (
    <Slide backgroundImage={bkImg}>
      <div
        className="w-[480px] h-[410px] absolute cursor-pointer" 
        style={{ bottom: 0, left: 0 }}
        onClick={() => {
          setViewModal(true);
          setModalVideo(limeVideo);
        }}
        >
      </div>
      <div
        className="w-[480px] h-[410px] absolute cursor-pointer" 
        style={{ top: 0, left: 478 }}
        onClick={() => {
          setViewModal(true);
          setModalVideo(easyVideo);
        }}
        >
      </div>
      <div
        className="w-[480px] h-[410px] absolute cursor-pointer" 
        style={{ bottom: 0, left: 960 }}
        onClick={() => {
          setViewModal(true);
          setModalVideo(grapefruitVideo);
        }}
        >
      </div>
      <VideoModal visible={viewModal} video={modalVideo} updateVisibility={updateVisibility} />
    </Slide>
  );
}

export default EasyCocktails;
