// ? Import Link component
import { Link } from "react-router-dom"
import React from "react"

// ! The one difference in this navigation, are the Link components.
function Navbar() {
  return (
    <header>
      <nav className="navbar is-danger">
        <div className="container">
          <div className="navbar-brand">
            
            <Link to="/" style={{ textDecoration: "none" }} className="navbar-item">
              🏠 Home
            </Link>

            <Link to="roulette" style={{ textDecoration: "none" }} className="navbar-item">
              🎰 Roulette
            </Link>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
