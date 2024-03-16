import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    console.log(bottles.length);
    if (bottles.length) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);

      const savedCart = [];
      for(const id of storedCart){
        // console.log(id)
        const bottle = bottles.find(bottle => bottle.id === id)
        if(bottle){
            savedCart.push(bottle)
        }
      }
      console.log("Saved Cart: ", savedCart)
      setCart(savedCart)
        
    }
  }, [bottles]);

  const handlePurchase = (bottle) => {
    // console.log('data Collected')
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id);
  };

  const handleRemoveFromCart = id => {
    const remainingCart = cart.filter(bottle => bottle.id !== id)
    setCart(remainingCart)
    removeFromLocalStorage(id)
  }

  return (
    <div>
      <h1>Bottles: {bottles.length}</h1>
      <Cart 
      cart={cart} 
      handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handlePurchase={handlePurchase}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}; 

export default Bottles;
