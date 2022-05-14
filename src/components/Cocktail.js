import React from "react"

function Cocktail({ name, id, images, ingredients }) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={images} alt={name} style={{ maxWidth: 300 }}/>
          <p>{ingredients} {id}</p>
        </figure>
      </div>
    </div>
  </div>
}

export default Cocktail