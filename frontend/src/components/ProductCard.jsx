import './ProductCard.css';

function ProductCard({product, onAddToCart}) {

    return (
    <div className="product-card">
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>${product.price.toFixed(2)}</p>
        <p>Image: <img src={product.image} alt={product.name} /></p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
    );
}

export default ProductCard;