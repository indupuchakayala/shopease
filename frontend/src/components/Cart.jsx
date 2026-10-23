function Cart({cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity}) {

    return (
        <div>
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.map(cartItem => (
                    <div key={cartItem.id}>
                        <h3>{cartItem.name}</h3>
                        <p>${cartItem.price.toFixed(2)}</p>
                        <p>Quantity: {cartItem.quantity}</p>
                        <button onClick={() => onRemoveFromCart(cartItem.id)}>Remove</button>
                        <button onClick={() => onIncreaseQuantity(cartItem.id)}>+</button>
                        <button onClick={() => onDecreaseQuantity(cartItem.id)}>-</button>
                    </div>
                ))}
                <p>Total: ${cartItems.reduce((total,item) => (total + item.price * item.quantity), 0).toFixed(2)} </p>
            </div>
            {/* need to implement the cart icon */}
            <p>Items in Cart: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
        </div>
    )
}

export default Cart;