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
        videoId="lmGbifOOOlU"
        onClose={() => setHappyOpen(false)}
      />

      <div className="buttons are-normal">
        <button className="button is-warning" onClick={() => setHappyOpen(true)}>
          Wanna party?? 💃🏽 
        </button>
      </div>
    </React.Fragment>

  )

}

export default VodkaModalVideo