import React from "react"
import Cocktail from "./Cocktail"


function AllRumCocktails() {

  const [rumCocktails, setRumCocktails] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCocktails() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum")     
      const data = await resp.json()
      setRumCocktails(data)
    }
    fetchCocktails()
  }, []
  )



  return <main>    
    <h2>Rum Cocktails</h2>
    <div className="container">
      <div className="cocktails">
        {rumCocktails ?
          rumCocktails.drinks.map((rumCocktail) => {
            return <Cocktail
              key={rumCocktail.idDrink}
              id={rumCocktail.idDrink}
              name={rumCocktail.strDrink}
              images={rumCocktail.strDrinkThumb} 
              ingredients={rumCocktail.ingredients}
            />

          }) : <p>Loading cocktails...</p>

        }
    
      </div>
    </div>


  </main>

}

export default AllRumCocktails
