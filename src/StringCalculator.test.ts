import { add } from './StringCalculator';

describe('StringCalculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    it('should return the number itself when only one number is passed', () => {
        expect(add('1')).toBe(1);
    });

    it('should return the sum of two numbers separated by comma', () => {
        expect(add('1,2')).toBe(3);
    });

    it('should handle any amount of numbers', () => {
        expect(add('1,2,3,4,5')).toBe(15);
    });

    it('should handle new lines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
    });
});