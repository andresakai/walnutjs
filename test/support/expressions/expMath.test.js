const interpreter = require('../../../src/support/expressions/interpreter');

describe('MATH Tests', () => {

  describe('Operations with INTEGER', () => {
    it('should be validate the expression MATH [ADD]', () => {
      const result = interpreter.resolveExpression('math(5|add:i|3)');
      expect(result).toEqual('8');
    });

    it('should be validate the expression MATH [SUB]', () => {
      const result = interpreter.resolveExpression('math(5|sub:i|3)');
      expect(result).toEqual('2');
    });


    it('should be validate the expression MATH [MUL]', () => {
      const result = interpreter.resolveExpression('math(5|mul:i|3)');
      expect(result).toEqual('15');
    });


    it('should be validate the expression MATH [DIV]', () => {
      const result = interpreter.resolveExpression('math(6|div:i|2)');
      expect(result).toEqual('3');
    });
  });

  describe('Operations with DOUBLE', () => {
    it('should be validate the expression MATH [ADD]', () => {
      const result = interpreter.resolveExpression('math(5|add:d|3.5)');
      expect(result).toEqual('8.5');
    });

    it('should be validate the expression MATH [SUB]', () => {
      const result = interpreter.resolveExpression('math(5|sub:d|3.5)');
      expect(result).toEqual('1.5');
    });


    it('should be validate the expression MATH [MUL]', () => {
      const result = interpreter.resolveExpression('math(5|mul:d|3.5)');
      expect(result).toEqual('17.5');
    });


    it('should be validate the expression MATH [DIV]', () => {
      const result = interpreter.resolveExpression('math(7|div:d|2)');
      expect(result).toEqual('3.5');
    });
  });

});
