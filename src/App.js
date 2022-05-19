
// ! Destructuring import syntax!
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/NavBar"
import ShowCocktail from "./components/ShowCocktail"
import CocktailsList from "./components/CocktailsList"
// import GinCocktails from "./components/GinCocktails"
<<<<<<< HEAD
import VodkaVideo from "./components/VodkaModalVideo"
// import VodkaCocktails from "./components/VodkaCocktails"
=======
import RumModalVideo from "./components/RumModalVideo"
import TequilaModalVideo from "./components/TequilaModalVideo"
>>>>>>> 795f0c8350f2feb38dbf3fc6b62247a78a45995e
// import TequilaCocktails from "./components/VodkaCocktails"
import AllGinCocktails from "./components/AllGinCocktails"
import AllVodkaCocktails from "./components/AllVodkaCocktails"
import AllTequilaCocktails from "./components/AllTequilaCocktails"
import AllRumCocktails from "./components/AllRumCocktails"
import ModalVideos from "./components/ModalVideos"
import Wheel from "./components/Wheel"
import RandomCocktail from "./components/RandomCocktail"


function App() {
  // ! 1) You need a router. You'll pretty always use BrowserRouter
  // ! 2) You make a Routes component inside.
  // ! 3) You create all the actual Route components.
  // ! Those need 2 things: URL path, and the actual component to render.

  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CocktailsList />} />
        <Route path="cocktail/:cocktailId" element={<ShowCocktail />} />
        {/* <Route path="gin" element={<GinCocktails />} /> */}
        <Route path="allgin" element={<AllGinCocktails />} />
        <Route path="rummodal" element={<RumModalVideo />}/>
        <Route path="allrum" element={<AllRumCocktails />}/>
        <Route path="vodkamodal" element={<VodkaVideo />}/> 
        <Route path="allvodka" element={<AllVodkaCocktails />} />
        <Route path="tequilamodal" element={<TequilaModalVideo />} /> 
        <Route path="alltequila" element={<AllTequilaCocktails />}/>
        <Route path="modal" element={<ModalVideos />}/>
        <Route path="roulette" element={<Wheel />}/>
        <Route path="modal/cocktail/:base" element={<RandomCocktail />} />

      </Routes>
    </Router>
  </>
  )
}

export default App
