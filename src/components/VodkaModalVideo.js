import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function VodkaModalVideo() {
  const [isHappyOpen, setHappyOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isHappyOpen}
        videoId="CHrR-0aOo24"
        onClose={() => setHappyOpen(false)}
      />

      <div className="buttons are-large column">
        <button className="button is-warning" onClick={() => setHappyOpen(true)}>
          Click here for a good sing-along 🎤
        </button>
      </div>
    </React.Fragment>

  )

}

export default VodkaModalVideo