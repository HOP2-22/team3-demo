import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Creat() {
  // useStates
  const [ownerID, setOwnerID] = useState("xxa");
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  //setStates

  const NameInput = async (event) => {
    setName(event.target.value);
  };
  const ImageInput = async (event) => {
    setImages(event.target.value);
  };
  const ColorInput = async (event) => {
    setColor(event.target.value);
  };
  const PriceInput = async (event) => {
    setPrice(event.target.value);
  };
  const SizeInput = async (event) => {
    setPrice(event.target.value);
  };

  // create function
  const createProduct = async () => {
    console.log("is working");

    try {
      const res = await axios.post("http://localhost:7070/product/create", {
        ownerID,
        productName: name,
        images,
        price,
        color,
        size: {
          xxs: {
            count: 1,
          },
          xs: {
            count: 1,
          },
          s: {
            count: 1,
          },
          m: {
            count: 1,
          },
          l: {
            count: 1,
          },
          xxl: {
            count: 1,
          },
        },
      });

      alert("amjilttai burtgegdle");
    } catch (error) {
      alert("Нууц үг эсвэл Цахим хаяг буруу байна");
    }
  };

  return (
    <div className="w-full h-[100vh] bg-blue-600 py-[100px] mt-[100px] flex items-center justify-center flex-col gap-6">
      <div className="w-[100px] bg-red-300 ">
        <input type="text" placeholder="name " onChange={NameInput} />
        <input type="text" placeholder="images" onChange={ImageInput} />
        <input type="text" placeholder="color" onChange={ColorInput} />
        <input type="text" placeholder="price" onChange={PriceInput} />
        <button
          onClick={() => {
            createProduct();
          }}>
          add
        </button>
      </div>
    </div>
  );
}
