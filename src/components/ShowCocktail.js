import React from "react"
import { Link, useParams } from "react-router-dom"


function ShowCocktail() {

  const { cocktailId } = useParams()
  const [cocktail, setCocktail] = React.useState(undefined)
  const [likes, updateLikes] = React.useState(0 + localStorage.getItem(`${cocktailId}`))

  function increaseLikes() {
    updateLikes(parseInt(likes) + 1)
    localStorage.setItem(`${cocktailId}`, (parseInt(likes)))
    console.log(likes)
  }

  React.useEffect(() => {
    localStorage.setItem(`${cocktailId}`, (parseInt(likes)))
  }, [likes]) // ! This will run whenever likes changes.


  React.useEffect(() => {
    async function fetchCocktail() {
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
      const data = await resp.json()
      setCocktail(data)
      // console.log(cocktailId)
    } 
    fetchCocktail()
  }, [cocktailId])
  
  if (!cocktail) {
    return <p>Cocktail Loading...</p>
  }
  // console.log(cocktail, { cocktailId })



  return (
    <section className="section">
      <div className="container">
        {cocktail ? (
          <div>
            <h2 className="title has-text-centered">{cocktail.drinks[0].strDrink} Recipe</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={cocktail.drinks[0].strDrinkThumb} alt={cocktail.drinks[0].strDrink} style={{ maxWidth: 600 }}/>
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="cocktail">
                    🍹
                  </span>{" "}
                  Ingredients
                </h4>
                <p>{cocktail.drinks[0].strIngredient1}  {cocktail.drinks[0].strMeasure1}</p>
                <p>{cocktail.drinks[0].strIngredient2}  {cocktail.drinks[0].strMeasure2}</p>
                <p>{cocktail.drinks[0].strIngredient3}  {cocktail.drinks[0].strMeasure3}</p>
                <p>{cocktail.drinks[0].strIngredient4}  {cocktail.drinks[0].strMeasure4}</p>
                <p>{cocktail.drinks[0].strIngredient5}  {cocktail.drinks[0].strMeasure5}</p>
                <p>{cocktail.drinks[0].strIngredient6}  {cocktail.drinks[0].strMeasure6}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="notebook">
                    🗒
                  </span>{" "}
                  Instructions
                </h4>
                <hr />
                <p>{cocktail.drinks[0].strInstructions}</p>
                <hr />
                <div className="card-footer">
                  <button
                    onClick={increaseLikes}
                    className={"button is-primary is-light"}
                  > Like ❤️ </button>
                  <span className="tag is-light">Total likes: {likes}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>...loading</p>
        )}
        <button className="button is-link is-light"><Link to="/cocktails">{"⬅ Back to all cocktails"}</Link></button>
      </div>
    </section>
  )
  //   <section className="section">
  //   <div className="container">
      
  //   {/* return */}
  // {/* name: {cocktail.drinks[0].strDrink}
  // Image: {cocktail.drinks[0]strImageSource}
  // ingredients: {strIngredient1}{strMeasure1}
  // Recipe: {strInstructions}
  //     <Link to="/cocktails">{"⬅ Back to all cocktails"}</Link> */}
  //   </div>
  // </section>
}


export default ShowCocktail
