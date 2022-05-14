import React from "react"
import Cocktail from "./Cocktail"

function TequilaCocktails() {

  const [tequilaCocktails, setTequilaCocktails] = React.useState(undefined)


  React.useEffect(() => {
    async function getData() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila")
      const cocktails = await resp.json()
      setTequilaCocktails(cocktails)
    }

    getData()

  }, [])

  return <main>
    <div className="container">
      <div className="cocktails">

        {tequilaCocktails ?
          tequilaCocktails.drinks.map((cocktail) => {
            // (console.log("yum", cocktail.strDrink))
            return <Cocktail
              key={cocktail.idDrink}
              name={cocktail.strDrink}
              images={cocktail.strDrinkThumb}
              id={cocktail.idDrink} 
              ingredients={cocktail.ingredients}
            /> 
          }) : <p>Loading cocktails...</p>
        }
      </div>
    </div>
  </main>
}

export default TequilaCocktails