import { useMemo } from "react";
import { CartContext } from "./cart-context";
import useLocalStorage from "../hooks/useLocalStorage";

export default function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("campuseats-cart", []);
  const [orders, setOrders] = useLocalStorage("campuseats-orders", []);

  const count = useMemo(
    () => cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0),
    [cart],
  );

  const total = cart.reduce(
    (sum, line) => sum + (Number(line.price) || 0) * (Number(line.qty) || 0),
    0,
  );

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existing = currentCart.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: (Number(cartItem.qty) || 0) + 1 }
            : cartItem,
        );
      }

      return [...currentCart, { ...item, qty: 1 }];
    });
  };

  const changeQty = (id, delta) => {
  setCart((currentCart) =>
    currentCart
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty + delta } : item
      )
      .filter((item) => item.qty > 0)
  );
};


  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const placeOrder = (details) => {
    if (cart.length === 0) return;

    const order = {
      id: crypto.randomUUID(),
      details,
      items: cart,
      total,
      placedAt: new Date().toISOString(),
    };

    setOrders((currentOrders) => [...currentOrders, order]);
    setCart([]);
  };

  const value = useMemo(
    () => ({
      cart,
      orders,
      count,
      total,
      addToCart,
      changeQty,
      removeFromCart,
      placeOrder,
    }),
    [
      cart,
      orders,
      count,
      total,
      addToCart,
      changeQty,
      removeFromCart,
      placeOrder,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
