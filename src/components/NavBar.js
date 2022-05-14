// ? Import Link component
import { Link } from "react-router-dom"
import React from "react"



// ! The one difference in this navigation, are the Link components.
function Navbar() {
  return (
    <header>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="cocktails" className="navbar-item">
                List of Cocktails
            </Link>
            <Link to="cocktail/gin" className="navbar-item">
                More Information on Selected Cocktail
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
