import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem(props) {
  const {
    id,
    imageLink: image,
    title,
    price,
    handleDeleteProduct,
    setCart,
  } = props;
  const navigate = useNavigate();

  function addToCart() {
    const cartItem = {
      id: Math.random(),
      image,
      title,
      price,
    };

    setCart((cart) => [cartItem, ...cart]);
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
        <span>{price}₺</span>
        <Button
          className={"mt-[2px]"}
          background={"primary"}
          size={"sm"}
          onClick={addToCart}
        >
          Add To Cart
        </Button>
        <Button
          className={"mt-[2px]"}
          background={"danger"}
          size={"sm"}
          onClick={() => handleDeleteProduct(id)}
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
  id: PropTypes.number,
  handleDeleteProduct: PropTypes.func,
  setCart: PropTypes.func,
};

export default ProductItem;
