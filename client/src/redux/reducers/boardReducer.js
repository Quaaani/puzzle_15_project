import {
  INIT_BOARD,
  INIT_MATRIX,
  FIND_EMPTY,
  FIND_PRESSED,
  AVAILABLE,
} from '../actionTypes/boardAT';

const board = [];

for (let i = 0; i < 16; i++) {
  function randomNum() {
    const num = Math.floor(Math.random() * 16);
    if (!board.includes(num)) return num;
    return randomNum();
  }
  board.push(randomNum());
}

// while (board.length < 15) {
//   const num = Math.floor(Math.random() * 16);
//   if (!board.includes(num)) board.push(num);
// }

// const board = new Array(16).fill(0).map((x, index) => index).sort(() => Math.random() - 0.5);

const initialState = { board };

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_BOARD:
      return initialState;

    case INIT_MATRIX: {
      const temp = [];

      for (let j = 0; j < 16; j += 4) {
        let tempArr = [board[j], board[j + 1], board[j + 2], board[j + 3]];
        temp.push(tempArr);
      }

      return { ...state, matrix: temp };
    }

    case FIND_EMPTY: {
      const temp = [];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (state.matrix[i][j] === 0) {
            temp.push(i, j);
          }
        }
      }

      return { ...state, empty: temp };
    }

    case FIND_PRESSED: {
      const temp = [];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (state.matrix[i][j] === action.payload) {
            temp.push(i, j);
          }
        }
      }

      return { ...state, pressed: temp };
    }

    case AVAILABLE: {
      let bool = false;
      const [eA, eB] = state.empty;
      const [a, b] = action.payload;
      const res = [
        [eA - 1, eB],
        [eA + 1, eB],
        [eA, eB - 1],
        [eA, eB + 1],
      ];

      let result = []

      res.forEach((el, ind) => {
        const [a, b] = el;
        const [c, d] = action.payload;
        

        if (a === c && b === d) {
          bool = true;
          const [x, y] = el;
          const [eX, eY] = state.empty;

          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              if (i === x && j === y) {
                console.log('value default =>', state.matrix[eX][eY]);
                console.log('value pressed =>', state.matrix[x][y]);
                state.matrix[eX][eY] = state.matrix[x][y];
                state.matrix[x][y] = 0;
                result = state.matrix.flat()
                console.log('board =>', state.board)
                console.log('res =>', res)
              }
            }
          }
        }
      });

      console.log('FINALL =>', result)

      return { ...state, board: result }
    }

    default:
      return state;
  }
};
