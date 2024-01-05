import React from "react";
import Image from "next/image";
import ProdutoImg1 from "../public/assets/pt-img-1.jpg";
import ProdutoImg2 from "../public/assets/pt-img-2.jpg";
import ProdutoImg3 from "../public/assets/pt-img-3.jpg";
import ProdutoImg4 from "../public/assets/pt-img-4.jpg";

const quemSomos = () => {
  return (
    <div id="quemsomos" className="container mx-auto text-black p-5">
      <div className="grid justify-items-center">
      <div className="text-white text-2xl p-8">
      <p>Galeria de fotos</p>
      </div>
        <div className="grid grid-cols-3">
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
          <Image
            src={ProdutoImg4}
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

export default quemSomos;
