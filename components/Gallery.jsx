import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal"; 

import ProdutoImg1 from "../public/assets/pt-img-1.jpg";
import ProdutoImg2 from "../public/assets/pt-img-2.jpg";
import ProdutoImg3 from "../public/assets/pt-img-3.jpg";
import ProdutoImg4 from "../public/assets/pt-img-3.jpg";
import ProdutoImg5 from "../public/assets/pt-img-3.jpg";
import ProdutoImg6 from "../public/assets/pt-img-4.jpg";
import ProdutoImg7 from "../public/assets/pt-img-3.jpg";
import ProdutoImg8 from "../public/assets/pt-img-4.jpg";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const images = [ProdutoImg1, ProdutoImg2, ProdutoImg3, ProdutoImg4, ProdutoImg5, ProdutoImg6, ProdutoImg7, ProdutoImg8];

  const handleClick = (img) => {
    setSelectedImg(img);
    2;
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImg);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImg(images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImg);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImg(images[nextIndex]);
  };

  return (
    <div id="galeria" className="  text-black ">
      <div className="flex justify-items-center">
        <div className="grid lg:grid-cols-4 grid-cols-1">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`imagem do produto ${index + 1}`}
              width={0}
              height={0}
              className=" cursor-pointer"
              onClick={() => handleClick(img)}
            />
          ))}
        </div>
      </div>
      {selectedImg && (
        <Modal
          img={selectedImg}
          onClose={() => setSelectedImg(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Gallery;
