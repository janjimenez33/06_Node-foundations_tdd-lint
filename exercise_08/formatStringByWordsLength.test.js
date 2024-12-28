import { describe, test, expect } from 'vitest';
import { formatStringByWordsLength } from './formatStringByWordsLength';

describe('formatStringByWordsLength', () => {
    test('should throw a TypeError if the input is not a string', () => {
        // Arrange
        const invalidInputs = [123, {}, [], null, undefined];

        invalidInputs.forEach(input => {
            // Act Assert
            expect(() => formatStringByWordsLength(input)).toThrow(TypeError);
        });
    });

    test('should return uppercase string if the number of words is greater than 5', () => {
        // Arrange
        const sentence = 'This is a test sentence with more than five words';

        // Act
        const result = formatStringByWordsLength(sentence);

        // Assert
        expect(result).toBe(sentence.toUpperCase());
    });

    test('should return lowercase string if the number of words is 5 or less', () => {
        // Arrange
        const sentence = 'This is a test';

        // Act
        const result = formatStringByWordsLength(sentence);

        // Assert
        expect(result).toBe(sentence.toLowerCase());
    });
});
