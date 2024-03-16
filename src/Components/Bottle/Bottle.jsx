import PropTypes from 'prop-types';
const Bottle = ({bottle, handlePurchase}) => {
    const {name, image, price} = bottle;
    return (
        <div className="bottle">
            <h3>Name: {name}</h3>
            <img src={image} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handlePurchase(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handlePurchase: PropTypes.func.isRequired
}
export default Bottle;