import React from "react"
import { useWindowSize } from "react-use"
import Confetti from "react-confetti"

// eslint-disable-next-line react/display-name
export default () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
      gravity={0.2}
    />
  )
}