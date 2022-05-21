import React from "react"
import Cocktail from "./Cocktail"

function RumCocktails() {

  const [purePassionCocktail, setPurePassionCocktail] = React.useState(undefined)
  const [zombieCocktail, setZombieCocktail] = React.useState(undefined)
  const [darkStormyCocktail, setDarkStormyCocktail] = React.useState(undefined)
  const [spice75Cocktail, setSpice75Cocktail] = React.useState(undefined)


  React.useEffect(() => {
    async function fetchPurePassionCocktail() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178338")
      const data = await resp.json()
      setPurePassionCocktail(data)
    }
    fetchPurePassionCocktail()
  }, []);
  React.useEffect(() => {
    async function fetchZombieCocktail() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17241")
      const data = await resp.json()
      setZombieCocktail(data)
    }
    fetchZombieCocktail()
  }, []);
  React.useEffect(() => {
    async function fetchDarkStormyCocktail() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17211")
      const data = await resp.json()
      setDarkStormyCocktail(data)
    }
    fetchDarkStormyCocktail()
  }, []);
  React.useEffect(() => {
    async function fetchSpice75Cocktail() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178322")
      const data = await resp.json()
      setSpice75Cocktail(data)
    }
    fetchSpice75Cocktail()
  }, []);


  return (
    <main> 
      <div className="container">
        <div className="cocktails">
          {purePassionCocktail ? (
            <Cocktail
              id={purePassionCocktail.drinks[0].idDrink}
              name={purePassionCocktail.drinks[0].strDrink}
              images={purePassionCocktail.drinks[0].strDrinkThumb} 
            />
          ) : (
            <p>Loading Pure Passion Cocktail...</p>
          )}
          {zombieCocktail ? (
            <Cocktail
              id={zombieCocktail.drinks[0].idDrink}
              name={zombieCocktail.drinks[0].strDrink}
              images={zombieCocktail.drinks[0].strDrinkThumb} 
            />
          ) : (
            <p>Loading Zombie Cocktail...</p>
          )}
          {darkStormyCocktail ? (
            <Cocktail
              id={darkStormyCocktail.drinks[0].idDrink}
              name={darkStormyCocktail.drinks[0].strDrink}
              images={darkStormyCocktail.drinks[0].strDrinkThumb}
            />
          ) : ( 
            <p>Loading Dark and Stormy Cocktail...</p>
          )}      
          {spice75Cocktail ? (
            <Cocktail
              id={spice75Cocktail.drinks[0].idDrink}
              name={spice75Cocktail.drinks[0].strDrink}
              images={spice75Cocktail.drinks[0].strDrinkThumb}
            />
          ) : ( 
            <p>Loading Spice 75 Cocktail...</p>
          )}      
        </div>
      </div>
    </main>
  )
}

export default RumCocktails