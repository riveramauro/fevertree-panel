import { useState, useEffect } from "react";

export function VideoModal({ video = '', visible, updateVisibility }) {

  const [visibility, setVisibility] = useState(visible);

  useEffect(() => {
    setVisibility(visible);
  }, [visible]);

  return (
    (visibility ?
      <div
        className="w-full h-full absolute top-0 left-0 bg-slate-900 bg-opacity-75 animate__animated animate__fadeIn animate__fast"
        onClick={() => updateVisibility(false)}
      >
        <div className="h-5/6 inline-block mt-20">
          <video className="h-full" src={video} muted autoPlay loop></video>
        </div>
      </div>
      : '')
  );
}

export default VideoModal;
