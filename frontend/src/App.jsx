import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function handleAddToCart(product) {
    setCart((prevCart) =>{
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  function handleIncreaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecreaseQuantity(productId) {
    setCart((prevCart) => 
      prevCart
    .map((item) => item.id === productId ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0} : item)
    .filter((filterItem) => filterItem.quantity > 0)
    )
  }

  function handleRemoveFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1>ShopEase</h1>
      <button onClick={() => setShowCart(prevValue => !prevValue)}>
        {showCart ? "Hide Cart" : `Cart ${cart.reduce((total, item) => total + item.quantity,0)}`}
      </button>
      {showCart && <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} onIncreaseQuantity={handleIncreaseQuantity} onDecreaseQuantity={handleDecreaseQuantity}/> 
}
      <div style={{display:"flex", flexWrap: "wrap", gap: "20px"}}>
        {products.map(product => {
          return (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart}/>
          );
        })}
      </div>
    </div>
  ); 
}

export default App;