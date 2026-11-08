import { useState } from "react";
import useVendors from "../hooks/useVendors";
import useCart from "../hooks/useCart";
import VendorCard from "../components/VendorCard";
import MenuList from "../components/MenuList";

export default function HomePage() {
  const { vendors, loading, error, reload } = useVendors();
  const { addToCart } = useCart();
  const [selectedVendorId, setSelectedVendorId] = useState(null);

  if (loading) return <p>Loading vendors…</p>;

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={reload}>Try again</button>
      </div>
    );
  }

  const selectedVendor = vendors.find(
    (vendor) => vendor.id === selectedVendorId,
  );

  return (
    <section className="container">
      <h1 className="section-title">Vendors</h1>
      <div className="vendor-grid">
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
            isSelected={vendor.id === selectedVendorId}
            onSelect={setSelectedVendorId}
          />
        ))}
      </div>

      {selectedVendor && (
        <MenuList items={selectedVendor.menu} onAdd={addToCart} />
      )}
    </section>
  );
}
