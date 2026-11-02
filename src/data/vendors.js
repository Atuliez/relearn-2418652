const vendors = [
  {
    id: "atul-restoran",
    name: "Atul Restoran",
    location: "Mahallah A_Tool, Block F",
    openHours: "8:00 AM - 9:00 PM",
    isOpen: true,
    menu: [
      {
        id: "at-1",
        name: "Dish 1",
        description: "Description 1",
        price: 4.0,
        category: "Main Course",
        available: true,
        popularity: 5,
      },
      {
        id: "at-2",
        name: "Dish 2",
        description: "Description 2",
        price: 5.0,
        category: "Main Course",
        available: false,
        popularity: 8,
      },
    ],
  },
  {
    id: "cafe-mahallah-a-tool",
    name: "Cafe Mahallah A_Tool",
    location: "Mahallah A_Tool, Block F",
    openHours: "8:00 AM - 9:00 PM",
    isOpen: true,
    menu: [
      {
        id: "cafe-1",
        name: "Coffee",
        description: "Freshly brewed coffee",
        price: 2.0,
        category: "Beverages",
        available: true,
        popularity: 10,
      },
      {
        id: "cafe-2",
        name: "Sandwich",
        description: "Delicious sandwich",
        price: 5.0,
        category: "Main Course",
        available: true,
        popularity: 2,
      },
    ],
  },
];

export default vendors;
