/**
 * Array Utilities
*/

/**
 * Generates a sequence of numbers. In case min is larger than
 * max, then empty the array is returned.
 * 
 * @param {number} min Lower bound of the sequence
 * @param {number} max High bound of the sequence  
 */
export const seq = (min = 0, max = 0) => {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

/**
 * Randomizes an array element order in-place using 
 * Durstenfeld shuffle algorithm.
 * 
 * Referenced here: https://stackoverflow.com/a/12646864
 * 
 * @param {array} array An array
 */
export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

/**
 * Returns a 2d empty (zero) array with the specified dimensions.
 * 
 * @param {number} rows Number of rows
 * @param {number} cols Number of columns
 */
export const empty_2d_array = (rows, cols = rows) => {
    rows = Math.max(0, rows);
    cols = Math.max(0, cols);
    return new Array(rows).fill(0)
        .map(() => new Array(cols).fill(0));
}

/**
 * Reshapes an 1d array to a 2d array. If the reshape is not possible,
 * it returns an empty array.
 * 
 * @param {Array} array A 1d array
 * @param {Array} dim Dimension of the 2d array
 */
export const to_2d_array = (array, rows, cols = rows) => {
    rows = Math.max(0, rows);
    cols = Math.max(0, cols);

    if (rows === 0 || cols === 0 || rows * cols != array.length)
        return []

    let copy = array.slice(0);
    let results = [];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            let i = r * cols + c;
            if (i < copy.length) {
                row.push(copy[i]);
            }
        }
        results.push(row);
    }

    return results;
}

/**
 * Brute-forces the number of inversions in an array.
 * 
 * PS: It's possible to use mergesort and clever code to count faster.
 * 
 * @param {Array} array An 1d array
*/
export const count_inversions = (array1d) => {
    let invCount = 0;
    for (let i = 0; i < array1d.length - 1; i++) {
        for (let j = i + 1; j < array1d.length; j++) {
            if (array1d[i] && array1d[j] && array1d[i] > array1d[j]) invCount++;
        }
    }
    return invCount;
}
