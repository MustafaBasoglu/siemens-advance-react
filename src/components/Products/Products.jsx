import ProductItem from "./ProductItem";

function Products() {
  return (
    <div className="products-wrapper">
      <h1>Products Component</h1>
      <div className="products">
        <ProductItem />
      </div>
    </div>
  );
}

export default Products;
