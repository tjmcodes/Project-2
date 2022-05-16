import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ name, id, images }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/cocktail/${id}`}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-header-title title-color">{name}</h3>
          </div>
          <div className="card-image">
            <figure className="image">
              <img src={images} alt={name} style={{ maxWidth: 400 }} />
            </figure>
          </div>
          <div className="card-footer">
            {localStorage.getItem(id) ? (
              <p> {localStorage.getItem(id)} ❤️</p>
            ) : <p>0 ❤️ </p>
            }
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cocktail;
