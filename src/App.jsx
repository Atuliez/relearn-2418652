import Header from "./components/Header";
import VendorCard from "./components/VendorCard";
import MenuItemCard from "./components/MenuItemCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section>
          <h2 className="section-title">Today's Vendors</h2>
          <VendorCard />
        </section>
        <section>
          <h2 className="section-title">Popular items</h2>
          <div className="grid">
            <MenuItemCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
