import { useState, useEffect } from "react";

export function VideoModal({ video = '', visible, updateVisibility }) {

  const [visibility, setVisibility] = useState(visible);
  const [videoFade, setVideoFade] = useState(true);

  useEffect(() => {
    setVisibility(visible);
  }, [visible]);

  return (
    (visibility ?
      <div
        // className="w-full h-full absolute top-0 left-0 bg-slate-900 bg-opacity-75 animate__animated animate__fadeIn animate__fast"
        className={`w-full h-full absolute top-0 left-0 bg-slate-900 bg-opacity-75 animate__animated animate__fast ${videoFade ? 'animate__fadeIn' : 'animate__fadeOut'}`}
        onClick={() => {
          setVideoFade(false);
          setTimeout(() => {
            updateVisibility(false);
            setVideoFade(true);
          }, 2000);
        }}
      >
        <div className="h-5/6 inline-block mt-20">
          <video className="h-full" src={video} muted autoPlay
            onEnded={() => {
              setTimeout(() => {
                setVideoFade(false);
                setTimeout(() => {
                  updateVisibility(false);
                  setVideoFade(true);
                }, 2000);
              }, 2000); //Timeout after video ends
              }}></video>
        </div>
      </div>
      : '')
  );
}

export default VideoModal;
