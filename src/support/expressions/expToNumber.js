const sanitizeNumberBRL = x => x.replace(/[^0-9,]/g, '').replace(',', '.');
const sanitizeNumberEN = x => x.replace(/[^0-9.]/g, '');

const sanitizeMap = {
  BRL: sanitizeNumberBRL,
  EN: sanitizeNumberEN,
};

const expToNumber = {

  /**
   * Used to return only number of string value
   */
  parseExpression(expression) {
    const [number, typeDefinition = ':', format] = expression.split('|');
    const [type, precision] = typeDefinition.split(':');

    if (!number || !format || !type) {
      const sb = [];
      sb.push('[1] - tonumber(text | precision | format) - tonumber(R$16,70|d:2|BRL)  - 16.7');
      sb.push('[2] - tonumber(text | precision | format) - tonumber(R$16,70|i|BRL)  - 16');
      throw new Error(sb.join('\n'));
    }

    const numberSanitize = sanitizeMap[format](number);

    switch (type) {
      case 'i':
        return parseInt(numberSanitize, 10).toString();
      case 'd':
        return parseFloat(numberSanitize).toFixed(precision);
      default:
        return 0;
    }
  },
};

module.exports = expToNumber;
