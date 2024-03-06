import React from "react";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaGear, FaHelmetSafety } from "react-icons/fa6";
import { GiWoodPile } from "react-icons/gi";

const Valores = () => {
  return (
    <div id="valores" className=" text-black  w-full h-full md:h-[900px]">
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
        <div
          style={{ borderRadius: "10px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-gray-300 shadow-xl"
        >
          <div className="grid justify-center mt-10">
            <FaGear size={70} color="#3f5f1c" />
          </div>
          <h1 className="grid text-center text-3xl font-bold text-gray-800 p-5">
            Bartender
          </h1>
          <p className="text-xl text-center text-gray-700">
            Melhores práticas de produção e automatização Melhores práticas de
            produção e automatização Melhores práticas de produção e
            automatização Melhores práticas de produção e automatização
          </p>
        </div>

        <div
          style={{ borderRadius: "10px", transition: "all 0.4s" }}
          className=" w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-gray-300 shadow-xl"
        >
          <div className="grid justify-center mt-10">
            <MdEnergySavingsLeaf size={70} color="#3f5f1c" />
          </div>
          <h1 className="grid text-center text-3xl font-bold text-gray-800 p-5">
            Buffet
          </h1>
          <p className="text-xl text-center text-gray-700">
            Melhores práticas de produção e automatização Melhores práticas de
            produção e automatização Melhores práticas de produção e
            automatização Melhores práticas de produção e automatização
          </p>
        </div>

        <div
          style={{ borderRadius: "10px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-gray-300 shadow-xl"
        >
          <div className="grid justify-center mt-10">
            <GiWoodPile size={70} color="#3f5f1c" />
          </div>
          <h1 className="grid text-center text-3xl font-bold text-gray-800 p-5">
            Decoração
          </h1>
          <p className="text-xl text-center text-gray-700">
            Melhores práticas de produção e automatização Melhores práticas de
            produção e automatização Melhores práticas de produção e
            automatização Melhores práticas de produção e automatização
          </p>
        </div>
        <div
          style={{ borderRadius: "10px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-gray-300 shadow-xl"
        >
          <div className="grid justify-center mt-10">
            <GiWoodPile size={70} color="#3f5f1c" />
          </div>
          <h1 className="grid text-center text-3xl font-bold text-gray-800 p-5">
            Cerimonial / Salão
          </h1>
          <p className="text-xl text-center text-gray-700">
            Melhores práticas de produção e automatização Melhores práticas de
            produção e automatização Melhores práticas de produção e
            automatização Melhores práticas de produção e automatização
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valores;
