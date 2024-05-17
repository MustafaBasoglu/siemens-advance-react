import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../redux/slices/productSlice";
import ErrorModal from "../UI/ErrorModal";

const initialValues = {
  title: "",
  image: "",
  price: 0,
};

const NewProductForm = () => {
  const [productInputs, setProductInputs] = useState(initialValues);
  const [isShowError, setIsShowError] = useState(false);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    const { name, value } = event.target;

    setProductInputs({
      ...productInputs,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { title, image, price } = productInputs;

    const isFormValid = Object.values(productInputs).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      setIsShowError(true);
      return;
    }

    const newProduct = {
      id: Math.random(),
      title: title,
      image: image,
      price: Number(price),
    };

    dispatch(addNewProduct(newProduct));

    setProductInputs(initialValues);
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
            value={productInputs.title}
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
            value={productInputs.image}
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
            value={productInputs.price}
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
      <ErrorModal
        isShowError={isShowError}
        setIsShowError={setIsShowError}
        message="Inputlar dolu olmalı!"
      />
    </div>
  );
};

export default NewProductForm;
