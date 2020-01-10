const sum = require('./circleciTestFile');

test('adds 1 + 2 to equal 3', testSum);

function testSum() {
    expect(sum(1, 2)).toBe(3);
}