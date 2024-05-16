import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./ProductItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";

function ProductItem(props) {
  const {
    id,
    imageLink: image,
    title,
    price,
    handleDeleteProduct,
    cartPage,
    quantity,
  } = props;
  const navigate = useNavigate();
  const { addToCartHandler } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  function addToCart() {
    const cartItem = {
      id,
      image,
      title,
      price,
    };

    addToCartHandler(cartItem);
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="tişört" />
      </div>
      <div className="product-info">
        <strong
          className="cursor-pointer"
          onClick={() => navigate(`/products/${id}`)}
        >
          {title.slice(0, 30)}
        </strong>
        <span>{cartPage ? `${price}₺ x ${quantity}` : `${price}₺`}</span>
        {!cartPage && (
          <>
            <Button
              className={"mt-[2px]"}
              background={"primary"}
              size={"sm"}
              onClick={addToCart}
            >
              Add To Cart
            </Button>
          </>
        )}
        <Button
          className={"mt-[2px]"}
          background={"danger"}
          size={"sm"}
          onClick={() => {
            !cartPage ? handleDeleteProduct(id) : removeFromCart(id);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.number.isRequired,
  handleDeleteProduct: PropTypes.func,
  cartPage: PropTypes.bool,
};

export default ProductItem;
