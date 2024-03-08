import React from "react";
import Image from "next/image";
import banerimg from "../public/assets/img-1.jpg";

const Banner = () => {
  const slides = [
    {
      id: 1,
      src: banerimg,
      alt: "Image 1",
      summary: " A Essência da Sofisticação Natural no Espaço Flavia",
      description1:"Bem-vindo ao Espaço Flavia, onde cada celebração é uma obra-prima de requinte e beleza. Sob a direção de Flavia Machado, nossos eventos transcendem as expectativas, proporcionando uma experiência majestosa que combina a grandiosidade da natureza com a sofisticação contemporânea.  ",
      description2:"No Espaço Flavia, criamos memórias que perduram, onde cada detalhe é cuidadosamente planejado para oferecer uma experiência imersiva e excepcional aos nossos convidados. Venha fazer parte dessa jornada de elegância e encanto, onde a marca Flavia Machado é sinônimo de excelência e distinção.",
    },
  ];
  return (
    <div className="h-full md:h-[500px] w-full relative group">
      <div className=" w-full h-full  bg-center bg-cover duration-500 relative transition-opacity bg-black ">
        <Image
          className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
          src={banerimg}
          alt={"/"}
          layout="fill"
          objectFit="cover"
          priority // Add the priority property
        />

        <div className="grid items-center justify-center  h-full   animate-fade-in drop-shadow-lg  ">
          <div className="text-center md:w-[800px] p-5">
            <h1 className="text-4xl uppercase bg-clip-text text-center font-bold text-white mb-5">
              {slides[0].summary}
            </h1>
            <p className="text-white py-4 font-sans text-xl">
              {slides[0].description1}
            </p>
            <p className="text-white py-4 font-sans text-xl">
              {slides[0].description2}
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
