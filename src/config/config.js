// Number of pieces on the side of the board
export const BOARD_SIDE = 4;

// Total number of pieces
export const BOARD_PIECES = BOARD_SIDE * BOARD_SIDE + 1;

// Mapping from keycode to action
export const KEYCODE_TO_ACTION = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
}

// Mapping from events of hammer.js to action
export const HAMMER_TO_ACTION = {
    "swipeleft": "left",
    "swiperight": "right",
    "swipeup": "up",
    "swipedown": "down"
};