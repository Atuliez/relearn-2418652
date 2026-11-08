// src/pages/OrdersPage.jsx
import useCart from "../hooks/useCart";

export default function OrdersPage() {
  const { orders } = useCart();

  return (
    <section className="container">
      <div className="order-list">
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <article key={order.id}>
            <h2>Order {order.id}</h2>
            <p>
              Nama: {order.details.name} — Mahallah: {order.details.mahallah}
            </p>
            <p>Total: ${order.total.toFixed(2)}</p>
          </article>
        ))
      )}
      </div>
    </section>
  );
}
