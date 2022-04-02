import { useContext } from "react";
import CheckoutItem from "../../Components/Checkout-Item/Index";

import { CartContext } from "../../Contexts/Cart/Index";

import "./Styles.scss";

const Checkout = () => {

  const { cartItems, cartTotal, addItemToCart, clearItemfromCart } = useContext(CartContext);


  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span> Product </span>
        </div>
        <div className="header-block">
          <span> Description </span>
        </div>
        <div className="header-block">
          <span> Quantity </span>
        </div>
        <div className="header-block">
          <span> Price </span>
        </div>
        <div className="header-block">
          <span> Remove </span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="checkout-total">Total ${cartTotal}</span>
    </div>
  );
};

export default Checkout;