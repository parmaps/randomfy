import { add, subtract } from '../src/tests/tests';

describe('Math functions', () => {
  test('add should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('subtract should correctly subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(-1, -1)).toBe(0);
    expect(subtract(0, 0)).toBe(0);
  });
});