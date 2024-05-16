import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem(props) {
  const { id, imageLink: image, title, price, handleDeleteProduct } = props;
  const navigate = useNavigate();

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
