import React from "react";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaGear, FaHelmetSafety } from "react-icons/fa6";
import { GiWoodPile } from "react-icons/gi";

const Valores = () => {
  return (
    <div id="valores" className=" md:h-[900px]  w-full h-full">
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
        <div
          style={{ borderRadius: "10px", transition: "all 0.4s" }}
          className="bg-white w-full md:w-[1200px] md:h-[550px] h-full hover:scale-110 hover:bg-gray-300 shadow-xl border-2"
        >
          <div className="grid justify-center mt-10"></div>
          <h1 className="grid text-center text-3xl font-bold text-gray-800 p-5">
            O Espaço que Realiza Seus Sonhos
          </h1>
          <p className="text-xl text-center text-gray-700 p-5">
            No Espaço Flavia, oferecemos uma gama completa de serviços para
            tornar o seu evento verdadeiramente excepcional. Desde bartenders
            especializados em criar coquetéis exclusivos até um buffet que
            combina sabores refinados e apresentações impecáveis, cada detalhe é
            cuidadosamente planejado para atender às suas expectativas mais
            elevadas. Nossa equipe de decoração transforma nosso salão em um
            cenário deslumbrante, onde a elegância se encontra com a natureza,
            criando uma atmosfera encantadora para suas festas e eventos.
          </p>{" "}
          <p className="text-xl text-center text-gray-700 p-5">
            Seja para uma cerimônia íntima ou um casamento grandioso, nossos
            espaços flexíveis se adaptam às suas necessidades, proporcionando o
            ambiente perfeito para celebrar momentos especiais. No Espaço
            Flavia, a marca registrada é a excelência em todos os aspectos.
            Nossa equipe dedicada está comprometida em tornar sua experiência
            conosco memorável e sem preocupações. De casamentos a eventos
            corporativos, estamos aqui para realizar seus sonhos e criar
            memórias que durarão para sempre. Venha celebrar conosco e descubra
            por que somos o destino preferido para quem busca sofisticação,
            beleza e serviço impecável.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valores;
