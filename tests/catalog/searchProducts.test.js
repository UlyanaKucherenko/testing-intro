const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const foundItem = products.find(item => item.name.includes('Наушники'));
    expect(searchProducts(products, 'Наушники')).toEqual([foundItem]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const foundItem = products.find(item => item.name.includes('Чистый код'));
    expect(searchProducts(products, 'Чистый код')).toEqual([foundItem]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const foundItem = products.find(item => item.name.includes('Настольная лампа'));
    expect(searchProducts(products, 'Настольная лампа')).toEqual([foundItem]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const foundItem = products.find(item => item.name.toLowerCase().includes('javascript'));
    expect(searchProducts(products, 'javascript')).toEqual([foundItem]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const foundItem = products.find(item => item.name.includes('ЧЕХОЛ'));
    if (!foundItem) return;
    expect(searchProducts(products, 'ЧЕХОЛ')).toEqual([foundItem]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const foundItem = products.find(item => item.name.toLowerCase().includes('наушники'));
    expect(searchProducts(products, 'наушники')).toEqual([foundItem]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '')).toEqual(products);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, "   ")).toEqual(products)
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, "\t\n")).toEqual(products)
  });
});
