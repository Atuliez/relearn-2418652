import { useState } from "react";
import MenuItemCard from "./MenuItemCard.jsx";
import useCart from "../hooks/useCart";

function MenuList({ items }) {
  const [sortBy, setSortBy] = useState("popularity");
  const { addToCart } = useCart();

  if (items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>;
  }

  const sortedItems = [...items].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "popularity":
        return Number(b.popularity ?? 0) - Number(a.popularity ?? 0);
      default:
        return 0;
    }
  });

  return (
    <>
      <label htmlFor="menu-sort">Sort by: </label>
      <select
        id="menu-sort"
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value="popular">Popularity: most popular</option>
        <option value="price-low">Price: low to high</option>
        <option value="price-high">Price: high to low</option>
      </select>

      <div className="grid">
        {sortedItems.map((item) => (
          <MenuItemCard key={item.id} item={item} onAdd={addToCart} />
        ))}
      </div>
    </>
  );
}

export default MenuList;
