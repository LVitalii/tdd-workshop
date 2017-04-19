describe('Test', function() {
   it('should be true', function() {
       expect(test()).toBeTruthy();
   });
});

describe('Calculator', function() {
    it('should return 3 for \'1 + 2\'', function() {
        const result = 3;

        expect(calcAdd(1,2)).toBe(result);
    });

    it('should return 1 for \'3 - 2\'', function() {
        const result = 1;

        expect(calcSubstr(3,2)).toBe(result);
    });

    it('should return 6 for \'3 * 2\'', function() {
        const result = 6;

        expect(calcMulti(3,2)).toBe(result);
    });

    it('should return 3 for "6 \\ 2"', function() {
        const result = 3;

        expect(calcDiv("sd6f",2)).toBe(result);
    });
});

