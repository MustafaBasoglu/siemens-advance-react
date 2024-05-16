import { useState } from "react";
import { CartContext } from "./CartContext";
import PropTypes from "prop-types";

function CartProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCartHandler(cartItem) {
    const findProduct = cart.find((item) => {
      return item.id === cartItem.id;
    });

    if (findProduct) {
      const cartItems = cart.map((item) => {
        if (item.id === cartItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(cartItems);

      return;
    }
    setCart([{ ...cartItem, quantity: 1 }, ...cart]);
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
    console.log(id);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartHandler,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
