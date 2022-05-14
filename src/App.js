
// ! Destructuring import syntax!
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/NavBar"
import ShowCocktail from "./components/ShowCocktail"
import CocktailsList from "./components/CocktailsList"
import Vodka from "./components/VodkaCocktails"

import GinCocktails from "./components/GinCocktails"


import RumCocktails from "./components/RumCocktails"


function App() {
  // ! 1) You need a router. You'll pretty always use BrowserRouter
  // ! 2) You make a Routes component inside.
  // ! 3) You create all the actual Route components.
  // ! Those need 2 things: URL path, and the actual component to render.

  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="gin" element={<GinCocktails />} />
        <Route path="cocktails/" element={<CocktailsList />} />
        <Route path="cocktail/:cocktailName" element={<ShowCocktail />} />
        <Route path="rum" element={<RumCocktails />}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
