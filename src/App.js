import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/NavBar"
import ShowCocktail from "./components/ShowCocktail"
import CocktailsList from "./components/CocktailsList"
import AllGinCocktails from "./components/AllGinCocktails"
import AllVodkaCocktails from "./components/AllVodkaCocktails"
import AllTequilaCocktails from "./components/AllTequilaCocktails"
import AllRumCocktails from "./components/AllRumCocktails"
import Wheel from "./components/Wheel"
import RandomCocktail from "./components/RandomCocktail"


function App() {

  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CocktailsList />} />
        <Route path="cocktail/:cocktailId" element={<ShowCocktail />} />
        <Route path="allgin" element={<AllGinCocktails />} />
        <Route path="allrum" element={<AllRumCocktails />}/>
        <Route path="allvodka" element={<AllVodkaCocktails />} />
        <Route path="alltequila" element={<AllTequilaCocktails />}/>
        <Route path="roulette" element={<Wheel />}/>
        <Route path="modal/cocktail/:base" element={<RandomCocktail />} />

      </Routes>
    </Router>
  </>
  )
}

export default App
