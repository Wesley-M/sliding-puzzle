import { expect, test } from 'vitest';
import { count_inversions, seq } from './array';
import { get_blank_pos, in_correct_position, is_solved, move, new_board } from './game'
import { is_even, is_odd } from './number';

const get_random_el = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

test('[SUCCESS] Move board', () => {
    const board = [
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ];

    move(board, "down");

    expect(board).toStrictEqual([
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 0],
        [13, 14, 15, 12]
    ]);

    move(board, "right");

    expect(board).toStrictEqual([
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 0, 11],
        [13, 14, 15, 12]
    ]);

    move(board, "up");

    expect(board).toStrictEqual([
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 15, 11],
        [13, 14, 0, 12]
    ]);

    move(board, "left");

    expect(board).toStrictEqual([
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 15, 11],
        [13, 14, 12, 0]
    ]);
});

test('[LEFT COLLISION] Move board', () => {
    const board = [
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ];

    move(board, "left");

    expect(board).toStrictEqual([
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ]);
});

test('[UP COLLISION] Move board', () => {
    const board = [
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ];

    move(board, "up");

    expect(board).toStrictEqual([
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ]);
});

test('[RIGHT COLLISION] Move board', () => {
    const board = [
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ];

    move(board, "right");
    move(board, "right");
    move(board, "right");
    move(board, "right");
    move(board, "right");

    expect(board).toStrictEqual([
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 12],
        [0, 13, 14, 15]
    ]);
});

test('[DOWN COLLISION] Move board', () => {
    const board = [
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ];

    move(board, "down");
    move(board, "down");
    move(board, "down");
    move(board, "down");
    move(board, "down");

    expect(board).toStrictEqual([
        [1, 2, 3, 0],
        [5, 6, 8, 4],
        [9, 10, 11, 7],
        [13, 14, 15, 12]
    ]);
});

test('[ROW] Get blank position', () => {
    expect(get_blank_pos([
        [1, 2, 3],
        [1, 2, 3],
        [3, 2, 0]
    ].flat()).row).toBe(2);

    expect(get_blank_pos([
        [1, 2, 3],
        [1, 0, 3],
        [3, 2, 2]
    ].flat()).row).toBe(1);

    expect(get_blank_pos([
        [0, 2, 3],
        [1, 2, 3],
        [3, 2, 2]
    ].flat()).row).toBe(0);

    expect(get_blank_pos([
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [3, 2, 2, 4],
        [4, 3, 2, 0]
    ].flat()).row).toBe(3);

    expect(get_blank_pos([
        [0]
    ].flat()).row).toBe(0);
});

test('[COLUMN] Get blank position', () => {
    expect(get_blank_pos([
        [1, 2, 3],
        [0, 2, 3],
        [3, 2, 3]
    ].flat()).col).toBe(0);

    expect(get_blank_pos([
        [1, 2, 3],
        [1, 1, 3],
        [3, 0, 2]
    ].flat()).col).toBe(1);

    expect(get_blank_pos([
        [1, 2, 0],
        [1, 2, 3],
        [3, 2, 2]
    ].flat()).col).toBe(2);

    expect(get_blank_pos([
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [3, 1, 0, 4],
        [4, 3, 2, 1]
    ].flat()).col).toBe(2);

    expect(get_blank_pos([
        [0]
    ].flat()).col).toBe(0);
});

test('New board is solvable', () => {
    const odd = [3, 5, 7, 9]
    const even = [4, 6, 8, 10]

    // In case of n odd, the number of inversions must be even.
    for (const i of seq(1, 100)) {
        const n = get_random_el(odd);
        const flat_board = new_board(n).flat();
        expect(flat_board.length).toBe(n * n);
        expect(is_even(count_inversions(flat_board))).toBe(true);
    }

    // In case of n even, the number of inversions plus the row 
    // with the blank must be ODD.
    for (const i of seq(1, 100)) {
        const n = get_random_el(even);
        const flat_board = new_board(n).flat();
        expect(flat_board.length).toBe(n * n);
        expect(is_odd(
            count_inversions(flat_board) + get_blank_pos(flat_board).row
        )).toBe(true);
    }
});

test('Board has been solved', () => {
    expect(is_solved([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
    ])).toBe(true);

    expect(is_solved([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ])).toBe(true);

    expect(is_solved([
        [1, 2, 3, 4],
        [5, 6, 8, 7],
        [9, 10, 11, 12],
        [13, 14, 15, 0]
    ])).toBe(false);
});

test('Piece is in correct position', () => {
    const board = [
        [3, 2, 1],
        [6, 5, 4],
        [8, 7, 0]
    ]

    expect(in_correct_position(board, 3)).toBe(false);
    expect(in_correct_position(board, 2)).toBe(true);
    expect(in_correct_position(board, 1)).toBe(false);
    expect(in_correct_position(board, 5)).toBe(true);
    expect(in_correct_position(board, 7)).toBe(false);

    expect(in_correct_position(board, 0)).toBe(true);
});