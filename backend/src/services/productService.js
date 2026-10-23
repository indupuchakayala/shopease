const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 3499,
    category: "Footwear",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 4999,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  },
];

const getProducts = () => {
  return products;
};

module.exports = {
  getProducts,
};