import { add } from './StringCalculator';

describe('StringCalculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });
});