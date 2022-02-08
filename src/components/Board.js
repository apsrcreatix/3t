import * as React from "react";
import { board } from "../game-config";
import Square from "./Square";

export default function Board({ squares, onClick, winningSpace }) {
  return (
    <div>
      {board.map((row, index) => (
        <div key={`board-${index}`} className="is-flex">
          {row.map((blockNumber) => (
            <Square
              key={blockNumber}
              value={squares[blockNumber]}
              onClick={() => onClick(blockNumber)}
              isWinningBlock={winningSpace.includes(blockNumber)}
              index={blockNumber}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
