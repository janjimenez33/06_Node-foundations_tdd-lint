import { describe, test, expect } from 'vitest';
import { transformCollectionToString } from './transformCollectionToString';

describe('transformCollectionToString', () => {
    test('should throw a TypeError if the input is not an array', () => {
        // Arrange
        const invalidInputs = ['string', {}, 123, null, undefined];

        invalidInputs.forEach(input => {
            // Act Assert
            expect(() => transformCollectionToString(input)).toThrow(TypeError);
        });
    });

    test('should return a string joined by "|" if the array has elements', () => {
        // Arrange
        const collection = [1, 2, 3];

        // Act
        const result = transformCollectionToString(collection);

        // Assert
        expect(result).toBe('1|2|3');
    });

    test('should return an empty string if the array is empty', () => {
        // Arrange
        const collection = [];

        // Act
        const result = transformCollectionToString(collection);

        // Assert
        expect(result).toBe('');
    });
});
