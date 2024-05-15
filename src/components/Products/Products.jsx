import ProductItem from "./ProductItem";

function Products() {
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZRDVij3RuXMIOrulPp9Z7CsEryJV8yeCIg&usqp=CAU";

  const title = "Soda";

  const price = 600;

  return (
    <div className="products-wrapper">
      <h1>Products Component</h1>
      <div className="products">
        <ProductItem imageLink={image} title={title} price={price} />
      </div>
    </div>
  );
}

export default Products;
