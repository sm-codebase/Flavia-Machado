import React from "react";
import Image from "next/image";

const services = () => {
  return (
    <div id="services" className="container mx-auto text-black p-5 ">
      <div className="grid justify-items-center  ">
        <div>
        <div className="grid text-center text-white p-6 ">
        <h2>Faça seu evento conosco</h2>
        </div>
          <video
            controls
            src={"/assets/videos/video-1.mp4"}
            style={{ width: "720px", height: "480px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default services;
