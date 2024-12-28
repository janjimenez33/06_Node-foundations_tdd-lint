import { describe, test, expect } from 'vitest';
import { getTotalWordsFromString } from './getTotalWordsFromString';

describe('getTotalWordsFromString', () => {
    test('should return the correct number of words in a sentence', () => {
        // Arrange
        const sentence = 'Hello world';

        // Act
        const result = getTotalWordsFromString(sentence);

        // Assert
        expect(result).toBe(2);
    });

    test('should return the correct number of words with leading and trailing spaces', () => {
        // Arrange
        const sentence = '  Leading and trailing spaces  ';

        // Act
        const result = getTotalWordsFromString(sentence);

        // Assert
        expect(result).toBe(4);
    });

    test('should return 0 for an empty string', () => {
        // Arrange
        const sentence = '';

        // Act
        const result = getTotalWordsFromString(sentence);

        // Assert
        expect(result).toBe(0);
    });

    test('should throw a TypeError if the input is not a string', () => {
        // Arrange
        const invalidInputs = [123, {}, [], null, undefined];

        invalidInputs.forEach(input => {
            // Act & Assert
            expect(() => getTotalWordsFromString(input)).toThrow(TypeError);
        });
    });
});
