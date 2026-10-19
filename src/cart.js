function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity = 1) {
  if (quantity <= 0) {
    throw new RangeError('Quantity must be greater than 0');
  }

  const foundItem = cart.find((item) => item.id === product.id);
  const totalQuantity = foundItem ? foundItem.quantity + quantity : quantity;

  if (totalQuantity > product.stock) {
    throw new RangeError('Insufficient stock available');
  }

  if (foundItem) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
    );
  }

  return [...cart, { ...product, quantity }];
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
