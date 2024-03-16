import PropTypes from 'prop-types';
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div className="cart-container">
            <h3>Cart: {cart.length}</h3>
            <div className="cart">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img src={bottle.image}></img>
                        <button onClick={() =>handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;