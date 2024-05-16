import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import ProductItem from "../components/Products/ProductItem";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  const totals = cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <div className="cartItems flex gap-4">
        {cart.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageLink={item.image}
            quantity={item.quantity}
            cartPage
          />
        ))}
      </div>
      <div className="totals">
        <strong>Totals: </strong>
        {totals}₺
      </div>
    </div>
  );
};

export default CartPage;
