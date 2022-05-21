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
        videoId="MeBJJmyL3xQ"
        onClose={() => setRockOpen(false)}
      />

      <div className="buttons are-normal"> 
        <button className="button is-danger" onClick={() => setRockOpen(true)}>
          Wanna dance? 🕺🏻
        </button>
      </div>
    </React.Fragment>

  )
}
export default TequilaModalVideo