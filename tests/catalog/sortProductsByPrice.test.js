const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const sortedList = sortProductsByPrice(products, 'asc');
    expect(sortedList.map(item => item.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const sortedList = sortProductsByPrice(products)
    expect(sortedList.map(item => item.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const sortedList = sortProductsByPrice([products[0], products[2], products[3]]);
    expect(sortedList.map(item => item.id)).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const sortedList = sortProductsByPrice(products, 'desc');
    expect(sortedList.map(item => item.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const sortedList = sortProductsByPrice([products[2], products[0], products[3]], 'desc');
    expect(sortedList.map(item => item.id)).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const sortedList = sortProductsByPrice([products[4], products[1], products[5]], 'desc');
    expect(sortedList.map(item => item.id)).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const list = [products[0], products[2], products[3]];
    sortProductsByPrice(list, 'asc');
    expect(list).toEqual([products[0], products[2], products[3]]);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const list = [products[0], products[2], products[3]];
    sortProductsByPrice(list, 'desc');
    expect(list).toEqual([products[0], products[2], products[3]]);
  });

  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const list = [...products];
    sortProductsByPrice(list);
    expect(list).toEqual(products);
  });
});
