import MenuItemCard from "./MenuItemCard.jsx";

function MenuList({ items, onAdd }) {
  if (items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>;
  }

  return (
    <>
      <label htmlFor="menu-sort">Sort by: </label>
      <select id="menu-sort" defaultValue="popular">
        <option value="popular">Popularity</option>
        <option value="price-low">Price: low to high</option>
        <option value="price-high">Price: high to low</option>
      </select>

      <div className="grid">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </>
  );
}

export default MenuList;
