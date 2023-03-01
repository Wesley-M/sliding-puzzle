/**
 * Number Utilities
*/

/**
 * Modulus with least positive residue.
 * 
 * It behaves different when used with negative numbers.
*/
export const mod = (n, m) => {
    return ((n % m) + m) % m;
}

/**
 * Returns true if number is even.
 * 
 * @param {number} n A natural number
*/
export const is_even = (n) => mod(n, 2) === 0;

/**
 * Returns true if number is odd.
 * 
 * @param {number} n A natural number
*/
export const is_odd = (n) => mod(n, 2) !== 0;