import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCartHandler,
  removeFromCartHandler,
} from "../../redux/slices/cartSlice";
import Button from "../UI/Button";
import "./ProductItem.css";
import { handleDeleteProduct } from "../../redux/slices/productSlice";

function ProductItem(props) {
  const { id, imageLink: image, title, price, cartPage, quantity } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function addToCart() {
    const cartItem = {
      id,
      image,
      title,
      price,
      quantity: 1,
    };

    dispatch(addToCartHandler(cartItem));
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
            !cartPage
              ? dispatch(handleDeleteProduct(id))
              : dispatch(removeFromCartHandler(id));
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
  cartPage: PropTypes.bool,
};

export default ProductItem;
