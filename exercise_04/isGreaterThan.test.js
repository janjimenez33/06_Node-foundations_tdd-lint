import { describe, test, expect } from 'vitest';
import { isGreaterThan } from './isGreaterThan';

describe('isGreaterThan', () => {
    test('should return true if the value is greater than the threshold', () => {
        // Arrange
        const value = 10;
        const threshold = 5;

        // Act
        const result = isGreaterThan(value, threshold);

        // Assert
        expect(result).toBe(true);
    });

    test('should return false if the value is not greater than the threshold', () => {
        // Arrange
        const value = 5;
        const threshold = 10;

        // Act
        const result = isGreaterThan(value, threshold);

        // Assert
        expect(result).toBe(false);
    });
});
