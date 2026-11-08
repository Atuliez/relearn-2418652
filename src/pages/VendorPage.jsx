// src/pages/VendorPage.jsx
import { useParams } from "react-router";
import useVendors from "../hooks/useVendors";
import useCart from "../hooks/useCart";
import MenuList from "../components/MenuList.jsx";

export default function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error } = useVendors();
  const { addToCart } = useCart();

  if (loading) return <p>Loading vendor…</p>;
  if (error) return <p>{error}</p>;

  const vendor = vendors.find((item) => String(item.id) === id);

  if (!vendor) return <p>Vendor not found</p>;

  return (
    <section className="container">
      <h1>{vendor.name}</h1>
      {vendor.menu?.length ? (
        <MenuList items={vendor.menu} onAdd={addToCart} />
      ) : (
        <p>No menu items available.</p>
      )}
    </section>
  );
}
