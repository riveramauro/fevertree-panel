import { useState } from "react";
import bkImg from "../images/sustainability.png";
import Slide from "../components/Slide";
import VideoModal from "../components/VideoModal";

import susVideo from "../videos/Sustainability/Fever-Tree_Sustainability_Global_Carbon_Neutral_16x9.mp4";

function SparklinPink() {
  const [viewModal, setViewModal] = useState(false)
  const [modalVideo, setModalVideo] = useState('')

  const updateVisibility = (visibility) => {
    setViewModal(visibility);
  }

  return (
    <Slide backgroundImage={bkImg}>
      <div
        className="w-full h-full absolute top-0 left-0 cursor-pointer" 
        style={{ bottom: 0, left: 0 }}
        onClick={() => {
          setViewModal(true);
          setModalVideo(susVideo);
        }}
        >
      </div>
      <VideoModal visible={viewModal} video={modalVideo} updateVisibility={updateVisibility} />
    </Slide>
  );
}

export default SparklinPink;
