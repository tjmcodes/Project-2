
// ! Destructuring import syntax!
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/NavBar"
import ShowCocktail from "./components/ShowCocktail"
import CocktailsList from "./components/CocktailsList"
import GinCocktails from "./components/GinCocktails"
import RumCocktails from "./components/RumCocktails"
import VodkaCocktails from "./components/VodkaCocktails"
import TequilaCocktails from "./components/VodkaCocktails"
import AllGinCocktails from "./components/AllGinCocktails"
import AllVodkaCocktails from "./components/AllVodkaCocktails"

function App() {
  // ! 1) You need a router. You'll pretty always use BrowserRouter
  // ! 2) You make a Routes component inside.
  // ! 3) You create all the actual Route components.
  // ! Those need 2 things: URL path, and the actual component to render.

  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="cocktails/" element={<CocktailsList />} />
        <Route path="cocktail/:cocktailName" element={<ShowCocktail />} />
        <Route path="gin" element={<GinCocktails />} />
        <Route path="allgin" element={<AllGinCocktails />} />
        <Route path="rum" element={<RumCocktails />}/>
        <Route path="vodka" element={<VodkaCocktails />}/>
        <Route path="allvodka" element={<AllVodkaCocktails />} />
        <Route path="tequila" element={<TequilaCocktails />}/>

      </Routes>
    </Router>
  </>
  )
}

export default App
