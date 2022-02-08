//init state
export const init_game_state = {
  playerX: { avatar: "🦄", animation: "animate__wobble", theme: "has-background-danger-light" },
  playerO: { avatar: "👽", animation: "animate__heartBeat", theme: "has-background-info-light" },
  history: [
    {
      squares: Array(9).fill({ avatar: null, animation: null, theme: null }),
    },
  ],
  stepNumber: 0,
  xIsNext: true,
};

//logic for winnder calculation
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a].avatar !== null &&
      squares[a].avatar === squares[b].avatar &&
      squares[a].avatar === squares[c].avatar
    ) {
      return [squares[a], lines[i]];
    }
  }
  return null;
}

// for building board
export const board = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

// block size logic
const screen_height = window.screen.height;
const screen_width = window.screen.width;
let block_size;
if (screen_height < screen_width) {
  block_size = screen_height / 4.5;
} else {
  block_size = screen_width / 3.5;
}

export const square_style = {
  width: block_size,
  height: block_size,
};
