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

export default ProductItem;
