import { useState } from "react";
import NewProductForm from "./NewProductForm";
import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  function handleDeleteProduct(id) {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  }

  function fetchProducts() {
    const myPromise = new Promise((resolve, reject) => {
      let success = true;

      if (success) {
        resolve([1, 2]);
      } else {
        reject("İşlem başarısız!");
      }
    });

    myPromise
      .then((value) => {
        return [...value, 12];
      })
      .then((value) => console.log(value))
      .catch((err) => console.log(err));
  }

  return (
    <div className="products-wrapper">
      <h1>Products Component</h1>
      <button onClick={fetchProducts}>Ürünleri Getir</button>
      <NewProductForm setProducts={setProducts} />
      <div className="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            imageLink={product.image}
            title={product.title}
            price={product.price}
            handleDeleteProduct={handleDeleteProduct}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
