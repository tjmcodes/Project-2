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
    <button className="button is-link is-light"><Link to="/allgin">{"Show all the Gin cocktails"}</Link></button>

    <h1>Rum</h1>
    <RumCocktails />
    <button className="button is-link is-light"><Link to="/rum cocktails">{"Show all the Rum cocktails"}</Link></button>
    
    <h1>Vodka</h1>
    <VodkaCocktails />
    <button className="button is-link is-light"><Link to="/allvodka">{"Show all Vodka cocktails"}</Link></button>
    
    <h1>Tequila</h1>
    <TequilaCocktails />
    <button className="button is-link is-light"><Link to="/alltequila">{"Show all Tequila cocktails"}</Link></button>

  </div>
  
}


export default CocktailsList;


