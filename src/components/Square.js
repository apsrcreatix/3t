import * as React from "react";
import { square_style } from "../game-config";
import AnimatedAvatar from "./AnimatedAvatar";

export default function Square({ value, onClick, isWinningBlock, index }) {
  const board_color = isWinningBlock
    ? "is-success is-light"
    : value.theme
    ? value.theme
    : "";
  return (
    <button
      className={`is-flex is-large m-0 is-justify-content-center is-align-content-center button ${board_color} `}
      onClick={onClick}
      style={{
        ...square_style,
        borderLeft: index % 3 !== 0 ? "5px solid gray" : "none",
        borderBottom: index <= 5 ? "5px solid gray" : "none",
        borderRadius: "0px",
        borderTopWidth: "0px",
        borderRightWidth: "0px",
        writingMode: "horizontal-tb",
      }}
      aria-label={`clickable block number ${index + 1}`}
    >
      <AnimatedAvatar value={value} isWinningBlock={isWinningBlock} />
    </button>
  );
}
