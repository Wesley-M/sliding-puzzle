// Number of pieces on the side of the board

// Board side in terms of number of pieces
export const BOARD_SIDE = 4;

// Inner width in em units
const INNER_WIDTH_EM = (window.innerWidth / 22);

// Board side in terms of em unit
export const BOARD_SIDE_EM = 18 > INNER_WIDTH_EM ? INNER_WIDTH_EM : 18;

// Lower bound on board side (pieces)
export const MIN_BOARD_SIDE = 3;

// High bound on board side (pieces)
export const MAX_BOARD_SIDE = 7;

// Font scaling factor for piece number
export const FONT_SCALING_FACTOR = 7;

// Mapping from keycode to action
export const KEYCODE_TO_ACTION = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
}