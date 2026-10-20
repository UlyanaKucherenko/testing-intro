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

function changeQuantity(cart, productId, newQuantity) {
  const foundItem = cart.find((item) => item.id === productId);
  if (!foundItem) return cart;

  if (newQuantity <= 0) {
    throw new RangeError('Quantity must be greater than 0');
  }

  if (newQuantity > foundItem.stock) {
    throw new RangeError('Insufficient stock available');
  }

  return cart.map((item) =>
    item.id === productId ? { ...item, quantity: newQuantity } : item
  );
}

function removeFromCart(cart, productId) {
  const foundItem = cart.find((item) => item.id === productId);

  if (!foundItem) return cart;
  return cart.filter(item => item.id !== productId)
}

function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
