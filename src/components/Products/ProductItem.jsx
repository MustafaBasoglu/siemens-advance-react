import "./ProductItem.css";

function ProductItem(props) {
  const image = props.imageLink;
  const title = props.title;
  const price = props.price;

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
