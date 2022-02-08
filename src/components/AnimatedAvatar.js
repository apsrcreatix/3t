import React from "react";
import { square_style } from "../game-config";

export default function AnimatedAvatar({ value, isWinningBlock }) {
  return (
    <span
      key={value.avatar}
      className={
        isWinningBlock
          ? `animate__animated ${value && value.animation} animate__infinite`
          : `animate__animated animate__bounceIn animate__fast`
      }
      style={{ fontSize: square_style.height / 4 }}
    >
      {value && value.avatar}
    </span>
  );
}
