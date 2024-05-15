import "./ProductItem.css";

function ProductItem() {
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZRDVij3RuXMIOrulPp9Z7CsEryJV8yeCIg&usqp=CAU";

  const title = "Soda";
  
  const price = 500;

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
