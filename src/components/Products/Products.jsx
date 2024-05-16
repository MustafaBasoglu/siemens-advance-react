import { useEffect, useState } from "react";
import NewProductForm from "./NewProductForm";
import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("Emin Başbayan");

  function handleDeleteProduct(id) {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  }

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  }

  // component ilk yüklendiğinde (mount)
  useEffect(() => {
    fetchProducts();
    document.querySelector(".products").innerHTML = "";
  }, []);

  // component ilk yüklendiğinde ve update olduğunda
  useEffect(() => {
    console.log("component update olduğunda!");
  }, [name]);

  return (
    <div className="products-wrapper">
      <h1>Products Component</h1>
      <p>{name}</p>
      <button onClick={() => setName("Ahmet")}>Title Change</button>
      <button onClick={fetchProducts}>Ürünleri Getir</button>
      <NewProductForm setProducts={setProducts} />
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
