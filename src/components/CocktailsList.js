import React from "react";
import GinCocktails from "./GinCocktails";
import RumCocktails from "./RumCocktails";
import VodkaCocktails from "./VodkaCocktails";
import TequilaCocktails from "./TequilaCocktails";
import { Link } from "react-router-dom";




function CocktailsList() {
  return <div className="Container">
    <h1>Gin</h1>
    <GinCocktails />
    <Link to="/allgin">{"⬅ Show all the Gin cocktails"}</Link>

    <h1>Rum</h1>
    <RumCocktails />
    <Link to="/rum cocktails">{"⬅ Show all the Rum cocktails"}</Link>
    
    <h1>Vodka</h1>
    <VodkaCocktails />
    <Link to="/vodka cocktails">{"⬅ Show all Vodka cocktails"}</Link>
    
    <h1>Tequila</h1>
    <TequilaCocktails />
    <Link to="/tequila cocktails">{"⬅ Show all Tequila cocktails"}</Link>

  </div>
  
}


export default CocktailsList;


