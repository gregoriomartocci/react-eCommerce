import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart/Index";
import "./Styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { removeItemFromCart, addItemToCart, clearItemfromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemfromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <span className="arrow" onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className="value"> {quantity}</span>
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </span>
      <span className="price"> ${price} </span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;