import React from "react"
import Cocktail from "./Cocktail"


function AllGinCocktails() {

  const [ginCocktails, setGinCocktails] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCocktails() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")     
      const data = await resp.json()
      console.log(data)
      setGinCocktails(data)
    }
    fetchCocktails()
  }, []
  )



  return <main>    
    <div className="container">
      <div className="cocktails">
        {ginCocktails ?
          ginCocktails.drinks.map((ginCocktail) => {
            (console.log("yum", ginCocktail))
            return <Cocktail
              key={ginCocktail.idDrink}
              id={ginCocktail.idDrink}
              name={ginCocktail.strDrink}
              images={ginCocktail.strDrinkThumb} 
              ingredients={ginCocktail.ingredients}
            />

          }) : <p>Loading cocktails...</p>

        }
    
      </div>
    </div>


  </main>

}

export default AllGinCocktails