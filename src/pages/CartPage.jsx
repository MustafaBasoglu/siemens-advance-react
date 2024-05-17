import { useSelector } from "react-redux";
import ProductItem from "../components/Products/ProductItem";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totals = cartItems.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);
  
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <div className="cartItems flex gap-4">
        {cartItems.map((item) => (
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
