const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const catalog = filterByCategory(products, 'all');
    expect(catalog.map(item => item.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const catalog = filterByCategory(products, undefined);
    expect(catalog.map(item => item.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const catalog = filterByCategory(products, '');
    expect(catalog.map(item => item.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const catalog = filterByCategory(products, 'electronics');
    expect(catalog.map(item => item.id)).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const catalog = filterByCategory(products, 'books');
    expect(catalog.map(item => item.id)).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const catalog = filterByCategory(products, 'home');
    expect(catalog.map(item => item.id)).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const catalog = filterByCategory(products, 'clothes');
    expect(catalog.map(item => item.id)).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const catalog = filterByCategory(products, 'toys');
    expect(catalog.map(item => item.id)).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const catalog = filterByCategory(products, 'sports');
    expect(catalog.map(item => item.id)).toEqual([]);
  });
});
