import React from "react"
import Cocktail from "./Cocktail"


function AllRumCocktails() {

  const [rumCocktails, setRumCocktails] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCocktails() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")     
      const data = await resp.json()
      console.log(data)
      setRumCocktails(data)
    }
    fetchCocktails()
  }, []
  )



  return <main>    
    <div className="container">
      <div className="cocktails">
        {rumCocktails ?
          rumCocktails.drinks.map((rumCocktail) => {
            (console.log("yum", rumCocktail))
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
