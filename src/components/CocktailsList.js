import React from "react"
import Cocktail from "./Cocktail"
import GinCocktails from "./GinCocktails"
import RumCocktails from "./RumCocktails"
import VodkaCocktails from "./VodkaCocktails"

function CocktailsList() {
 
  return <div className="Container">
    <h1>Gin</h1>
    <GinCocktails />
    <h1>Rum</h1>
    <RumCocktails />
    <h1>Vodka</h1>
    <VodkaCocktails />
      
  </div>

}

// function CocktailsList() {

//   const [cocktails, setCocktails] = React.useState(undefined)
//   const [selectedOptions, setSelectedOptions] = React.useState("All")

//   React.useEffect(() => {
//     async function fetchCocktails() {
//       const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
//       const data = await resp.json()
    
//       console.log(data)
//       setCocktails(data)
//     }
//     fetchCocktails()
//   }, []
//   )

//   function handleSelectedOption(e) {
//     setSelectedOptions(e.target.value)
//   }
//   console.log("this is", selectedOptions)

//   function filterCocktails() {
//     return cocktails.drinks.filter((drink) => {
//       return drink.ingredients === selectedOptions || selectedOptions === "All"
//     })
//   }
  


//   return <main>
//     <h1> 🍸 Cocktail Party App 🍸 </h1>
    
//     <div className="container">
//       <select onChange={handleSelectedOption}>
//         <option>All</option>
//         <option>Gin</option>
//         <option>Rum</option>
//         <option>Wine</option>
//         <option>Vodka</option>
//       </select>
      
//       <input placeholder="Search..." />
//     </div>
//     <div className="container">
//       <div className="cocktails">

//         {cocktails ?
//           filterCocktails().map((cocktail) => {
//             (console.log("yum", cocktail))
//             return <Cocktail
//               key={cocktail.idDrink}
//               // id={cocktail.idDrink}
//               name={cocktail.strDrink}
//               images={cocktail.strDrinkThumb} 
//               ingredients={cocktail.ingredients}
//             />

//           }) : <p>Loading cocktails...</p>

//         }
//       </div>
//     </div>


//   </main>

// }

export default CocktailsList