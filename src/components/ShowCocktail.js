import React from "react"
import { Link, useParams } from "react-router-dom"


function ShowCocktail() {

  const { cocktailId } = useParams()
  const [cocktail, setCocktail] = React.useState(undefined)
  const [likes, updateLikes] = React.useState(0 + localStorage.getItem(`${cocktailId}`))

  function increaseLikes() {
    updateLikes(parseInt(likes) + 1)
    localStorage.setItem(`${cocktailId}`, (parseInt(likes)))
  }

  React.useEffect(() => {
    localStorage.setItem(`${cocktailId}`, (parseInt(likes)))
  }, [likes, cocktailId]) 


  React.useEffect(() => {
    async function fetchCocktail() {
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
      const data = await resp.json()
      setCocktail(data)
    } 
    fetchCocktail()
  }, [cocktailId])
  
  if (!cocktail) {
    return <p>Cocktail Loading...</p>
  }

  return (
    <section className="section">
      <div className="container">
        {cocktail ? (
          <div>
            <h2 className="title has-text-centered">{cocktail.drinks[0].strDrink} Recipe</h2>
            <span className="likes"> {likes} ♡</span>   
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
                  <span className="headers">Ingredients</span>
                </h4>
                <p>{cocktail.drinks[0].strIngredient1}  <strong>{cocktail.drinks[0].strMeasure1}</strong></p>
                <p>{cocktail.drinks[0].strIngredient2}  <strong>{cocktail.drinks[0].strMeasure2}</strong></p>
                <p>{cocktail.drinks[0].strIngredient3}  <strong>{cocktail.drinks[0].strMeasure3}</strong></p>
                <p>{cocktail.drinks[0].strIngredient4}  <strong>{cocktail.drinks[0].strMeasure4}</strong></p>
                <p>{cocktail.drinks[0].strIngredient5}  <strong>{cocktail.drinks[0].strMeasure5}</strong></p>
                <p>{cocktail.drinks[0].strIngredient6}  <strong>{cocktail.drinks[0].strMeasure6}</strong></p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="notebook">
                    🗒
                  </span>{" "}
                  <span className="headers">Instructions</span>
                </h4>
                <p>{cocktail.drinks[0].strInstructions}</p>
                <br />
                <div className="card-footer">
                  <button
                    onClick={increaseLikes}
                    className={"button is-primary is-light"}
                  > Like ❤️ </button>
                </div>
                <hr />
              </div>
            </div>
          </div>
        ) : (
          <p>...loading</p>
        )}
        <span className="home">
          <button className="button is-danger is-light">
            <Link to="/" style={{ textDecoration: "none" }}>{"⬅  🏠  Home"}</Link>
          </button>
        </span>
      </div>
    </section>
  )
}


export default ShowCocktail
