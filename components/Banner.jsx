import React from "react";
import Image from "next/image";
import banerimg from "../public/assets/img-1.jpg";

const Banner = () => {
  const slides = [
    {
      id: 1,
      src: banerimg,
      alt: "Image 1",
      summary: "Casamentos",
      description:
        "Localizada no coração da cidade, a Casa de Eventos Estrela Dourada é o cenário perfeito para transformar seus sonhos em realidade. Com uma arquitetura elegante e moderna, nossas instalações oferecem um ambiente sofisticado e acolhedor para todos os tipos de celebrações. ",
    },
  ];
  return (
    <div className=" h-[500px] w-full relative group">
      <div className=" w-full h-full  bg-center bg-cover duration-500 relative transition-opacity bg-black ">
        <Image
          className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
          src={banerimg}
          alt={"/"}
          layout="fill"
          objectFit="cover"
          priority // Add the priority property
        />

        <div className=" p-[100px] justify-center  text-center animate-fade-in drop-shadow-lg h-full ">
          <div className="">
            <h1 className="text-4xl uppercase bg-clip-text font-bold text-white ">
              {slides[0].summary}
            </h1>
            <p className="text-white py-4 font-sans text-xl">
              {slides[0].description}
            </p>
            <p className="text-white py-4 font-sans text-xl">
              {slides[0].description}
            </p>
            <p className="text-white py-4 font-sans text-xl">
              {slides[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
