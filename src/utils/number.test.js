import { expect, test } from 'vitest';
import { is_even, is_odd } from './number'

test('Even numbers', () => {
    expect(is_even(0)).toBe(true);
    expect(is_even(1)).toBe(false);
    expect(is_even(2)).toBe(true);
    expect(is_even(3)).toBe(false);
});

test('Odd numbers', () => {
    expect(is_odd(0)).toBe(false);
    expect(is_odd(1)).toBe(true);
    expect(is_odd(2)).toBe(false);
    expect(is_odd(3)).toBe(true);
});