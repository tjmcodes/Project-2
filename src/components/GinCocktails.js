import React from "react";
import Cocktail from "./Cocktail";

function GinCocktails() {
  const [bramble, setBramble] = React.useState(undefined);
  const [dryMartini, setDryMartini] = React.useState(undefined);
  const [gimlet, setGimlet] = React.useState(undefined);
  const [negroni, setNegroni] = React.useState(undefined);
  
  React.useEffect(() => {
    async function fetchBramble() {
      const resp = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=bramble"
      );
      const data = await resp.json();
      setBramble(data);
    }
    fetchBramble();
  }, []);

  React.useEffect(() => {
    async function fetchGimlet() {
      const resp = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gimlet");
      const data = await resp.json();
      setGimlet(data);
    }
    fetchGimlet();
  }, []);

  React.useEffect(() => {
    async function fetchNegroni() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni");
      const data = await resp.json();
      setNegroni(data);
    }
    fetchNegroni();
  }, []);

  React.useEffect(() => {
    async function fetchDryMartini() {
      const resp = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11005"
      );
      const data = await resp.json();
      setDryMartini(data);
    }
    fetchDryMartini();
  }, []);


  return (
    <main>
      <div className="container">
        <div className="cocktails">
          {bramble ? (
            <Cocktail
              id={bramble.drinks[0].idDrink}
              name={bramble.drinks[0].strDrink}
              images={bramble.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading cocktails...</p>
          )}
          {gimlet ? (
            <Cocktail
              id={gimlet.drinks[0].idDrink}
              name={gimlet.drinks[0].strDrink}
              images={gimlet.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading cocktails...</p>
          )}
          {negroni ? (
            <Cocktail
              id={negroni.drinks[0].idDrink}
              name={negroni.drinks[0].strDrink}
              images={negroni.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading cocktails...</p>
          )}
          {dryMartini ? (
            <Cocktail
              id={dryMartini.drinks[0].idDrink}
              name={dryMartini.drinks[0].strDrink}
              images={dryMartini.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading cocktails...</p>
          )}
        </div>
      </div>
    </main>
  );
  
}

export default GinCocktails;
