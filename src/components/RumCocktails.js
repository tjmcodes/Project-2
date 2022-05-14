import React from "react"
import Cocktail from "./Cocktail"

function RumCocktails() {

  const [rumCocktails, setRumCocktails] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchRumCocktails() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Rum")
      const data = await resp.json()
      console.log(data)
      setRumCocktails(data)
    }
    fetchRumCocktails()
  }, []
  )
  return <main>
    <h1> 🍸 Cocktail Party App 🍸 </h1>
    
    <div className="container">
      <div className="cocktails">

        {rumCocktails ?
          rumCocktails.drinks.map((rumCocktail) => {
            (console.log("yum", rumCocktail))
            return <Cocktail
              key={rumCocktail.idDrink}
              // id={cocktail.idDrink}
              name={rumCocktail.strDrink}
              images={rumCocktail.strDrinkThumb} 
              ingredients={rumCocktail.ingredients}
            />

          }) : <p>Loading Rum cocktails...</p>

        }
      </div>
    </div>
  </main>

}

export default RumCocktails