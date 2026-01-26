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
  name: string;
  label: string;
  type: string;
}
