import {
  INIT_BOARD,
  INIT_MATRIX,
  FIND_EMPTY,
  FIND_PRESSED,
  AVAILABLE,
  CHECK_BOARD,
  INIT_SAVED_BOARD,
} from '../actionTypes/boardAT';

// while (board.length < 15) {
//   const num = Math.floor(Math.random() * 16);
//   if (!board.includes(num)) board.push(num);
// }

// const board = new Array(16).fill(0).map((x, index) => index).sort(() => Math.random() - 0.5);

// Создание случайного порядка
const board = [];
for (let i = 0; i < 16; i++) {
  function randomNum() {
    const num = Math.floor(Math.random() * 16);
    if (!board.includes(num)) return num;
    return randomNum();
  }
  board.push(randomNum());
}

// Создание матрицы
const matrix = [];
for (let j = 0; j < 16; j += 4) {
  let tempArr = [board[j], board[j + 1], board[j + 2], board[j + 3]];
  matrix.push(tempArr);
}

const initialState = { board, matrix, solved: false, moves: 0 };

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SAVED_BOARD: {
      const { game_board, game_moves } = action.payload;
      const board = game_board.split('_').map((el) => +el);

      const matrix = [];
      for (let j = 0; j < 16; j += 4) {
        let tempArr = [board[j], board[j + 1], board[j + 2], board[j + 3]];
        matrix.push(tempArr);
      }

      return { ...state, board, matrix, moves: game_moves };
    }

    case INIT_BOARD: {
      return { ...state };
    }

    case FIND_EMPTY: {
      // Поиск пустой ячейки
      const empty = [];
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (state.matrix[i][j] === 0) {
            empty.push(i, j);
          }
        }
      }
      return { ...state, empty };
    }

    case FIND_PRESSED: {
      // Поиск нажатой ячейки
      const pressed = [];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (state.matrix[i][j] === action.payload) {
            pressed.push(i, j);
          }
        }
      }

      // Проверка на валидность
      const [pressedX, pressedY] = pressed;
      const [emptyX, emptyY] = state.empty;
      const availables = [
        [emptyX - 1, emptyY],
        [emptyX + 1, emptyY],
        [emptyX, emptyY - 1],
        [emptyX, emptyY + 1],
      ];

      // Смена позиций
      let newBoard = [];
      for (let i = 0; i < availables.length; i++) {
        const [tempX, tempY] = availables[i];

        if (tempX === pressedX && tempY === pressedY) {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              if (i === tempX && j === tempY) {
                state.matrix[emptyX][emptyY] = state.matrix[pressedX][pressedY];
                state.matrix[pressedX][pressedY] = 0;
                newBoard = state.matrix.flat();
                return { ...state, board: newBoard, moves: state.moves + 1 };
              }
            }
          }
        }
      }

      return { ...state };
    }

    case CHECK_BOARD: {
      const trueBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
      const board = state.board;

      let x = trueBoard.every((el, ind) => board[ind] === el);
      let y = board.every((el, ind) => trueBoard[ind] === el);

      if (x + y) return { ...state, solved: true };
      return { ...state, solved: false };
    }

    default:
      return state;
  }
};
