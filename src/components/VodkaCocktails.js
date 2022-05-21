import React from "react";
import Cocktail from "./Cocktail";

function VodkaCocktails() {
  const [moscowMule, setMoscowMule] = React.useState(undefined);
  const [espressoMartini, setEspressoMartini] = React.useState(undefined);
  const [cosmo, setCosmo] = React.useState(undefined);
  const [sexonthebeach, setSexonthebeach] = React.useState(undefined);
  
  React.useEffect(() => {
    async function fetchCocktails() {
      const resp = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11009"
      );
      const data = await resp.json();
      setMoscowMule(data);
    }
    fetchCocktails();
  }, []);

  React.useEffect(() => {
    async function fetchCocktails() {
      const resp = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17212");
      const data = await resp.json();
      setEspressoMartini(data);
    }
    fetchCocktails();
  }, []);

  React.useEffect(() => {
    async function fetchCocktails() {
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17196");
      const data = await resp.json();
      setCosmo(data);
    }
    fetchCocktails();
  }, []);

  React.useEffect(() => {
    async function fetchCocktails() {
      const resp = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12754"
      );
      const data = await resp.json();
      setSexonthebeach(data);
    }
    fetchCocktails();
  }, []);


  return (
    <main>
      <div className="container">
        <div className="cocktails">
          {moscowMule ? (
            <Cocktail
              id={moscowMule.drinks[0].idDrink}
              name={moscowMule.drinks[0].strDrink}
              images={moscowMule.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading cocktails...</p>
          )}
          {espressoMartini ? (
            <Cocktail
              id={espressoMartini.drinks[0].idDrink}
              name={espressoMartini.drinks[0].strDrink}
              images={espressoMartini.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading cocktails...</p>
          )}
          {cosmo ? (
            <Cocktail
              id={cosmo.drinks[0].idDrink}
              name={cosmo.drinks[0].strDrink}
              images={cosmo.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading cocktails...</p>
          )}
          {sexonthebeach ? (
            <Cocktail
              id={sexonthebeach.drinks[0].idDrink}
              name={sexonthebeach.drinks[0].strDrink}
              images={sexonthebeach.drinks[0].strDrinkThumb}
            />
          ) : (
            <p>Loading cocktails...</p>
          )}
        </div>
      </div>
    </main>
  );
  
}

export default VodkaCocktails;
