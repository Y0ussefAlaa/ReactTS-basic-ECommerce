import { useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Modal";
import { formInputsList, productList } from "./data/productList";
import Button from "./components/UI/Buttton";
import Input from "./components/UI/Input";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const defaultProductObject = {
    title: "",
    description: "",
    imgURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imgURL: "",
    },
  };
  /* --------------------STATES-------------------------------*/
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imgURL: "",
    price: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  /* ----------------------HANDLERS--------------------*/

  const open = () => setIsOpen(true);

  const onCancel = () => setIsOpen(false);
  const onChageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, imgURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imgURL,
      price,
    });
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    console.log("Send the product to the server");
  };

  const close = () => {
    setProduct(defaultProductObject);
    setIsOpen(false);
  };

  /* -----------------------RENDER------------------------------------*/
  const renderedProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderdFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col my-2" key={input.id}>
      <label
        className="mb-2 text-sm font-medium text-gray-700"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        key={input.id}
        value={product[input.name] ?? ""}
        onChange={(e) => {
          onChageHandler(e);
        }}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  /*------------------------------------------------------------------------------*/
  return (
    <div className="container mx-auto px-4">
      <Button className="bg-indigo-700 hover:bg-indigo-400" onClick={open}>
        Add
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {renderedProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="Add New Product">
        <form className="space-y-3" onSubmit={(e) => submitHandler(e)}>
          {renderdFormInputList}
          <div className="flex space-x-2 mt-4">
            <Button className="text-white bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="text-white bg-gray-400 hover:bg-gray-500"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      <h3>sdfa</h3>
    </div>
  );
}

export default App;
