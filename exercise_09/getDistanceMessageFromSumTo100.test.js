import { describe, test, expect } from 'vitest';
import { getDistanceMessageFromSumTo100 } from './getDistanceMessageFromSumTo100';

describe('getDistanceMessageFromSumTo100', () => {
    test('should throw a TypeError if the input is not a number', () => {
        // Arrange
        const invalidInputs = ['string', {}, [], null, undefined];

        invalidInputs.forEach(input => {
            // Act Assert
            expect(() => getDistanceMessageFromSumTo100(input)).toThrow(TypeError);
        });
    });

    test('should return a message indicating the sum exceeds 100', () => {
        // Arrange
        const value = 90;

        // Act
        const result = getDistanceMessageFromSumTo100(value);

        // Assert
        expect(result).toMatch(/Sum with value \d+ exceeds in \d+ from number 100/);
    });

    test('should return a message indicating the sum is left from 100', () => {
        // Arrange
        const value = 10;

        // Act
        const result = getDistanceMessageFromSumTo100(value);

        // Assert
        expect(result).toMatch(/Sum with value \d+ is left in \d+ from number 100/);
    });
});
