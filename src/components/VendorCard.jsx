import { Link } from "react-router";

function VendorCard({ vendor, isSelected, onSelect }) {
  // const vendor = {
  //   name: "Cafe Mahallah A_Tool",
  //   location: "Mahallah A_Tool, Block F",
  //   openHours: "8:00 AM - 9:00 PM",
  //   isOpen: true,
  // };

  return (
    <button
      type="button"
      className={isSelected ? "card vendor-card selected" : "card vendor-card"}
      onClick={() => onSelect(vendor.id)}
    >
      <div className="thumb" aria-hidden="true">
        {vendor.name.charAt(0)}
      </div>
      <div>
        <Link to={`/vendor/${vendor.id}`}>
          <h2>{vendor.name}</h2>
        </Link>
        <p className="muted">{vendor.location}</p>
          <span className={vendor.isOpen ? "status open" : "status closed"}>
            {vendor.isOpen ? "Open now" : "Closed"}
          </span>
      </div>
    </button>
  );
}

export default VendorCard;
