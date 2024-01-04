import React from "react";
import Image from "next/image";
import ProdutoImg1 from "../public/assets/pt-img-1.jpg";
import ProdutoImg2 from "../public/assets/pt-img-2.jpg";
import ProdutoImg3 from "../public/assets/pt-img-3.jpg";
import ProdutoImg4 from "../public/assets/pt-img-4.jpg";


const services = () => {
  return (
    <div id="services" className="container mx-auto text-black p-5">
      <div className="flex flex-col md:flex-row items-center  text-gray-700 ">
        <div className="md:w-1/2">
          <div className="text-2xl font-bold text-gray-700 mb-2 mt-8">
            <h3 className="text-red-400 underline text-justify "></h3>
          </div>

          <div className="text-justify">
            
          </div>
        </div>
      

      <div className="py-2 px-10 md-w-1/2 md:pr-5 mt-10">
      <div className="font-bold text-2xl text-center p-4">
      <p>Eventos</p>
      </div>
        <Image
          src={ProdutoImg1}
          alt="imagem do produto"
          width={300}
          height={300}
          className="mx-auto block lg:w-full lg:h-auto rounded-sm"
        />
        <div className="font-bold text-2xl text-center p-4">
        <p>Eventos</p>
        </div>
          <Image
            src={ProdutoImg2}
            alt="imagem do produto"
            width={300}
            height={300}
            className="mx-auto block lg:w-full lg:h-auto rounded-sm"
          />
          <div className="font-bold text-2xl text-center p-4">
      <p>Eventos</p>
      </div>
        <Image
          src={ProdutoImg3}
          alt="imagem do produto"
          width={300}
          height={300}
          className="mx-auto block lg:w-full lg:h-auto rounded-sm"
        />
        <div className="font-bold text-2xl text-center p-4">
      <p>Eventos</p>
      </div>
        <Image
          src={ProdutoImg4}
          alt="imagem do produto"
          width={300}
          height={300}
          className="mx-auto block lg:w-full lg:h-auto rounded-sm"
        />
        



      </div>
      </div>
    </div>
  );
};

export default services;
