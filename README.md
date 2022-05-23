
### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly - Software Engineering Immersive
# Cocktail Party App 🍸
 

## Overview

The second project of the software engineering immersive course at GA London, was to **build a React application** that consumes a **public API**.  The project was to be completed **as a team of three** in just over **one week**.

### The App

Cocktail Party App is an app built with React and makes use of RESTful APIs that allows the user to search for cocktails based on a based ingredient (Rum, Vodka, Gin, Tequila). The app also features a random cocktail generator with selected youTube playlist to list to once you have made your cocktail. 

---

## DEMO of App 
URL: https://main--ephemeral-salmiakki-7db874.netlify.app/

---

## API Reference

#### Get cocktails

**API:** https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka
```  
  GET /api/i=name
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| name | `string` | **Required**. Name of base ingredient (Rum, Vodka, Gin, Tequila) |

#### Get more details of chosen cocktail

**API:** www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

```
  GET /api/i=${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch to show recipe and ingredients.|

---

## Approach

1. Grab all cockatils by base ingredients and show on a page. 
2. Create NavBar with 2 pages (All Cocktails, More info)
3. Separate components for each ingredient (Gin, Vodka, Tequila, Rum)
4. Create component for more information which shows the ingredients and recipe to create selected cocktail. 
5. Assign routes (react-routes-dom)
6. LocalStorage (save likes for favourite cocktails)
7. Library installed: Roulette wheel for random cocktail page
8. Library installed: VideoModal for youTube videos to appear for random drink selected
9. Create a ShowRandomCocktail page based on random drink selected (import components and props from Wheel and MusicVideo components)
10. Styling was done throughout the project. 

---

## Challenges

**Search bar functionality**

When clicking on a cocktail - include the video modal based on the base ingredients 


``` javascript
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

  }, [base, cocktailName])

```


The JSX returns includes the arrays of objects: 

``` javascript
<p>{randomCocktail.drinks[0].strIngredient1}  <strong>{randomCocktail.drinks[0].strMeasure1}</strong></p>
```

and also includes the videoModal based on base ingredient: 

``` javascript
<div className="modal-container">
                 {base === "Gin" && <GinModalVideo />}
                 {base === "Vodka" && <VodkaModalVideo />}
                 {base === "Rum" && <RumModalVideo />}
                 {base === "Tequila" && <TequilaModalVideo />}
               </div>
```



---




## Tech Stack
* HTML5
* JavaScript (ES6)
* Node.js
* GitHub
* React

**NPM Libraries**
* React-Router-DOM
* VideoModal - https://www.npmjs.com/package/react-modal-video
* Roulette - https://www.npmjs.com/package/react-custom-roulette
* Confetti - https://www.npmjs.com/package/react-confetti 

**Styling:**
* SASS
* Bulma

---


## Authors

- [@Robsness23] (https://github.com/Robsness23)
- [@tjmcodes] (https://github.com/tjmcodes) 
- [@wodnjsd] (https://github.com/wodnjsd)


