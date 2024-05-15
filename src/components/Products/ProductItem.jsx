import { useState } from "react";
import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem(props) {
  const { imageLink: image, title: pTitle, price } = props;
  const [title, setTitle] = useState(pTitle);

  function handleTitleChange() {
    setTitle("Title Changed!");
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="tişört" />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
        <button onClick={handleTitleChange}>Title Change</button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ProductItem;
