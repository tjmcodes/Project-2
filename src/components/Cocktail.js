import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ name, id, images }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      
      <div className="card">
        <div className="card-header">
          <h3 className="card-header-title title-color">{name}</h3>
        </div>
        <Link to={`/cocktail/${id}`}>
          <div className="card-image">
            <figure className="image">
              <img src={images} alt={name} style={{ maxWidth: 400 }} />
            </figure>
          </div>
        </Link>
        <div className="card-footer">
          {localStorage.getItem(id) ? (
            <p> {localStorage.getItem(id)} ❤️</p>
          ) : <p>0 ❤️ </p>
          }            
        </div>        
      </div>      
    </div>
  );
}

export default Cocktail;
