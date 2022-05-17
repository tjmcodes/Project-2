import React, { useState } from "react"
import { Wheel } from "react-custom-roulette"
import { Link } from "react-router-dom"

const data = [
  { id: 1, option: "Gin", style: { backgroundColor: "#bde0fe", fontSize: 100 } },
  { id: 2, option: "Tequila", style: { backgroundColor: "#ffc8dd" } },
  { id: 3, option: "Vodka", style: { backgroundColor: "#cdb4db" } },
  { id: 4, option: "Rum", style: { backgroundColor: "#fcf6bd" } }
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
          <h1>Too much to choose from?</h1>
          <h3>Why not play a game of cocktail roulette to help!</h3>
          <br />
          <div className="wheel">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              outerBorderColor={"#d0f4de"}
              radiusLineColor={"#d0f4de"}
              outerBorderWidth={5}
              innerBorderWidth={2}
              innerRadius={10}
              innerBorderColor={"#d0f4de"}
              fontSize={30}
              spinDuration={.4}
              textColors={["#6d6875"]}

              onStopSpinning={() => {
                setMustSpin(false);
              }}
            />
          </div>
          <hr />
          <div className="container">
            <button onClick={handleSpinClick} className="button is-danger is-light">SPIN ME!</button>
            <hr />
            <h3>Your random alcohol is:</h3>
            {!mustSpin ? data[prizeNumber].option : " "}
          </div>
          <br />
          <button className="button is-danger is-light"><Link to={`/modal/cocktail/${data[prizeNumber].option}`}>
            Your Random Recipe!
          </Link></button>
          <hr />
        </div>
      </section>
    </main>
  )
}