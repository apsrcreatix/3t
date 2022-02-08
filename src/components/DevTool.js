import React from "react";
// only when you want to understand the game step by step
// can be used for making recap of game
const DevHelper = ({ history, setGameState }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const jumpTo = (step) => {
    setGameState((prevGameState) => ({
      ...prevGameState,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    }));
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <div className="is-block" key={move}>
        <button className="button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </div>
    );
  });
  return (
    <div>
      <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setModalOpen(false)}
        ></div>
        <div className="modal-content p-4">
          <div>
            <ol>{moves}</ol>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModalOpen(false)}
        ></button>
      </div>
      <button className="button is-info" onClick={() => setModalOpen(true)}>
        Dev Tools
      </button>
    </div>
  );
};

export default DevHelper;
