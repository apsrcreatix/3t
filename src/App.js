import * as React from "react";
import { calculateWinner, init_game_state } from "./game-config";
import AnimatedAvatar from "./components/AnimatedAvatar";
import Board from "./components/Board";

/**
 * 
 add  <DevHelper history={history} setGameState={setGameState} />
 it will help in understanding functioning
 * 
 */

const App = () => {
  const [{ playerX, playerO, history, stepNumber, xIsNext }, setGameState] =
    React.useState(() => init_game_state);

  //reset game state
  const resetGame = () => setGameState(init_game_state);

  //on clicking the blocks
  const handleClick = (pressed_index) => {
    // history related operation
    const _history = history.slice(0, stepNumber + 1);
    const _current = history[history.length - 1];
    const _squares = _current.squares.slice();

    //calculating if already won
    if (calculateWinner(_squares) || _squares[pressed_index].avatar) {
      return;
    }

    _squares[pressed_index] = xIsNext ? playerX : playerO;

    setGameState((prevState) => ({
      ...prevState,

      history: history.concat([
        {
          squares: _squares,
        },
      ]),
      stepNumber: _history.length,
      xIsNext: !xIsNext,
    }));
  };

  const currentSituation = history[stepNumber];
  const [winner, winningSpace] = calculateWinner(currentSituation.squares) || [
    null,
    [],
  ];

  const resetButton = (
    <button className="button is-warning is-light ml-auto" onClick={resetGame}>
      Replay
    </button>
  );

  return (
    <div
      className="is-flex is-justify-content-center is-align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div>
        <div className="is-flex my-4 level">
          <h1
            className="title is-flex is-justify-content-between"
            style={{ width: "100%" }}
          >
            {winner ? (
              <>
                <AnimatedAvatar value={winner} /> Won {resetButton}
              </>
            ) : stepNumber < 9 ? (
              <>
                <AnimatedAvatar value={xIsNext ? playerX : playerO} />
                's Turn <div>{""}</div>
              </>
            ) : (
              <>It's a draw 😭 {resetButton}</>
            )}
          </h1>
        </div>

        <div className="is-flex container">
          <Board
            squares={currentSituation.squares}
            onClick={(i) => handleClick(i)}
            winningSpace={winningSpace}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
