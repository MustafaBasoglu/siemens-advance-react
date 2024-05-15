function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZRDVij3RuXMIOrulPp9Z7CsEryJV8yeCIg&usqp=CAU"
          alt="tişört"
        />
      </div>
      <div className="product-info">
        <strong>Soda</strong>
        <span>500₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
