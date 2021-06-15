import { subtract } from './subtract';

test('should return the subtraction of two numbers', () => {
    const result = subtract(4, 4);
    expect(result).toEqual(0);
});