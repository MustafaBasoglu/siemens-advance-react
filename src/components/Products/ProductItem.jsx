import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem(props) {
  const { imageLink: image, title, price } = props;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="tişört" />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}

export default ProductItem;
