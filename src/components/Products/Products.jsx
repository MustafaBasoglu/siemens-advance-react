import ProductItem from "./ProductItem";
import "./Products.css";

const productsData = [
  {
    id: 1,
    title: "Soda",
    price: 100,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Tişört",
    price: 500,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 3,
    title: "Ayakkabı",
    price: 600,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
];

function Products() {

  return (
    <div className="products-wrapper">
      <h1>Products Component</h1>
      <div className="products">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            imageLink={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
