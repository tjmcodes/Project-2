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
        videoId="1OjTspCqvk8"
        onClose={() => setRelaxOpen(false)}
      />

      <div className="buttons are-normal"> 
        <button className="button is-primary" onClick={() => setRelaxOpen(true)}>
        Click here to chill 🛀
        </button>
      </div>
    </React.Fragment>

  )
}
export default RumModalVideo