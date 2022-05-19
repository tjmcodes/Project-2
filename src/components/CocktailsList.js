import React from "react";
import GinCocktails from "./GinCocktails";
import RumCocktails from "./RumCocktails";
import VodkaCocktails from "./VodkaCocktails";
import TequilaCocktails from "./TequilaCocktails";
import { Link } from "react-router-dom";

function CocktailsList() {
  return <div className="container">
    <h1>Gin</h1>
    <GinCocktails />
    <span className="link"><button className="button is-danger is-light"><Link to="/allgin" style={{ textDecoration: "none" }}>{"All Gin Cocktails"}</Link></button></span>

    <h1>Rum</h1>
    <RumCocktails />    
    <span className="link"><button className="button is-danger is-light"><Link to="/allrum" style={{ textDecoration: "none" }}>{"All Rum Cocktails"}</Link></button></span>

    <h1>Vodka</h1>
    <VodkaCocktails />
    <span className="link"><button className="button is-danger is-light"><Link to="/allvodka" style={{ textDecoration: "none" }}>{"All Vodka Cocktails"}</Link></button></span>
    
    <h1>Tequila</h1>
    <TequilaCocktails />
    <span className="link"><button className="button is-danger is-light"><Link to="/alltequila" style={{ textDecoration: "none" }}>{"All Tequila Cocktails"}</Link></button></span>
  </div>
  
}


export default CocktailsList;


