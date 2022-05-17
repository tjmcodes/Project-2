import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import Wheel from "./Wheel";

function ModalVideos() {
  const [isSadOpen, setSadOpen] = useState(false);
  const [isSad2Open, setSad2Open] = useState(false);
  const [isHappyOpen, setHappyOpen] = useState(false);
  const [isRelaxOpen, setRelaxOpen] = useState(false);
  const [isRockOpen, setRockOpen] = useState(false);

  return (

    
    <div>
      <React.Fragment>
        <div className="container">
          <Wheel />
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isSadOpen}
          videoId="kgMVF1iSDzM"
          onClose={() => setSadOpen(false)}
        />

        <div className="buttons are-large"> 
          <button className="button is-link" onClick={() => setSadOpen(true)}>
        Click here to listen to sad songs 😭
          </button>
        </div>
      </React.Fragment>
      
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isSad2Open}
          videoId="XYKO45HjuiY"
          onClose={() => setSad2Open(false)}
        />

        <div className="buttons are-large"> 
          <button className="button is-link" onClick={() => setSad2Open(true)}>
        Click here to sing along to sad songs 😭
          </button>
        </div>
      </React.Fragment>
  
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isHappyOpen}
          videoId="CHrR-0aOo24"
          onClose={() => setHappyOpen(false)}
        />

        <div className="buttons are-large"> 
          <button className="button is-warning" onClick={() => setHappyOpen(true)}>
        Click here for a good sing-along 🎤
          </button>
        </div>
      </React.Fragment>

      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isRelaxOpen}
          videoId="XYKO45HjuiY"
          onClose={() => setRelaxOpen(false)}
        />

        <div className="buttons are-large"> 
          <button className="button is-primary" onClick={() => setRelaxOpen(true)}>
        Click here to chill 🛀
          </button>
        </div>
      </React.Fragment>

      <React.Fragment>  
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isRockOpen}
          videoId="rntPNneXEIM"
          onClose={() => setRockOpen(false)}
        />

        <div className="buttons are-large"> 
          <button className="button is-danger" onClick={() => setRockOpen(true)}>
          Lets rock out! 🤘 🎸 🤘
          </button>
        </div>
      </React.Fragment>
      
      <button className="button is-link is-light"><Link to="/cocktails">{"⬅ Back to all cocktails"}</Link></button>
    
    </div>
    
  )
}
export default ModalVideos