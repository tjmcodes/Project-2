/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Link } from "react-router-dom";
// import { useWindowSize } from "react-use"
// import Confetti from "react-confetti";
import PartyCocktail from "./PartyCocktail";

const data = [
  { id: 1, option: "Gin", style: { backgroundColor: "#bde0fe" } },
  { id: 2, option: "Tequila", style: { backgroundColor: "#ffc8dd" } },
  { id: 3, option: "Vodka", style: { backgroundColor: "#cdb4db" } },
  { id: 4, option: "Rum", style: { backgroundColor: "#fcf6bd" } }
];

// eslint-disable-next-line react/display-name
export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [initialState, setInitialState] = useState(true);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setInitialState(false);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <main>
      <section className="section">
        {!initialState && !mustSpin ? <PartyCocktail /> : ""}
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
              spinDuration={0.4}
              textColors={["#6d6875"]}
              onStopSpinning={() => {
                setMustSpin(false);
              }}
            />
          </div>
          <hr />

          <div className="container">
            <button
              onClick={handleSpinClick}
              className="button is-danger is-light"
            >
              SPIN ME!
            </button>
            <hr />
            <h3>Your random alcohol is:</h3>
            <h3 className="result">
              {!initialState && !mustSpin ? data[prizeNumber].option : " "}
            </h3>
          </div>
          <br />
          <button className="button is-danger is-light">
            <Link
              to={`/modal/cocktail/${data[prizeNumber].option}`}
              style={{ textDecoration: "none" }}
            >
              Your Random Recipe!
            </Link>
          </button>
          <hr />
        </div>
      </section>
    </main>
  );
};
