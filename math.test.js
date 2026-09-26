// math.test.js
const sum = require('./math.js');

test('kiểm tra 1 + 2 bằng 3', () => {
  expect(sum(1, 2)).toBe(3);
});