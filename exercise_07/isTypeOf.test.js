import { describe, test, expect } from 'vitest';
import { isTypeOf } from './isTypeOf';

describe('isTypeOf', () => {
    test('should throw a TypeError if the type is not valid', () => {
        // Arrange
        const invalidTypes = ['object', 'function', 'symbol', 'undefined'];

        invalidTypes.forEach(type => {
            // Act Assert
            expect(() => isTypeOf('value', type)).toThrow(TypeError);
        });
    });

    test('should return true if the value matches the type "string"', () => {
        // Arrange
        const value = 'hello';
        const type = 'string';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });

    test('should return true if the value matches the type "number"', () => {
        // Arrange
        const value = 123;
        const type = 'number';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });

    test('should return true if the value matches the type "boolean"', () => {
        // Arrange
        const value = true;
        const type = 'boolean';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });

    test('should return true if the value matches the type "array"', () => {
        // Arrange
        const value = [1, 2, 3];
        const type = 'array';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });

    test('should return false if the value does not match the type', () => {
        // Arrange
        const value = 123;
        const type = 'string';

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(false);
    });
});
