import React from "react";
import {
  FaTeeth,
  FaGlobe,
  FaCog,
  FaSquare,
  FaSquareFull,
  FaSquarespace,
  FaStethoscope,
  FaHeartbeat,
  FaStar,
  FaMedal,
  FaPager,
  FaBook,
} from "react-icons/fa";
import Image from "next/image";
import ProdutoImg from "../public/assets/img-1.jpg";

const quemSomos = () => {
  return (
    <div id="quemsomos" className="container mx-auto text-black p-5">
      <div className="flex flex-col md:flex-row items-center  text-gray-700 ">
      <div className="md:w-1/2">
        <div className="text-2xl font-bold text-gray-700 mb-2 mt-8">
          <h3 className="text-red-400 underline text-justify"></h3>
        </div>
        

        <div className="text-justify">
          <p>
           
          </p>
        </div>
        </div>
        <div className="py-2 px-10 md-w-1/2 md:pr-5 mt-10 pt-10">
          <Image
            src={ProdutoImg}
            alt="imagem do produto"
            width={200}
            height={200}
            className="mx-auto block lg:w-full lg:h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default quemSomos;
