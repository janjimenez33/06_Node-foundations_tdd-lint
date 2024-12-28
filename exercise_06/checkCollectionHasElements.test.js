import { describe, test, expect } from 'vitest';
import { checkCollectionHasElements } from './checkCollectionHasElements';

describe('checkCollectionHasElements', () => {
    test('should throw a TypeError if the input is not an array', () => {
        // Arrange
        const invalidInputs = ['string', {}, 123, null, undefined];

        invalidInputs.forEach(input => {
            // Act Assert
            expect(() => checkCollectionHasElements(input)).toThrow(TypeError);
        });
    });

    test('should return true if the array has elements', () => {
        // Arrange
        const collection = [1, 2, 3];

        // Act
        const result = checkCollectionHasElements(collection);

        // Assert
        expect(result).toBe(true);
    });

    test('should return false if the array is empty', () => {
        // Arrange
        const collection = [];

        // Act
        const result = checkCollectionHasElements(collection);

        // Assert
        expect(result).toBe(false);
    });
});
