import React from "react"
import Cocktail from "./Cocktail"

function Vodka() {

  const [vodkaCocktails, setVodkaCocktails] = React.useState(undefined)


  React.useEffect(() => {
    async function getData() {
      const resp = await fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
      const cocktails = await resp.json()
      setVodkaCocktails(cocktails)
    }

    getData()

  }, [])

  return <div className="cocktails">

    {vodkaCocktails ?
      vodkaCocktails.drinks.map((cocktail) => {
        (console.log("yum", cocktail.strDrink))
        return <Cocktail
          key={cocktail.idDrink}
          name={cocktail.strDrink}
        />


      }) : <p>Loading cocktails...</p>

    }
  </div>
}

export default Vodka