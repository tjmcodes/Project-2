import React, { useState } from "react"
import { Wheel, Link } from "react-custom-roulette"

const data = [
  { id: 1, option: "Gin", style: { backgroundColor: "#b5838d" } },
  { id: 2, option: "Tequila", style: { backgroundColor: "#e5989b" } },
  { id: 3, option: "Vodka", style: { backgroundColor: "#ffb4a2" } },
  { id: 4, option: "Rum", style: { backgroundColor: "#ffcdb2" } }
]

// eslint-disable-next-line react/display-name
export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }
  

  return (
    <main>
      <section className="section">
        <div className="container">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
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
          {mustSpin ? data[prizeNumber].option : "0"}
          <Link to={`/modal/cocktail/${data[prizeNumber].option}`}>
            Go to recipe
          </Link>
          <hr />
        </div>
      </section>
    </main>
  )
}