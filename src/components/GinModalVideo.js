import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function GinModalVideo() {
  const [isSadOpen, setSadOpen] = useState(false);
  
  return (

    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isSadOpen}
        videoId="XYKO45HjuiY"
        onClose={() => setSadOpen(false)}
      />

      <div className="buttons are-normal"> 
        <button className="button is-link" onClick={() => setSadOpen(true)}>
        Wanna cry? 😭
        </button>
      </div>
    </React.Fragment>
      
  
    
  )
}
export default GinModalVideo

