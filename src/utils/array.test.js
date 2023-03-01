import { expect, test } from 'vitest';
import { to_2d_array, empty_2d_array, seq, count_inversions } from './array'

test('Sequence', () => {
  expect(seq(1, 4)).toStrictEqual([1, 2, 3, 4]);
  expect(seq(0, 0)).toStrictEqual([0]);
  expect(seq(3, 2)).toStrictEqual([]);
  expect(seq()).toStrictEqual([0]);
});

test('Empty 2d array', () => {
  expect(empty_2d_array(2)).toStrictEqual([[0, 0], [0, 0]]);
  expect(empty_2d_array(2, 3)).toStrictEqual([[0, 0, 0], [0, 0, 0]]);
  expect(empty_2d_array(3, 2)).toStrictEqual([[0, 0], [0, 0], [0, 0]]);
  expect(empty_2d_array(0)).toStrictEqual([]);
  expect(empty_2d_array(-1)).toStrictEqual([]);
});

test('To 2d array', () => {
  // General success cases
  expect(to_2d_array([1, 2, 3], 1, 3)).toStrictEqual([[1, 2, 3]]);
  expect(to_2d_array([1, 2, 3], 3, 1)).toStrictEqual([[1], [2], [3]]);
  expect(to_2d_array([1, 2, 3, 4], 2)).toStrictEqual([[1, 2], [3, 4]]);

  // Failed cases
  expect(to_2d_array([1, 2, 3, 4], 3)).toStrictEqual([]);
  expect(to_2d_array([1, 2, 3, 4], 2, 3)).toStrictEqual([]);
});

test('Count inversions', () => {
  // General success cases
  expect(count_inversions([6, 3, 5, 2, 7])).toStrictEqual(5);
  expect(count_inversions([3, 2, 1])).toStrictEqual(3);
  expect(count_inversions([3, 2])).toStrictEqual(1);
  expect(count_inversions([2])).toStrictEqual(0);

  // Failed cases
  expect(count_inversions([])).toStrictEqual(0);
});