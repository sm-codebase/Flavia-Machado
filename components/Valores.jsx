import React from "react";
import {
  FaHeartbeat,
  FaHandshake,
  FaUsers,
  FaArrowAltCircleUp,
  FaEye,
} from "react-icons/fa";

const Valores = () => {
  return (
    <div id="valores" className="container rounded-lg mx-auto bg-gradient-to-r from-gray-800 to-gray-700 text-white p-5">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Nossos Valores
              </h1>
          </div>
          <div className="text-justify">
            <p>
              {" "}
              Integridade, colaboração, empenho, perspectiva, melhoria contínua,
              inovação e flexibilidade, buscando constantemente superar as
              expectativas dos clientes e promover a qualidade, sustentabilidade
              e inovação em suas embalagens de madeira.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center p-4"></div>

      <div className="flex flex-wrap items-center pt-0">
        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
          <div className="justify-center">
            <div className="my-4 w-full px-4">
              <a>
                <div className="bg-gray-900 shadow-lg rounded-lg p-4">
                  <h1 className="text-white">
                    <FaHandshake size={20}/>
                  </h1>
                  <p className="text-lg text-white mt-4 font-semibold">
                    Integridade
                  </p>
                  <p className="text-sm text-white mt-4 font-thin">
                    Somos justos e honestos, comprometidos com nossa ética.
                  </p>
                </div>
              </a>
            </div>
            <div className="my-4 w-full px-4">
              <a>
                <div className="bg-gray-900 shadow-lg rounded-lg p-4 mt-4">
                  <h1 className="text-white">
                    <FaUsers size={20} />
                  </h1>
                  <p className="text-lg text-white mt-4 font-semibold">
                    Colaboração
                  </p>
                  <p className="text-sm text-white mt-4 font-thin">
                    Valorizamos o trabalho em equipe.
                  </p>
                </div>
              </a>
            </div>
            <div className="my-4 w-full px-4">
              <a>
                <div className="bg-gray-900 shadow-lg rounded-lg p-4">
                  <h1 className="text-white">
                    <FaArrowAltCircleUp size={20}/>
                  </h1>
                  <p className="text-lg text-white mt-4 font-semibold">
                    Empenho
                  </p>
                  <p className="text-sm text-white mt-4 font-thin">
                    Demonstramos uma grande vontade de vencer.
                  </p>
                </div>
              </a>
            </div>
            <div className="my-4 w-full px-4">
              <a>
                <div className="bg-gray-900 shadow-lg rounded-lg p-4">
                  <h1 className="text-white">
                    <FaHeartbeat size={20} />
                  </h1>
                  <p className="text-lg text-white mt-4 font-semibold">
                    Perspectiva
                  </p>
                  <p className="text-sm text-white mt-4 font-thin">
                    Buscamos equilíbrio em todas as nossas ações.
                  </p>
                </div>
              </a>
            </div>
            <div className="my-4 w-full px-4">
              <a>
                <div className="bg-gray-900 shadow-lg rounded-lg p-4">
                  <h1 className="text-white">
                    <FaEye size={20}/>
                  </h1>
                  <p className="text-lg text-white mt-4 font-semibold">
                    Perspectiva
                  </p>
                  <p className="text-sm text-white mt-4 font-thin">
                    Buscamos equilíbrio em todas as nossas ações.
                  </p>
                </div>
              </a>
            </div>
            <div className="my-4 w-full px-4">
              <a>
                <div className="bg-gray-900 shadow-lg rounded-lg p-4">
                  <h1 className="text-white">
                    <FaHeartbeat size={20}/>
                  </h1>
                  <p className="text-lg text-white mt-4 font-semibold">
                    Melhoria Contínua
                  </p>
                  <p className="text-sm text-white mt-4 font-thin">
                    Estamos constantemente em busca de novas soluções.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valores;
