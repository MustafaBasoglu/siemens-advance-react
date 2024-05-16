import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <Skeleton />;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-1/2 p-6">
          <img
            className="w-full h-auto object-cover object-center rounded"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-semibold ">{product.title}</h1>
          <p className=" mt-4">{product.description}</p>
          <div className="mt-4">
            <span className=" font-bold text-2xl">${product.price}</span>
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-bold uppercase rounded">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold ">Product Details</h2>
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
