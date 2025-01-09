import { describe, test, expect } from 'vitest';
import { isAdditionGreaterThanFifty } from './isAdditionGreaterThanFifty';

describe('isAdditionGreaterThanFifty', () => {
    test('should return true if the sum of the inputs is 50 or greater', () => {
        // Arrange
        const summand1 = 30;
        const summand2 = 20;

        // Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert
        expect(result).toBe(true);
    });

    test('should return false if the sum of the inputs is less than 50', () => {
        // Arrange
        const summand1 = 20;
        const summand2 = 20;

        // Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert
        expect(result).toBe(false);
    });
});
