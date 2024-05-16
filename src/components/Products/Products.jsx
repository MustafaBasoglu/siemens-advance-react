import { useState } from "react";
import PropTypes from "prop-types";
// import NewProductForm from "./NewProductForm";
import ProductItem from "./ProductItem";
import "./Products.css";

function Products({ data }) {
  const [products, setProducts] = useState(data.products);
  const [cart, setCart] = useState([]);


  function handleDeleteProduct(id) {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  }

  return (
    <div className="products-wrapper">
      {/* <NewProductForm setProducts={setProducts} /> */}
      <div className="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            imageLink={product.images[0]}
            title={product.title}
            price={product.price}
            products={products}
            setCart={setCart}
            handleDeleteProduct={handleDeleteProduct}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

Products.propTypes = {
  data: PropTypes.object,
};

export default Products;
