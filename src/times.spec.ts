
import { times } from './times';

test('should return the multiplication of two numbers', () => {
    const result = times(3, 3);
    expect(result).toEqual(9);
});