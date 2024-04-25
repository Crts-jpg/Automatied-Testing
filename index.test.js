const tambah = require('./index.js');

test('adds 1 + 2 to equal 3', () => {
    expect(tambah(1, 2)).toBe(3);
});

test('adds 5 + 5 to equal 10', () => {
    expect(tambah(5, 10)).toBe(10);
});
