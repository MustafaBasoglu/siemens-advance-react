import { useLoaderData } from "react-router-dom";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  const data = useLoaderData();

  return (
    <div className="products-page">
      <h1>Products Page</h1>
      <Products data={data} />
    </div>
  );
};

export default ProductsPage;
