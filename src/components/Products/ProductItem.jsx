import PropTypes from "prop-types";
import "./ProductItem.css";
import Button from "../UI/Button";

function ProductItem(props) {
  const { id, imageLink: image, title, price, handleDeleteProduct } = props;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="tişört" />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
        <Button
          className={"mt-[2px]"}
          background={"danger"}
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
};

export default ProductItem;
