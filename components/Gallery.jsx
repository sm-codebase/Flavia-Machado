import React from "react";
import Image from "next/image";
import ProdutoImg1 from "../public/assets/galeria/pt-img-1.jpeg";
import ProdutoImg2 from "../public/assets/galeria/pt-img-2.jpeg";
import ProdutoImg3 from "../public/assets/galeria/pt-img-3.jpeg";

const gallery = () => {
  return (
    <div id="quemsomos" className="container mx-auto text-black p-4">
      <div className="grid justify-items-center">
        <div className="text-white text-2xl p-2">
          <p>Galeria de fotos</p>
        </div>
        <div className="grid lg:grid-cols- grid-cols-3 ">
          <Image
            src={ProdutoImg1}
            alt="imagem do produto"
            width={400}
            height={400}
            className="rounded-lg p-4"
          />
          <Image
            src={ProdutoImg2}
            alt="imagem do produto"
            width={400}
            height={400}
            className="rounded-lg p-4"
          />
          <Image
            src={ProdutoImg3}
            alt="imagem do produto"
            width={400}
            height={400}
            className="rounded-lg p-4"
          />
        </div>
      </div>
    </div>
  );
};

export default gallery;
