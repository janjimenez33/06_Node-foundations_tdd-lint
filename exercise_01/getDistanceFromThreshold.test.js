import { describe, test, expect } from 'vitest';
import { getDistanceFromThreshold } from './getDistanceFromThreshold';

describe('getDistanceFromThreshold', () => {
    test('should return the correct distance when value is greater than threshold', () => {
        // Arrange
        const value = 10;
        const threshold = 5;

        // Act
        const result = getDistanceFromThreshold(value, threshold);

        // Assert
        expect(result).toBe(5);
    });

    test('should return the correct distance when value is less than threshold', () => {
        // Arrange
        const value = 3;
        const threshold = 8;

        // Act
        const result = getDistanceFromThreshold(value, threshold);

        // Assert
        expect(result).toBe(5);
    });
});