import { describe, test, expect } from 'vitest';
import { generateRandomNumberInRange } from './generateRandomNumberInRange';

describe('generateRandomNumberInRange', () => {
    test('should throw a TypeError if the input is not a number', () => {
        // Arrange
        const invalidInputs = ['string', {}, [], null, undefined];

        invalidInputs.forEach(input => {
            // Act & Assert
            expect(() => generateRandomNumberInRange(input)).toThrow(TypeError);
        });
    });

    test('should return a number between 0 and the limit - 1', () => {
        // Arrange
        const limit = 10;

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(limit);
    });

    test('should return an integer', () => {
        // Arrange
        const limit = 10;

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(Number.isInteger(result)).toBe(true);
    });
});
