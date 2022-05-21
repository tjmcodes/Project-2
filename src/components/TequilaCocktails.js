import React from "react";
import Cocktail from "./Cocktail";

function TequilaCocktails() {
  const [tequilaSunrise, setTequilaSunrise] = React.useState(undefined);
  const [margarita, setMargarita] = React.useState(undefined);
  const [longIsland, setLongIsland] = React.useState(undefined);
  const [vampiro, setVampiro] = React.useState(undefined);
  
  React.useEffect(() => {
    async function fetchTequilaSunrise() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13621");
      const data = await resp.json();
      setTequilaSunrise(data);
    }
    fetchTequilaSunrise();
  }, []);

  React.useEffect(() => {
    async function fetchMargarita() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007");
      const data = await resp.json();
      setMargarita(data);
    }
    fetchMargarita();
  }, []);

  React.useEffect(() => {
    async function fetchLongIsland() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17204");
      const data = await resp.json();
      setLongIsland(data);
    }
    fetchLongIsland();
  }, []);

  React.useEffect(() => {
    async function fetchVampiro() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17217");
      const data = await resp.json();
      setVampiro(data);
    }
    fetchVampiro();
  }, []);


  return (
    <main>
      <div className="container">
        <div className="cocktails">
          {tequilaSunrise ? (
            <Cocktail
              id={tequilaSunrise.drinks[0].idDrink}
              name={tequilaSunrise.drinks[0].strDrink}
              images={tequilaSunrise.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading Tequila Sunrise...</p>
          )}
          {margarita ? (
            <Cocktail
              id={margarita.drinks[0].idDrink}
              name={margarita.drinks[0].strDrink}
              images={margarita.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading Margarita...</p>
          )}
          {longIsland ? (
            <Cocktail
              id={longIsland.drinks[0].idDrink}
              name={longIsland.drinks[0].strDrink}
              images={longIsland.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading Long Island Ice Tea...</p>
          )}
          {vampiro ? (
            <Cocktail
              id={vampiro.drinks[0].idDrink}
              name={vampiro.drinks[0].strDrink}
              images={vampiro.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading Vampiro...</p>
          )}
        </div>
      </div>
    </main>
  );
  
}

export default TequilaCocktails;