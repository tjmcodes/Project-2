import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ name, id, images }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/cocktail/${id}`}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-header-title">{name}</h3>
          </div>
          <div className="card-image">
            <figure className="image">
              <img src={images} alt={name} style={{ maxWidth: 300 }} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cocktail;
