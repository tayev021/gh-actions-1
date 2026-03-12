import { divide, factorial, sum } from './math';

describe('Testing maths functions', () => {
  describe('Testing sum function', () => {
    test('sum(1, 2)', () => {
      expect(sum(1, 2)).toBe(3);
    });
    test('sum(1, -2)', () => {
      expect(sum(1, -2)).toBe(-1);
    });
    test('sum(-1, -2)', () => {
      expect(sum(-1, -2)).toBe(-3);
    });
  });

  describe('Testing divide function', () => {
    test('divide(4, 2)', () => {
      expect(divide(4, 2)).toBe(2);
    });
    test('divide(-4, 2)', () => {
      expect(divide(-4, 2)).toBe(-2);
    });
    test('divide(3, 2)', () => {
      expect(divide(3, 2)).toBe(1.5);
    });
  });

  describe('Testing factorial function', () => {
    test('factorial(0)', () => {
      expect(factorial(0)).toBe(1);
    });
    test('factorial(1)', () => {
      expect(factorial(1)).toBe(1);
    });
    test('factorial(4)', () => {
      expect(factorial(4)).toBe(24);
    });
  });
});
