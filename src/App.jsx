import { useState } from "react";
import vendors from "./data/vendors.js";
import Header from "./components/Header";
import VendorCard from "./components/VendorCard";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";

function App() {
  const [selectedVendorId, setSelectedVendorId] = useState(vendors[0].id);
  const selectedVendor = vendors.find((v) => v.id === selectedVendorId);

  return (
    <>
      <Header />
      <main className="container">
        <section>
          <h2 className="section-title">Choose a Vendor</h2>
          <div className="vendor.grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={vendor.id === selectedVendorId}
                onSelect={setSelectedVendorId}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="section-title">Menu: {selectedVendor.name}</h2>
          <MenuList items={selectedVendor.menu} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
