function VendorCard() {
  const vendor = {
    name: "Cafe Mahallah A_Tool",
    location: "Mahallah A_Tool, Block F",
    openHours: "8:00 AM - 9:00 PM",
    isOpen: true,
  };

  return (
    <article className="card vendor-card">
      <div className="thumb" aria-hidden="true">
        {vendor.name.charAt(0)}
      </div>
      <div>
        <h2>{vendor.name}</h2>
        <p className="muted">{vendor.location}</p>
        <span className={vendor.isOpen ? "status open" : "status closed"}>
          {vendor.isOpen ? "Open now" : "Closed"}
        </span>
      </div>
    </article>
  );
}

export default VendorCard;
