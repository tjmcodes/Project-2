import React from "react"
import GinCocktails from "./GinCocktails"
import RumCocktails from "./RumCocktails"
import VodkaCocktails from "./VodkaCocktails"

function CocktailsList() {
 
  return <div className="Container">
    <h1>Gin</h1>
    <GinCocktails />
    <h1>Rum</h1>
    <RumCocktails />
    <h1>Vodka</h1>
    <VodkaCocktails />
      
  </div>

}

export default CocktailsList