import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/fuctions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Buttton from "./UI/Buttton";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  setProductToEditIdx: (value: number) => void;
  openEdit: () => void;
  idx: number;
  openConfirmModal: () => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEdit,
  setProductToEditIdx,
  idx,
  openConfirmModal,
}: IProps) => {
  const { title, description, imgURL, colors, price } = product;

  /*----------------------HANDLERS-----------------------------*/
  const onEdit = () => {
    openEdit();
    setProductToEdit(product);
    setProductToEditIdx(idx);
  };

  const onRemove = () => {
    setProductToEdit(product);
    openConfirmModal();
  };

  /*----------------------RENADERS-----------------------------*/
  const renderProductColors = colors.map((color) => (
    <CircleColor color={color} key={color} />
  ));

  return (
    <div className="w-full sm:max-w-sm border rounded-md flex flex-col p-2 my-3">
      <Image
        imageURL={imgURL}
        alt="product image"
        className="w-full rounded-md mb-2"
      />
      <h2>{title}</h2>
      <p>{txtSlicer(description)}</p>
      <div className="flex flex-wrap my-5 space-x-1 space-y-1">
        {renderProductColors}
      </div>
      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image alt="" imageURL={imgURL} className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex space-x-2 mt-5">
        <Buttton onClick={onEdit} className=" bg-indigo-700">
          EDIT
        </Buttton>
        <Buttton className=" bg-red-700 " onClick={onRemove}>
          Remove
        </Buttton>
      </div>
    </div>
  );
};

export default ProductCard;
