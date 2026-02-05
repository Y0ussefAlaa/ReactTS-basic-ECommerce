import type { TProduct } from "../components/types";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  price: string;
  category: {
    name: string;
    imgURL: string;
  };
  imgURL: string;
  colors: string[];
}

export interface IFormInput {
  id: string;
  name: TProduct;
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imgURL: string;
}
