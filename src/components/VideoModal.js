import { useState, useEffect } from "react";

export function VideoModal({ visible, video = '', updateVisibility }) {

  const [visibility, setVisibility] = useState(null);
  const [videoFade, setVideoFade] = useState(true);

  useEffect(() => {
    setVisibility(visible);
    return () => {
      setVisibility(null);
    }
  }, [visible]);

  return (
    (visibility ?
      <div
        className={`w-full h-full absolute top-0 left-0 bg-slate-900 bg-opacity-75 animate__animated animate__fast ${videoFade ? 'animate__fadeIn' : 'animate__fadeOut'}`}
        onClick={() => {
          setVideoFade(false);
          setTimeout(() => {
            updateVisibility(false);
            setVideoFade(true);
          }, 2000);
        }}
      >
        <div className="h-5/6 inline-block mt-12">
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
