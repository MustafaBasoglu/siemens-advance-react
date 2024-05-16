import { useEffect, useState } from "react";
import NewProductForm from "./NewProductForm";
import ProductItem from "./ProductItem";
import "./Products.css";
import Spinner from "../UI/Spinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleDeleteProduct(id) {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  }

  async function fetchProducts() {
    setIsLoading(true);
    setProducts([]);
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-wrapper">
      <h1>Products Component</h1>
      <button onClick={fetchProducts}>Ürünleri Getir</button>
      <NewProductForm setProducts={setProducts} />
      {isLoading && <Spinner />}
      <div className="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            imageLink={product.images[0]}
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
