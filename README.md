
<div align="right">
 <h2>General Assembly - Software Engineering Immersive
 <img width=35px src="https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png" />
  </h2>
</div>

 
# Cocktail Party App 🍸

## Contents 
1. [Project Overview](#projectoverview)
2. [Planning](#planning)
3. [API](#api)
4. [Whiteboarding](#whiteboarding)
5. [Technologies used](#tech-used)
6. [Approach](#approach)
7. [Feature One - Random Cocktail Generator](#feature-one)
8. [Feature Two - Showing the Selected Random Drink](#feature-two)
9. [Feature Three - Likes](#feature-three)
10. [Individual Contributions](#individual)
11. [Wins](#wins)
12. [Challenges](#challenges)
13. [Bugs](#bugs)
14. [Future Improvements](#future-improvements)
15. [What have I learned?](#What-have-i-learned)
 
<div id='projectoverview'></div>

## Project Overview

The second project of the software engineering immersive course at GA London, was to **build a React application** that consumes a **public API**.  The project was to be completed **as a team of three** in just 48hrs over the course of the week.

### The App

Cocktail Party App is an app built with React and makes use of RESTful APIs that allows the user to search for cocktails based on a base ingredient (Rum, Vodka, Gin, Tequila). The app also features a random cocktail generator and a video modal that plays suggested YouTube playlist based on the base ingredient.


### DEMO of the App 
URL: https://main--ephemeral-salmiakki-7db874.netlify.app/

---

<div id='planning'></div>

## Planning

As a group we discussed some ideas for our app. We used Miro and Excalidraw to note ideas. 


Initially, we wanted to make a movie React app (inspied by Netflix). However, when researching public APIs we found it was problamatic and more often than not, a key was required. We instead took some time to research APIs that were more easily accessible and agreed to work on the Cocktail App. 

<div id='api'></div>

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

<div id='whiteboarding'></div>

## Whiteboarding

Once we were able to try out the different endpoints that we wanted to work with using insomnia, we went back to the drawing board in Excalidraw to decide on the user story and started wireframing. 

<div align="center">
 <a href="https://ibb.co/HYqpgsr"><img src="https://i.ibb.co/5vLxcy5/Project-2-Wireframe.png" alt="Project-2-Wireframe" border="0"></a>
</div>


<div id='tech-used'></div>

## Technolgies Used
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

**Productivity**
* Excalidraw
* Miro

---

<div id='approach'></div>

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

<div id='feature-one'></div>

## Feature One - Random Cocktail Generator

Random cocktail generator
**React useEffect for making multiple requests to the API as one async function**

``` javascript
React.useEffect(() => {
    async function fetchCocktail() {

First fetch:
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${base}`)
      const data = await resp.json()
      const random = data.drinks[Math.floor(Math.random() * data.drinks.length)] // had to store random as a variable (inner scope) in order to use for setCocktail state.
      setCocktail(random)

Second fetch:
      const resp2 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${random.idDrink}`) // this endpoint was able to use the id from the random variable (base ingredient)
      const data2 = await resp2.json()
      setRandomCocktail(data2)

    }
    fetchCocktail()

  }, [base, cocktailName]) 

```
<div align="center">
 <a href="https://ibb.co/RBQ67RB"><img src="https://i.ibb.co/YyfdbHy/Cocktail-App-Roulette.png" alt="Cocktail-App-Roulette" border="0"></a>
</div>

</br>
</nr>
 
<div id='feature-two'></div>

## Feature Two - Show Selected Random Drink Page 
 
 The JSX returns include the arrays of objects to be displayed as the recipe card for the selected random cocktail generator with ModalVideo components imported in JSX


```javascript
<p>{randomCocktail.drinks[0].strIngredient1}  <strong>{randomCocktail.drinks[0].strMeasure1}</strong></p>
```

and also includes the videoModal based on the base ingredient: 

``` javascript
<div className="modal-container">
                 {base === "Gin" && <GinModalVideo />}
                 {base === "Vodka" && <VodkaModalVideo />}
                 {base === "Rum" && <RumModalVideo />}
                 {base === "Tequila" && <TequilaModalVideo />}
               </div>
```

<div align="center">
 <a href="https://ibb.co/PQ9qqtk"><img src="https://i.ibb.co/WtPmmsC/Cocktail-App-Selected-random-drink.png" alt="Cocktail-App-Selected-random-drink" border="0"></a>
</div>


<div id='feature-three'></div>
 
## Feature Three - Likes 

Local storage = When passed a key name of `{cocktailId}`, this will return that key's value and add a count to that cocktail's ❤️ 

```js
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
```



<div id='individual'></div>
 
## Individual contribution

I was responsible for researching how to integrate the music element to the random cocktail generator. Initially, I looked to see if I could make requests to the Deezer api, however, it proved tricky when trying to integrate the API key as part of the app. So after spending time on this and maxing out requests quota, I abandoned this and decided to look at integrating modals and embedding YouTube playlists that would pop up on the screen when the user selects play. To simplify the process even more, I was able to install a library with npm where I could amend the properties and enter the urls in, to import into the jsx of the parent component. 

When clicking on a cocktail - include the video modal based on the base ingredients.


---
 
<div id='wins'></div>
 
## WINS: 
A highlight was to achieve the stretch goal of being able to display a random cocktail generator which added to the user experience. 
Being able to integrate the libraries by importing them into the parent component worked seamlessly. After that we started to explore other libraries that could enhance the user experience, such as the confetti library which gives a sense of celebration ocne that random drink has been selected.

Having spent some time on the styling, I spent a bit of time trying to make the app responsive, which was a stretch goal. Using the @mediaqueries and setting the min and max-width really helped to contain the card sizes for the different screen sizes. 

<div id='challenges'></div> 
 
## CHALLENGES:
Upon researching libraries, we struggled to implement the carousel library in time for the deadline as we could not seem to find one that suited the needs for what we were after. Had we had more time, we could have looked at amending some of the properties to customise further to suit our needs. 


<div id='bugs'></div>

## BUGS:
Once the app was deployed, we noticed that on the mobile app and using safari as a web browser, the roulette wheel does not work. We didn’t really have time to test the bugs but moving forward, I have learned to make time for this!

Implementing the 'likes' functionaility on the recipe card was scrapped for the deployment and presentation, due to it not displaying correctly. In future it would be good to debug this and include so that it is consistent with the ‘ShowCocktail’ page. 

<div id='future-improvements'></div>

## FUTURE IMPROVEMENTS:

- Functionality for users to access all their favourite cocktails that they have ‘liked’ and have it showing on a page for them to browse. 
- Enhanced filter and search functionality that allows users to select from a multiple choice form, stating what ingredients they currently have. 
- Enhanced music integration, using spotify widget for playlist or select karaoke mode and display karaoke YouTube videos to sing a long to whilst drinking the cocktail. 

<div id='what-did-i-learn'></div>

 
## WHAT DID I LEARN

First time working as a small dev group was a success. I believe that the tasks we set ourselves were clear and our goals were achievable, including most of the stretch goals we set ourselves. Everybody was able to contribute as a group equally and had individual contributions which enhanced the app. Productivity apps proved to be useful and allowed a way for team members to refer to when working outside of scheduled group sessions. 
I learned a lot from listening to my team members as I was able to see different perspectives and approaches to solving problems which enabled me to expand my troubleshooting toolset. I also learned the importance of tidying and styling as we code. Which admittedly, I did not really think it would take that much time to do but realised as there was more data being displayed on the page, inconsistencies started to show. I realise that there was a cut-off time for implementing stretch goals for extra functionalities and instead focused on the styling so that it would be presentable for deployment. 
 

---


## Authors

- [@Robsness23] (https://github.com/Robsness23)
- [@tjmcodes] (https://github.com/tjmcodes) 
- [@wodnjsd] (https://github.com/wodnjsd)


<!-- Stats -->
<div align='center'>
 <img height="150em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=tjmcodes&theme=vue-dark&custom_title=Languages&layout=compact">
 <img height="150em" src="https://github-readme-stats.vercel.app/api?username=tjmcodes&show_icons&theme=tokyonight">
</div>



 
