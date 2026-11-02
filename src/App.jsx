import Header from "./components/Header";
import vendors from "./data/vendors.js";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";

function App() {
  const selectedVendor = vendors[0];

  return (
    <>
      <Header />
      <main className="container">
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
