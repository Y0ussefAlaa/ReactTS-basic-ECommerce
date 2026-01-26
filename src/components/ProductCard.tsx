import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/fuctions";
import Image from "./Image";
import Buttton from "./UI/Buttton";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imgURL, price } = product;
  return (
    <div className="w-full sm:max-w-sm border rounded-md flex flex-col p-2 my-3">
      <Image
        imageURL={imgURL}
        alt="product image"
        className="w-full rounded-md mb-2"
      />
      <h2>{title}</h2>
      <p>{txtSlicer(description)}</p>
      <div className="flex my-5 space-x-2">
        <span className="w-5 h-5 rounded-full bg-red-700 cursor-pointer"></span>
        <span className="w-5 h-5 rounded-full bg-yellow-700 cursor-pointer"></span>
        <span className="w-5 h-5 rounded-full bg-green-700 cursor-pointer"></span>
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image alt="" imageURL={imgURL} className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex space-x-2 mt-5">
        <Buttton
          onClick={() => {
            console.log("Clicked");
          }}
          className=" bg-indigo-700"
        >
          EDIT
        </Buttton>
        <Buttton className=" bg-red-700 ">DELETE</Buttton>
      </div>
    </div>
  );
};

export default ProductCard;
