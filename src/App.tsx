import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Modal";
import { formInputsList, productList } from "./data/productList";
import Button from "./components/UI/Buttton";
import Input from "./components/UI/Input";

function App() {
  /* -----------STATES--------------*/
  const [isOpen, setIsOpen] = useState(false);

  /* -----------HANDLERS--------------*/

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  /* -----------RENDER--------------*/
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
      <Input type={input.type} name={input.name} id={input.id} key={input.id} />
    </div>
  ));
  return (
    <div className="container mx-auto px-4">
      <Button className="bg-indigo-700 hover:bg-indigo-400" onClick={open}>
        Add
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {renderedProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="Add New Product">
        <form className="space-y-3">
          {renderdFormInputList}
          <div className="flex space-x-2 mt-4">
            <Button className="text-white bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="text-white bg-gray-400 hover:bg-gray-500">
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
