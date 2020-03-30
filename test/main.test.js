const myAwesomeFunc = require('../src/main');

test('outputs the correct string', () => {
  const result = myAwesomeFunc();

  expect(result).toBe(1);
});
