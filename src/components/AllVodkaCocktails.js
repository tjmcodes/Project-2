import React from "react"
import Cocktail from "./Cocktail"


function AllVodkaCocktails() {

  const [vodkaCocktails, setVodkaCocktails] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCocktails() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")     
      const data = await resp.json()
      setVodkaCocktails(data)
    }
    fetchCocktails()
  }, []
  )



  return <main>    
    <h2>Vodka Cocktails</h2>
    <div className="container">
      <div className="cocktails">
        {vodkaCocktails ?
          vodkaCocktails.drinks.map((vodkaCocktail) => {
            return <Cocktail
              key={vodkaCocktail.idDrink}
              id={vodkaCocktail.idDrink}
              name={vodkaCocktail.strDrink}
              images={vodkaCocktail.strDrinkThumb} 
              ingredients={vodkaCocktail.ingredients}
            />

          }) : <p>Loading cocktails...</p>

        }
    
      </div>
    </div>
  </main>

}

export default AllVodkaCocktails
