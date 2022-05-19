import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function GinModalVideo() {
  const [isSadOpen, setSadOpen] = useState(false);
  
  return (

    
    <div className="columns is-multiline is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
         
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isSadOpen}
          videoId="XYKO45HjuiY"
          onClose={() => setSadOpen(false)}
        />

        <div className="buttons are-large column"> 
          <button className="button is-link" onClick={() => setSadOpen(true)}>
        Click here to sing along to sad songs 😭
          </button>
        </div>
      </React.Fragment>
      
    </div>
    
  )
}
export default GinModalVideo

