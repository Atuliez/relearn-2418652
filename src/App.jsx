import { BrowserRouter, Route, Routes } from "react-router";
import CartProvider from "./context/CartProvider.jsx";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePaga.jsx";
import VendorPage from "./pages/VendorPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { useEffect, useState } from "react";
import { Loading, ErrorMessage } from "./components/Status.jsx";
import Header from "./components/Header.jsx";
import VendorCard from "./components/VendorCard.jsx";
import MenuList from "./components/MenuList.jsx";
import CartPage from "./pages/CartPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0); // bump it to fetch again
  const [selectedVendorId, setSelectedVendorId] = useState(null);
  const [cart, setCart] = useState([]); // lines of { item, qty }
  const [view, setView] = useState("menu"); // 'menu' | 'cart' | 'done'
  const [lastOrder, setLastOrder] = useState(null);

  // Runs after the first render, and again whenever reloadKey changes
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch("/api/vendors.json", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setVendors(data);
        setSelectedVendorId(data[0]?.id ?? null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          return;
        }
        setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => {
      controller.abort();
    }; // Cleanup: cancel old requeset
  }, [reloadKey]);

  const selectedVendor = vendors.find((v) => v.id === selectedVendorId);
  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0);

  function handleAddToCart(item) {
    setCart((prev) => {
      // [...prevCart, item]); // a NEW array, never cart.push
      const existing = prev.find((line) => line.item.id === item.id);

      if (existing) {
        // Already in the cart: copy every line, and add 1 to the matching one
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }

      return [...prev, { item, qty: 1 }];
    });
  }

  function handleChangeQty(itemId, delta) {
    //dellta is +1 or -1

    setCart(
      (prev) =>
        prev
          .map((line) =>
            line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
          )
          .filter((line) => line.qty > 0), // qty 0 means the line disappears
    );
  }

  function handleRemove(itemId) {
    setCart(
      (prev) => prev.filter((line) => line.item.id !== itemId), // keep lines whose item.id !== itemId
    );
  }

  function handlePlaceOrder(details) {
    const total = cart.reduce(
      (sum, line) => sum + line.item.price * line.qty,
      0,
    );

    setLastOrder({ ...details, total });
    setCart([]);
    setView("done");
  }

  let content;

  if (view === "cart") {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    );
  } else if (view === "done") {
    content = lastOrder ? (
      <section className="card">
        <h2>Order placed.</h2>
        <p>
          Thank you, {lastOrder.name}. Pick up at {lastOrder.pickupTime}
          (Mahallah {lastOrder.mahallah}). Total RM {lastOrder.total.toFixed(2)}
          .
        </p>
        <button className="btn" onClick={() => setView("menu")}>
          Back to menus
        </button>
      </section>
    ) : null;
  } else if (loading) {
    content = <Loading />;
  } else if (error) {
    content = (
      <ErrorMessage
        message={error}
        onRetry={() => setReloadKey((k) => k + 1)}
      />
    );
  } else {
    content = (
      <>
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
            isSelected={vendor.id === selectedVendorId}
            onSelect={setSelectedVendorId}
          />
        ))}

        {selectedVendor && (
          <MenuList items={selectedVendor.menu} onAdd={handleAddToCart} />
        )}
      </>
    );
  }

  return (
    <>
      <CartProvider>
        <BrowserRouter>
       

          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage content={content} />} />
              <Route path="/vendor/:id" element={<VendorPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      
    </>
  );
}

export default App;
