import React from "react"
import { Link, useParams } from "react-router-dom"


function ShowCocktail() {

  const { cocktailName } = useParams()
  const [cocktail, setCocktail] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCocktail() {
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailName}`)
      const data = await resp.json()
      setCocktail(data, cocktail)
    }
    fetchCocktail()
  }, [cocktail, cocktailName])
  
  if (!cocktail) {
    return <p>Cocktail Loading...</p>
  }
  // console.log(cocktail, { cocktailName })


  return <section className="section">
    <div className="container">
      <Link to="/cocktails">{"⬅ Back to all cocktails"}</Link>
    </div>
  </section>
}


export default ShowCocktail
