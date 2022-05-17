import React, { useState } from "react"
import { Wheel } from "react-custom-roulette"

const data = [
  { option: "Gimlet", style: { backgroundColor: "#b5838d" } },
  { option: "Pure Passion", style: { backgroundColor: "#e5989b" } },
  { option: "Moscow Mule", style: { backgroundColor: "#ffb4a2" } },
  { option: "Tequila Sunrise", style: { backgroundColor: "#ffcdb2" } },
  { option: "Margarita", style: { backgroundColor: "#b5838d" } },
  { option: "Espresso Martini", style: { backgroundColor: "#e5989b" } },
  { option: "Vampiro", style: { backgroundColor: "#ffb4a2" } },
  { option: "Zombie", style: { backgroundColor: "#ffcdb2" } },
  { option: "Sex on the Beach", style: { backgroundColor: "#b5838d" } },
  { option: "Negroni", style: { backgroundColor: "#e5989b" } },
  { option: "Bramble", style: { backgroundColor: "#ffb4a2" } },
  { option: "Dark and Stormy", style: { backgroundColor: "#ffcdb2" } },
  { option: "Cosmopolitan", style: { backgroundColor: "#b5838d" } },
  { option: "Dry Martini", style: { backgroundColor: "#e5989b" } },
  { option: "Long Island Iced Tea", style: { backgroundColor: "#ffb4a2" } },
  { option: "Spice 75", style: { backgroundColor: "#ffcdb2" } }
]

// eslint-disable-next-line react/display-name
export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeCocktail, setPrizeCocktail] = useState(0);

  const handleSpinClick = () => {
    const newPrizeCocktail = Math.floor(Math.random() * data.length)
    setPrizeCocktail(newPrizeCocktail)
    setMustSpin(true)
  }
  

  return (
    <main>
      <section className="section">
        <div className="container">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeCocktail}
            data={data}
            outerBorderColor={"#6d6875"}
            radiusLineColor={"#6d6875"}
            outerBorderWidth={3}
            innerBorderWidth={2}
            innerRadius={6}
            fontSize={15}
            spinDuration={.5}
            textColors={["#ffffff"]}

            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
          <button onClick={handleSpinClick} className="button is-danger is-light">SPIN ME!</button>
        </div>
      </section>
    </main>
  )
}