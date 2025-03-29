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
});