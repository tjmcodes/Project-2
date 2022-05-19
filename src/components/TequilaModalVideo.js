import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function TequilaModalVideo() {
  const [isRockOpen, setRockOpen] = useState(false);

  return (
    <React.Fragment>  
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isRockOpen}
        videoId="B07yMnlmRkE"
        onClose={() => setRockOpen(false)}
      />

      <div className="buttons are-large column"> 
        <button className="button is-danger" onClick={() => setRockOpen(true)}>
          Wanna dance? 🕺🏻
        </button>
      </div>
    </React.Fragment>

  )
}
export default TequilaModalVideo