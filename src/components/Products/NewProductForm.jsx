import PropTypes from "prop-types";

import { useState } from "react";

const NewProductForm = ({ products, setProducts }) => {
  const [productInputs, setProductInputs] = useState({
    title: "",
    image: "",
    price: 0,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setProductInputs({
      ...productInputs,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      id: Math.random(),
      title: productInputs.title,
      image: productInputs.image,
      price: Number(productInputs.price),
    };

    setProducts([newProduct, ...products]);
  }

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-slate-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block  text-sm font-bold mb-2 text "
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            placeholder="Image"
            name="image"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Yeni Ürün Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

NewProductForm.propTypes = {
  setProducts: PropTypes.func,
  products: PropTypes.array,
};

export default NewProductForm;
