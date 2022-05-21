import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function RumModalVideo() {
  const [isRelaxOpen, setRelaxOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isRelaxOpen}
        videoId="FHuYNjCmX90"
        onClose={() => setRelaxOpen(false)}
      />

      <div className="buttons are-normal"> 
        <button className="button is-primary" onClick={() => setRelaxOpen(true)}>
        Wanna have some fun? 🎸
        </button>
      </div>
    </React.Fragment>

  )
}
export default RumModalVideo