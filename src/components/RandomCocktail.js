import React from "react"
import { Link, useParams } from "react-router-dom"
import GinModalVideo from "./GinModalVideo"
import VodkaModalVideo from "./VodkaModalVideo"
import RumModalVideo from "./RumModalVideo"
import TequilaModalVideo from "./TequilaModalVideo"


function MusicMood() {

  const { base } = useParams()
  const { cocktailName } = useParams()
  const [cocktail, setCocktail] = React.useState(undefined)
  const [randomCocktail, setRandomCocktail] = React.useState(undefined)



  React.useEffect(() => {
    async function fetchCocktail() {
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${base}`)
      const data = await resp.json()
      const random = data.drinks[Math.floor(Math.random() * data.drinks.length)] // had to store random as a variable (inner scope) in order to use for setCocktail state.
      setCocktail(random)
      const resp2 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${random.idDrink}`) // this endpoint was able to use the id from the random variable (base ingredient)
      const data2 = await resp2.json()
      setRandomCocktail(data2)

    }
    fetchCocktail()


    // localStorage.getItem(`${cocktailName}`)
  }, [base, cocktailName])


  if (!randomCocktail) {
    return <p>Cocktail Loading...</p>
  }

  return (
    <section className="section">
      <div className="container">
        {cocktail ? (
          <div>
            <h2 className="title has-text-centered">{randomCocktail.drinks[0].strDrink}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={randomCocktail.drinks[0].strDrinkThumb} alt={cocktail.strDrink} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="cocktail">
                    🍹
                  </span>{" "}
                  <span className="headers">Ingredients</span>
                </h4>
                <p>{randomCocktail.drinks[0].strIngredient1}  <strong>{randomCocktail.drinks[0].strMeasure1}</strong></p>
                <p>{randomCocktail.drinks[0].strIngredient2}  <strong>{randomCocktail.drinks[0].strMeasure2}</strong></p>
                <p>{randomCocktail.drinks[0].strIngredient3}  <strong>{randomCocktail.drinks[0].strMeasure3}</strong></p>
                <p>{randomCocktail.drinks[0].strIngredient4}  <strong>{randomCocktail.drinks[0].strMeasure4}</strong></p>
                <p>{randomCocktail.drinks[0].strIngredient5}  <strong>{randomCocktail.drinks[0].strMeasure5}</strong></p>
                <p>{randomCocktail.drinks[0].strIngredient6}  <strong>{randomCocktail.drinks[0].strMeasure6}</strong></p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="notepad">
                    🗒
                  </span>{" "}
                  <span className="headers">Instructions</span>
                </h4>
                <p>{randomCocktail.drinks[0].strInstructions}</p>
                <hr />
                <div className="modal-container">
                  {base === "Gin" && <GinModalVideo />}
                  {base === "Vodka" && <VodkaModalVideo />}
                  {base === "Rum" && <RumModalVideo />}
                  {base === "Tequila" && <TequilaModalVideo />}
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
            <Link to="/" style={{ textDecoration: "none" }}>{"⬅ 🏠  Home"}</Link>
          </button>
        </span>
      </div>
    </section>
  )

}


export default MusicMood



