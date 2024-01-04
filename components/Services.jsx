import React from "react";
import Image from "next/image";
import ProdutoImg1 from "../public/assets/pt-img-1.jpg";
import ProdutoImg2 from "../public/assets/pt-img-2.jpg";
import ProdutoImg3 from "../public/assets/pt-img-3.jpg";
import ProdutoImg4 from "../public/assets/pt-img-4.jpg";

const services = () => {
  return (
    <div id="services" className="container mx-auto text-black p-5 ">
      <div className="grid justify-items-center  ">
        <div>
        <div className="font-bold  text-white p-4">
        <h2>Faça seu evento conosco</h2>
        </div>
          <video
            controls
            src={"/assets/videos/video-1.mp4"}
            style={{ width: "480px", height: "720px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default services;
