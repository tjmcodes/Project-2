import React from "react"
import Cocktail from "./Cocktail"


function AllTequilaCocktails() {
  const [tequilaCocktails, setTequilaCocktails] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchTequilaCocktails() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila")     
      const data = await resp.json()
      setTequilaCocktails(data)
    }
    fetchTequilaCocktails()
  }, []
  )
  
  return <main>    
    <h2>Tequila Cocktails</h2>
    <div className="container">
      <div className="cocktails">
        {tequilaCocktails ?
          tequilaCocktails.drinks.map((tequilaCocktail) => {
            return <Cocktail
              key={tequilaCocktail.idDrink}
              id={tequilaCocktail.idDrink}
              name={tequilaCocktail.strDrink}
              images={tequilaCocktail.strDrinkThumb} 
              ingredients={tequilaCocktail.ingredients}
            />

          }) : <p>Loading cocktails...</p>

        }
      </div>
    </div>
  </main>
}

export default AllTequilaCocktails