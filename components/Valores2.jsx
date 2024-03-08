import React from "react";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaGear, FaHelmetSafety } from "react-icons/fa6";
import { GiWoodPile } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { GiCookingPot, GiPartyFlags, GiPartyPopper } from "react-icons/gi";

const Valores = () => {
  return (
    <div id="valores" className=" text-black  w-full h-full md:h-[900px]">
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
        <div
          style={{ borderRadius: "10px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-gray-300 shadow-xl"
        >
          <div className="grid justify-center mt-10">
            <BiSolidDrink size={70} color="#3f5f1c" />
          </div>
          <h1 className="grid text-center text-3xl font-bold text-gray-800 p-5">
            Bartender
          </h1>
          <p className="text-xl text-center text-gray-700  p-4">
            Com habilidade e criatividade, nossos bartenders preparam coquetéis
            que elevam o sabor e a elegância de qualquer evento.
          </p>
        </div>

        <div
          style={{ borderRadius: "10px", transition: "all 0.4s" }}
          className=" w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-gray-300 shadow-xl"
        >
          <div className="grid justify-center mt-10">
            <GiCookingPot size={70} color="#3f5f1c" />
          </div>
          <h1 className="grid text-center text-3xl font-bold text-gray-800 p-5">
            Buffet
          </h1>
          <p className="text-xl text-center text-gray-700  p-4">
            Venha desfrutar do melhor da culinária em nosso buffet, onde cada
            prato é uma obra-prima de sabor e apresentação.
          </p>
        </div>

        <div
          style={{ borderRadius: "10px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-gray-300 shadow-xl"
        >
          <div className="grid justify-center mt-10">
            <GiPartyFlags size={70} color="#3f5f1c" />
          </div>
          <h1 className="grid text-center text-3xl font-bold text-gray-800 p-5">
            Decoração
          </h1>
          <p className="text-xl text-center text-gray-700 p-4">
            Nossa decoração é cuidadosamente planejada para tornar seu evento
            inesquecível, combinando estilo e beleza em cada detalhe.
          </p>
        </div>
        <div
          style={{ borderRadius: "10px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-gray-300 shadow-xl"
        >
          <div className="grid justify-center mt-10">
            <GiPartyPopper size={70} color="#3f5f1c" />
          </div>
          <h1 className="grid text-center text-3xl font-bold text-gray-800 p-5">
            Cerimonial / Salão
          </h1>
          <p className="text-xl text-center text-gray-700  p-4">
            No Espaço Flavia, sua cerimônia e recepção são perfeitamente
            harmonizadas. Do altar ao salão, criamos momentos memoráveis para
            sua celebração única.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valores;
