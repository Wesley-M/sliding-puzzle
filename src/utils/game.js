import {is_even, is_odd, mod} from './number'
import {count_inversions, to_2d_array, shuffle, seq} from './array'
import { KEYCODE_TO_ACTION } from '../config/config'

/**
 * Game Utilities
*/

export const keyboard_move = (board, e) => {
    return move(board, KEYCODE_TO_ACTION[e.keyCode]);
}

export const tap_move = (board, piece) => {
    const blank_pos = get_blank_pos(board.flat());

    const get_piece = (pos) => {
        return is_valid_pos(board, pos.row, pos.col) ? board[pos.row][pos.col] : null;
    }

    // Mapping between the piece at the direction and
    // the move direction
    const piece_dir = {
        [get_piece({...blank_pos, col: blank_pos.col - 1})]: "right",
        [get_piece({ ...blank_pos, col: blank_pos.col + 1})]: "left",
        [get_piece({ ...blank_pos, row: blank_pos.row - 1})]: "down",
        [get_piece({ ...blank_pos, row: blank_pos.row + 1})]: "up"
    }

    if (piece_dir[piece]) {
        move(board, piece_dir[piece]);
    }
}

/**
 * Moves a key over the blank space
 *  
 * @param {Array<Array<number>>} board The board
 * @param {number} The direction of the movement over the blank space
*/
export const move = (board, dir) => {
    const blank_pos = get_blank_pos(board.flat())
    let moved = false;

    switch(dir.toUpperCase()) {
        case "UP":
            moved = swap_pieces(board, blank_pos, { ...blank_pos, row: blank_pos.row + 1 })
            break;
        case "DOWN":
            moved = swap_pieces(board, blank_pos, { ...blank_pos, row: blank_pos.row - 1 })
            break;
        case "LEFT":
            moved = swap_pieces(board, blank_pos, { ...blank_pos, col: blank_pos.col + 1 })
            break;
        case "RIGHT":
            moved = swap_pieces(board, blank_pos, { ...blank_pos, col: blank_pos.col - 1 })
    }

    return moved;
}

/**
 * Returns a nxn solvable puzzle
 *  
 * @param {number} n The number of pieces at the side of the puzzle 
*/
export const new_board = (n) => {
    let pieces = [];
    
    do {
      pieces = shuffle(seq(0, n*n-1));
    } while (!is_solvable(pieces));

    console.log("---")
    console.table(to_2d_array(pieces, n))
    console.table(`N: ${n} \t INV: ${count_inversions(pieces)} \t BLK: ${get_blank_pos(pieces).row} `);
    console.log(is_even(n) ? `INV + BLK = ${count_inversions(pieces) + get_blank_pos(pieces).row} is odd.`  : '');

    return to_2d_array(pieces, n);
}

/**
 * In a sliding puzzle:
 *  1. When n is odd: It is solvable if and only if 
 *     its number of inversions is even;
 *  2. When n is even: It is solvable if and only if 
 *     the number of inversions plus the row of the 
 *     blank square (indexed at 0) is odd.
 * 
 * @param {Array<number>} flat_board A 1d array of numbers
*/
const is_solvable = (flat_board) => {
    const board_side = Math.sqrt(flat_board.length);
    const inversions = count_inversions(flat_board);

    if (is_odd(board_side)) {
        return is_even(inversions);
    }

    return is_odd(inversions + get_blank_pos(flat_board).row);
}

/**
 * Returns true if the board was solved
 *  
 * @param {Array<Array<number>>} board The board 
*/
export const is_solved = (board) => {
    const n = board.length;
    return JSON.stringify(board.flat()) === JSON.stringify([...seq(1, n*n-1), 0])
}

/**
 * Returns true if the piece is in the correct position.
 *  
 * @param {Array<Array<number>>} board The board
 * @param {number} piece The piece number
*/
export const in_correct_position = (board, piece) => {
    const flat_board = board.flat();
    return flat_board[mod(piece - 1, flat_board.length)] === piece;
}

/**
 * Returns the progress of the board (0 to 1)
 *
 * @param {Array<Array<number>>} board The board
 */
export const board_progress = (board) => {
    const n = board.length;

    const correct_pieces = seq(1, n*n-1)
      .reduce((acc, curr) => acc + in_correct_position(board, curr), 0)

    return (correct_pieces / (n*n-1)).toFixed(2);
}

/**
 * Get blank position (indexed by 0) 
*/
export const get_blank_pos = (flat_board) => {
    const board_side = Math.sqrt(flat_board.length);
    const blank_idx = flat_board.indexOf(0);

    return {
        row: Math.floor(blank_idx / board_side),
        col: blank_idx % board_side
    } 
}

/**
 * Returns true if a valid position on the board was passed.
*/
const is_valid_pos = (board, row, col) => {
    const valid_row = ( row >= 0 && row < board.length )
    const valid_col = ( col >= 0 && col < board[0].length )
    return valid_row && valid_col;
}

/**
 * Swaps two positions on the board.
*/
const swap_pieces = (board, fst_pos, sec_pos) => {
    const valid_fst_piece = is_valid_pos(board, fst_pos.row, fst_pos.col);
    const valid_sec_piece = is_valid_pos(board, sec_pos.row, sec_pos.col);

    let swapped = false;

    if (valid_fst_piece && valid_sec_piece) {
        const temp = board[fst_pos.row][fst_pos.col];
        board[fst_pos.row][fst_pos.col] = board[sec_pos.row][sec_pos.col];
        board[sec_pos.row][sec_pos.col] = temp;
        swapped = true;
    }

    return swapped;
}