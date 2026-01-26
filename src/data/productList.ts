import { v4 as uuidv4 } from "uuid";

import type { IFormInput, IProduct } from "../interfaces";

const lorem100 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto sunt iusto. Veritatis repellat unde illum vitae eveniet dolore obcaecati, quam sed aliquam laborum libero reprehenderit officia quod provident. Autem architecto quaerat odio voluptas sunt expedita corporis fugit temporibus blanditiis voluptatibus magnam harum tenetur eligendi alias, repudiandae officiis velit dignissimos deserunt maiores? Excepturi molestias earum incidunt dicta tenetur ut, aspernatur quasi animi atque. Dolore, ducimus magni? Sunt quod ducimus in suscipit provident error debitis repudiandae accusamus enim nisi. Sint, ipsum eveniet nesciunt aliquid sequi dolores non et suscipit dolore necessitatibus quas possimus laborum nulla. Autem optio obcaecati expedita laudantium tenetur.";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "2026 Ferrari Car",
    description: lorem100,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    price: "$500,000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    },
  },
  {
    id: uuidv4(),
    title: "2026 Ferrari Car",
    description: lorem100,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    price: "$500,000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    },
  },
  {
    id: uuidv4(),
    title: "2026 Ferrari Car",
    description: lorem100,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    price: "$500,000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    },
  },
  {
    id: uuidv4(),
    title: "2026 Ferrari Car",
    description: lorem100,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    price: "$500,000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    },
  },
  {
    id: uuidv4(),
    title: "2026 Ferrari Car",
    description: lorem100,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    price: "$500,000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    },
  },
  {
    id: uuidv4(),
    title: "2026 Ferrari Car",
    description: lorem100,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    price: "$500,000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    },
  },
  {
    id: uuidv4(),
    title: "2026 Ferrari Car",
    description: lorem100,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    price: "$500,000",
    colors: ["#FF0032", "#2563eb", "#FF6E31", "000"],
    category: {
      name: "Cars",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgXxCoWAxMD5-hrsEKfiF_ejqfBblzDMt7A&s",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
