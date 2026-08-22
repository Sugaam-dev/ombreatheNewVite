/**
 * Simple e-commerce cart manager using localStorage for Ombreathe.
 */

export const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem("omb_cart")) || [];
  } catch {
    return [];
  }
};

export const saveCart = (cart) => {
  localStorage.setItem("omb_cart", JSON.stringify(cart));
  // Dispatch custom event to notify listeners
  window.dispatchEvent(new Event("cart_updated"));
};

export const addToCart = (item) => {
  const cart = getCart();
  // Match on unique item ID and room option if applicable
  const existing = cart.find(x => x.id === item.id && x.roomType === item.roomType);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  saveCart(cart);
};

export const removeFromCart = (id, roomType) => {
  const cart = getCart();
  const updated = cart.filter(x => !(x.id === id && x.roomType === roomType));
  saveCart(updated);
};

export const updateQuantity = (id, roomType, quantity) => {
  const cart = getCart();
  const item = cart.find(x => x.id === id && x.roomType === roomType);
  if (item) {
    item.quantity = Math.max(1, quantity);
  }
  saveCart(cart);
};

export const clearCart = () => {
  localStorage.removeItem("omb_cart");
  window.dispatchEvent(new Event("cart_updated"));
};
